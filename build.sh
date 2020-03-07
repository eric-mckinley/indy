#!/bin/bash
mkdir -p dist
cd ext;
zip -v -j -D -r ../dist/indy.zip *
