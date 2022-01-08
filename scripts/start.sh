#!/bin/bash

echo "starting..."

npx webpack serve --config=webpack.config.babel.js --env=development "$@"
    