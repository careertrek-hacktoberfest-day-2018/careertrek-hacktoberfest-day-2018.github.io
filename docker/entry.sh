#!/bin/sh
# inspired by https://github.com/aripalo/gatsby-docker/
export WEBAPP_DIR="/webapp"
set -e
cd /webapp
# Used for confirmation & debug
ls -al /webapp

if [ ! -f "$WEBAPP_DIR/package.json" ]
then
  echo "Cannot find definition file"
  exit
fi

if [ ! -e "$WEBAPP_DIR/node_modules/" ]
  then
    echo "Dependency directory is empty. Start installing..."
    yarn install
fi

if  [ "$1" == "develop" ]
then
  rm -rf $WEBAPP_DIR/public
  yarn develop

elif  [ "$1" == "build" ]
then
  rm -rf $WEBAPP_DIR/public
  yarn build

elif  [ "$1" == "stage" ]
then
  rm -rf $WEBAPP_DIR/public
  yarn build
  yarn serve

else
  exec $@

fi