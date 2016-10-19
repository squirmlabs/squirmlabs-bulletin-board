#!/usr/bin/env bash

source $( dirname $0 )/common.sh

node $PROJECT_DIR/lib/server/index.js &

$NODE_BIN/webpack-dev-server \
    --config $WEBPACK_CONFIG \
    --progress \
    --history-api-fallback
