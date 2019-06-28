#!/bin/bash

SOURCE_REP=$1
TESTS_REP=$2

mkdir tmp
cd tmp
git clone $SOURCE_REP origin
git clone $TESTS_REP tests
cp -r ./tests/src/__tests__ ./origin/src/
cd origin
npm install
npm install --save-dev react-testing-library
CI=true node ./node_modules/react-scripts/bin/react-scripts test --env=jsdom --json > ../../test.log
cd ../..
rm -rf ./tmp

echo "All done"
