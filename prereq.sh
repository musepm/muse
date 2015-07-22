#!/bin/bash
phantom=$(which phantomjs)
casper=$(which casperjs)
if [ ${#phantom} == 0 ]; then
  echo Trying to install phantomjs globally.
  npm i -g phantomjs
fi

if [ ${#casper} == 0 ]; then
  echo Trying to install casperjs.
  npm i -g casperjs@1.1.0-beta3
fi
