#!/usr/bin/env bash
# Fail if unpublished/USD price remnants appear in source or the static export.
#  - the sequence 59 + . + 99 must be absent entirely
#  - "$" followed by a digit must be absent from visible built HTML
# Uses bash, grep, and Python 3 stdlib only — no extra packages.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [[ ! -d out ]]; then
  echo "Static export out/ is missing. Run npm run build first." >&2
  exit 1
fi

# Assembled so this script does not contain the needle.
banned_amount="59"."99"

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "error: not a git checkout; refusing to pass without a source scan" >&2
  exit 1
fi

failed=0

list="$(mktemp)"
trap 'rm -f "$list"' EXIT
git ls-files -z -- . ':(exclude)package-lock.json' > "$list"
find out -type f -print0 >> "$list"

while IFS= read -r -d '' path; do
  case "$path" in
    node_modules/* | .next/* | .git/* | package-lock.json) continue ;;
  esac
  if [[ ! -f "$path" ]]; then
    continue
  fi
  set +e
  match="$(grep -n -F -I -e "$banned_amount" -- "$path" 2>/dev/null)"
  status=$?
  set -e
  if [[ "$status" -eq 0 ]]; then
    failed=1
    printf '%s: contains %s\n' "$path" "$banned_amount"
  fi
done < "$list"

extract_scan_text() {
  python3 - "$1" <<'PY'
import re
import sys
from pathlib import Path

raw = Path(sys.argv[1]).read_text(encoding="utf-8", errors="replace")
chunks: list[str] = []

for match in re.finditer(r"<title\b[^>]*>(.*?)</title>", raw, flags=re.I | re.S):
    chunks.append(re.sub(r"<[^>]+>", " ", match.group(1)))

for match in re.finditer(r"<meta\b[^>]*>", raw, flags=re.I | re.S):
    content = re.search(
        r"\bcontent\s*=\s*(\"([^\"]*)\"|'([^']*)')",
        match.group(0),
        flags=re.I,
    )
    if content:
        chunks.append(content.group(2) if content.group(2) is not None else content.group(3))

for match in re.finditer(
    r"<script\b([^>]*)>(.*?)</script>", raw, flags=re.I | re.S
):
    attrs, body = match.group(1), match.group(2)
    if re.search(r"type\s*=\s*['\"]application/ld\+json['\"]", attrs, flags=re.I):
        chunks.append(body)

visible = re.sub(r"<!--.*?-->", " ", raw, flags=re.S)
visible = re.sub(r"<script\b[^>]*>.*?</script>", " ", visible, flags=re.I | re.S)
visible = re.sub(r"<style\b[^>]*>.*?</style>", " ", visible, flags=re.I | re.S)
visible = re.sub(r"<[^>]+>", " ", visible)
chunks.append(visible)

text = "\n".join(chunks)
for entity, repl in (
    ("&nbsp;", " "),
    ("&amp;", "&"),
    ("&lt;", "<"),
    ("&gt;", ">"),
    ("&quot;", '"'),
    ("&#39;", "'"),
    ("&apos;", "'"),
    ("&#36;", "$"),
    ("&dollar;", "$"),
):
    text = text.replace(entity, repl)
text = re.sub(r"[ \t]+", " ", text)
sys.stdout.write(text)
PY
}

found_html=0
while IFS= read -r page; do
  found_html=1
  text="$(extract_scan_text "$page")"
  matches="$(printf '%s' "$text" | grep -o '\$[0-9]' || true)"
  if [[ -n "$matches" ]]; then
    failed=1
    while IFS= read -r match; do
      printf '%s: visible price in USD-style form: %s\n' "$page" "$match"
    done < <(printf '%s\n' "$matches" | sort -u)
  fi
done < <(find out -name '*.html' ! -path 'out/_next/*' -print | sort)

if [[ "$found_html" -eq 0 ]]; then
  echo "No HTML files in out/." >&2
  exit 1
fi

if [[ "$failed" -ne 0 ]]; then
  echo "Price copy checks failed." >&2
  exit 1
fi

echo "Price copy checks passed."
