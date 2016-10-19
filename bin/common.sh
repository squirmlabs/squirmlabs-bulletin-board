#!/usr/bin/env bash

export SCRIPT_DIR=$( cd $( dirname $0 ) && pwd)
export PROJECT_DIR=$( cd $( dirname $SCRIPT_DIR ) && pwd)
export TEST_DIR=$PROJECT_DIR/test
export UNIT_DIR=$TEST_DIR/unit
export NODE_MODULES=$PROJECT_DIR/node_modules
export NODE_BIN=$NODE_MODULES/.bin

export WEBPACK_CONFIG=$PROJECT_DIR/lib/config/webpack.config.js

function handle_sigint () {
    for proc in `jobs -p`
    do
        echo "Killing: $proc"
        kill $proc
    done
}

# trap handle_sigint SIGINT
