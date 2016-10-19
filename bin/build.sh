#!/usr/bin/env bash

source $( dirname $0 )/common.sh

$NODE_BIN/webpack --config $WEBPACK_CONFIG
