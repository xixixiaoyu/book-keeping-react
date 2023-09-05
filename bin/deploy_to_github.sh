#!/usr/bin/env bash
rm -rf dist
npm run build
cd dist
git init
git add .
git commit -m deploy
git remote add origin https://github.com/xixixiaoyu/book-keeping-react
git push -f origin master:master
cd -