#!/bin/bash
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:$PATH"
export NODE="/opt/homebrew/bin/node"
cd "$(dirname "$0")"
exec /opt/homebrew/bin/node node_modules/next/dist/bin/next dev "$@"
