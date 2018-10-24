#!/bin/sh
# https://jtway.co/deploying-jekyll-to-github-pages-with-circleci-2-0-3eb69324bc6e

git config user.name "$GH_NAME"
git config user.email "$GH_EMAIL"

git checkout master
git pull origin master

find . -maxdepth 1 ! -name 'public' ! -name '.git' ! -name '.gitignore' -exec rm -rf {} \;
mv public/* .
rm -R public/

git add -fA
git commit --allow-empty -m "auto deploy [ci skip]"
git push -f origin master

echo "deployed successfully"