#!/bin/bash

echo "Tester script"

SOURCE_REP=$1
TESTS_REP=$2

echo "Source repository"
echo $SOURCE_REP
echo "Tests repository"
echo $TESTS_REP

mkdir tmp
cd tmp
git clone $SOURCE_REP
cd $(ls -d */|head -n 1)
cd ..
rm -rf tmp