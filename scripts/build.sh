#!/bin/bash

echo "start building..."

npx webpack --config=./webpack.config.babel.js "$@"

exit 0
