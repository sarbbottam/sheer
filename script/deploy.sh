#!/bin/sh

rm -rf out || exit 0;
mkdir out;
( cd out
 git init
 git config user.name "sarbbottam"
 git config user.email "sarbbottam@gmail.com"
 cp ../index.html ./index.html
 cp -r ../dist ./dist
 cp -r ../src ./src
 rm -rf ./src/css
 git add .
 git commit -m "initial commit"
 git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
)
