#!/usr/bin/env sh
#
# Copy the HTML, JS and PNG files to the build directory, then zip it.
#

# Abort on error
set -e

rm -rf build build.zip
mkdir build

cp ./*.html ./*.js ./*.png build
zip -r build.zip build
