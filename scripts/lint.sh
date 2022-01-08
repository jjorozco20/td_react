#!/bin/zsh

echo "start linting..."

directory_source="$(cd "$(dirname "$1")"; pwd -P)/$(basename "$1")src"

npx eslint $directory_source
npx stylelint $directory_source
npx htmlhint $directory_source
npx markdownlint .

exit 0
