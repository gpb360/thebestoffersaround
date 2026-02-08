#!/bin/bash

# Create placeholder images for all products
# This is a temporary fix - replace with real product images later

cd /home/garyp/.openclaw/workspace/thebestoffersaround/public/images/products/

# 50% Commission Products
for product in testosil vigrx-plus erectin dim3x testodren calmlean cortisync testrx primegenix; do
  convert -size 400x400 xc:#333 -gravity center -fill "#d4af37" -pointsize 24 -annotate +0+0 "${product^}" "${product}.jpg" 2>/dev/null || \
  echo "${product} (placeholder)" > "${product}.txt"
done

# 40% Commission Products
for product in genf20-muscle semenax erectin-gummies proextender hypergh-14x prosolution-plus erectin-gel genf20 volume-pills extenze prosolution-pills vigrx-oil vigrx-delay-spray prosolution-gel genfx nexus-pheromones provacyl brainpill vigrx-nitric-oxide vigrx-incontinix vigrx-max-volume magnarx vigrx-delay-wipes semenhance fertility-factor-5; do
  convert -size 400x400 xc:#333 -gravity center -fill "#d4af37" -pointsize 24 -annotate +0+0 "${product^}" "${product}.jpg" 2>/dev/null || \
  echo "${product} (placeholder)" > "${product}.txt"
done

# 30% Commission Products
for product in primegenix-bone-complex primegenix-prostate-support; do
  convert -size 400x400 xc:#333 -gravity center -fill "#d4af37" -pointsize 24 -annotate +0+0 "${product^}" "${product}.jpg" 2>/dev/null || \
  echo "${product} (placeholder)" > "${product}.txt"
done

echo "Placeholder images created"
