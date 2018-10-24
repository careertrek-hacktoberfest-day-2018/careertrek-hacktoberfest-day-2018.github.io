#!/bin/sh
# https://jtway.co/deploying-jekyll-to-github-pages-with-circleci-2-0-3eb69324bc6e
echo -e "Host github.com\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config

git config user.name "$GH_NAME"
git config user.email "$GH_EMAIL"

git checkout master
echo "pulling master branch"
git pull origin master

echo "reorder files"
find . -maxdepth 1 ! -name 'public' ! -name '.git' ! -name '.gitignore' -exec rm -rf {} \;
mv public/* .
rm -R public/

echo "push files to master branch"
git add -fA
git commit --allow-empty -m "auto deploy [ci skip]"
git push -f origin master

echo "deployed successfully"