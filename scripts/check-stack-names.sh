#!/usr/bin/env bash
# Fail if banned stack/framework names appear in visible built HTML,
# title text, meta content attributes, or JSON-LD.
# Script and style blocks are stripped so /_next/ asset paths and
# framework-injected script payloads cannot false-positive.
# Uses bash, grep, and Python 3 stdlib only — no extra packages.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [[ ! -d out ]]; then
  echo "Static export out/ is missing. Run npm run build first." >&2
  exit 1
fi

# Word-boundary, case-insensitive. Stems are listed alongside longer
# forms because \<Postgres\> does not match PostgreSQL, and \<Swift\>
# does not match SwiftUI.
PATTERN='(\<Next\.js\>|\<NextJS\>|\<React\>|\<TypeScript\>|\<JavaScript\>|\<Tailwind\>|\<Flutter\>|\<Dart\>|\<SwiftUI\>|\<Swift\>|\<Kotlin\>|\<HealthKit\>|\<TestFlight\>|\<RevenueCat\>|\<OpenAI\>|\<GPT\>|\<Gemini\>|\<Firebase\>|\<Supabase\>|\<PostgreSQL\>|\<Postgres\>|\<Node\>|\<Vercel\>|\<asc CLI\>|\<Riverpod\>|\<Xcode\>)'

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
):
    text = text.replace(entity, repl)
text = re.sub(r"[ \t]+", " ", text)
sys.stdout.write(text)
PY
}

failed=0
found_html=0
while IFS= read -r page; do
  found_html=1
  text="$(extract_scan_text "$page")"
  matches="$(printf '%s' "$text" | grep -i -E -o "$PATTERN" || true)"
  if [[ -n "$matches" ]]; then
    failed=1
    while IFS= read -r match; do
      printf '%s: %s\n' "$page" "$match"
    done < <(printf '%s\n' "$matches" | sort -u)
  fi
done < <(find out -name '*.html' ! -path 'out/_next/*' -print | sort)

if [[ "$found_html" -eq 0 ]]; then
  echo "No HTML files in out/." >&2
  exit 1
fi

if [[ "$failed" -ne 0 ]]; then
  echo "Banned stack name(s) found in built HTML." >&2
  exit 1
fi

echo "Stack name checks passed."
