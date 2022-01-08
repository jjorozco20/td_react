#!/bin/zsh

echo "start formating..."

npx eslint --fix ./src
npx stylelint --fix ./src

exit 0
