#!/usr/bin/env bash
# Fail the build if tracked source or the static export contains a secret.
# Uses grep (not rg). Exits non-zero on any finding, a grep error, or a
# missing scan target so an empty scan cannot pass.
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
cd "$root"

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "error: not a git checkout; refusing to pass without a source scan" >&2
  exit 1
fi

if [[ ! -d out ]]; then
  echo "error: out/ is missing; refusing to pass without scanning the build" >&2
  exit 1
fi

out_count="$(find out -type f | wc -l | tr -d ' ')"
if [[ "$out_count" -eq 0 ]]; then
  echo "error: out/ contains no files; refusing to pass" >&2
  exit 1
fi

env_bad=0
while IFS= read -r -d '' path; do
  base="$(basename "$path")"
  if [[ "$base" == .env || "$base" == .env.* ]]; then
    if [[ "$base" != .env.example ]]; then
      echo "error: committed env file is not allowed: $path" >&2
      env_bad=1
    fi
  fi
done < <(git ls-files -z)
if [[ "$env_bad" -ne 0 ]]; then
  exit 1
fi

# Stripe's live prefix is assembled so this script does not contain the needle.
stripe_pattern='sk_'"live_"

patterns=(
  'AIza[0-9A-Za-z_-]{35}'
  '-----BEGIN [A-Z ]*PRIVATE KEY-----'
  'AKIA[0-9A-Z]{16}'
  'gh[pousr]_[A-Za-z0-9]{36,}'
  "$stripe_pattern"
)

list="$(mktemp)"
trap 'rm -f "$list"' EXIT

# Tracked source, excluding lockfile and generated/vendor trees, plus the export.
git ls-files -z -- . ':(exclude)package-lock.json' > "$list"
find out -type f -print0 >> "$list"

if [[ ! -s "$list" ]]; then
  echo "error: scan file list is empty; refusing to pass" >&2
  exit 1
fi

tracked=0
while IFS= read -r -d '' path; do
  case "$path" in
    node_modules/* | .next/* | .git/* | package-lock.json) continue ;;
  esac
  if [[ "$path" != out/* && "$path" != out ]]; then
    tracked=$((tracked + 1))
  fi
done < "$list"
if [[ "$tracked" -eq 0 ]]; then
  echo "error: no tracked source files to scan; refusing to pass" >&2
  exit 1
fi

findings=0
while IFS= read -r -d '' path; do
  case "$path" in
    node_modules/* | .next/* | .git/* | package-lock.json) continue ;;
  esac
  if [[ ! -f "$path" ]]; then
    echo "error: scan target is missing: $path" >&2
    exit 1
  fi
  for pattern in "${patterns[@]}"; do
    set +e
    match="$(grep -n -E -I -e "$pattern" -- "$path" 2>&1)"
    status=$?
    set -e
    if [[ "$status" -eq 2 ]]; then
      echo "error: grep failed while scanning $path" >&2
      printf '%s\n' "$match" >&2
      exit 1
    fi
    if [[ "$status" -ne 0 && "$status" -ne 1 ]]; then
      echo "error: grep exited $status while scanning $path" >&2
      exit 1
    fi
    if [[ "$status" -eq 0 ]]; then
      findings=1
      while IFS= read -r line; do
        [[ -z "$line" ]] && continue
        number="${line%%:*}"
        text="${line#*:}"
        while [[ "$text" =~ $pattern ]]; do
          secret="${BASH_REMATCH[0]}"
          text="${text//"$secret"/[REDACTED]}"
        done
        printf '%s:%s:%s\n' "$path" "$number" "$text"
      done <<< "$match"
    fi
  done
done < "$list"

if [[ "$findings" -ne 0 ]]; then
  echo "error: secret scan found matches (values redacted above)" >&2
  exit 1
fi

echo "secret scan passed ($tracked tracked files, $out_count build files)"
