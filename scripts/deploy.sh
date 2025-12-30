#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "[deploy] Building..."
npm run build

echo "[deploy] Uploading dist/ to server..."
scp -r dist/* ubuntu@49.235.148.229:/home/site/just-like-this/

echo "[deploy] Done."
