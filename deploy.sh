#!/usr/bin/env sh

# abort on errors
set -e

yarn build

cd .vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:enrian/vue-pikaday.git master:gh-pages
