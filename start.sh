#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

if [[ ! -d node_modules ]]; then
  echo "→ First run: installing dependencies…"
  npm install --cache ./.npm-cache 2>/dev/null || npm install
fi

echo "→ Starting site at http://localhost:3000"
exec npm run dev
