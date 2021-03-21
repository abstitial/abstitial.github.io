#!/bin/bash

sizes='16 24 32 48 64'

for size in $sizes
do
  echo making favicon-$size.png
  command convert favicon.png -resize "$size"x$size favicon-$size.png
done

echo making favicon.ico
command convert favicon-16.png favicon-24.png favicon-32.png favicon-48.png favicon-64.png ../img/favicon.ico

echo cleaning up
command rm favicon-*.png

echo All done