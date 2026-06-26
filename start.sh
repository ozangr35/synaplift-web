#!/usr/bin/env bash
# Run the SynapLift marketing site locally (no database, no backend).
set -euo pipefail
cd "$(dirname "$0")"

PORT="${PORT:-3000}"

if [[ ! -d node_modules ]]; then
  echo "→ First run: installing dependencies…"
  npm install --cache ./.npm-cache 2>/dev/null || npm install
fi

missing=0
for img in hero-home.png feature-coach.png feature-scan.png feature-progress.png flow-workout.png flow-calendar.png; do
  if [[ ! -f "public/screenshots/${img}" ]]; then
    echo "⚠ Missing public/screenshots/${img}"
    missing=1
  fi
done
if [[ "$missing" -eq 1 ]]; then
  echo "→ Add screenshots under public/screenshots/ (473×948 PNG)."
fi

if [[ -d .next ]]; then
  echo "→ Clearing .next cache…"
  rm -rf .next
fi

if command -v lsof >/dev/null 2>&1; then
  stale_pids="$(lsof -ti tcp:"$PORT" -sTCP:LISTEN 2>/dev/null || true)"
  if [[ -n "${stale_pids}" ]]; then
    echo "→ Port $PORT in use — stopping stale dev server…"
    # shellcheck disable=SC2086
    kill ${stale_pids} 2>/dev/null || true
    sleep 1
  fi
fi

echo "→ Starting site at http://localhost:${PORT}"
exec npm run dev
