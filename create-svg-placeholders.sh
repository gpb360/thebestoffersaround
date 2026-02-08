#!/bin/bash

# Create SVG placeholder images for all products
# Simple approach that doesn't require ImageMagick

cd /home/garyp/.openclaw/workspace/thebestoffersaround/public/images/products/

# Function to create SVG placeholder
create_placeholder() {
  local name=$1
  cat > "${name}.svg" << EOF
<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="400" fill="#1a1a1a"/>
  <rect x="10" y="10" width="380" height="380" fill="none" stroke="#d4af37" stroke-width="2"/>
  <text x="200" y="190" font-family="Arial" font-size="24" fill="#d4af37" text-anchor="middle">${name}</text>
  <text x="200" y="220" font-family="Arial" font-size="16" fill="#888" text-anchor="middle">Product Image Coming Soon</text>
</svg>
EOF
  echo "Created ${name}.svg"
}

# 50% Commission Products
for product in testosil vigrx-plus erectin dim3x testodren calmlean cortisync testrx primegenix; do
  create_placeholder "$product"
done

# 40% Commission Products
for product in genf20-muscle semenax erectin-gummies proextender hypergh-14x prosolution-plus erectin-gel genf20 volume-pills extenze prosolution-pills vigrx-oil vigrx-delay-spray prosolution-gel genfx nexus-pheromones provacyl brainpill vigrx-nitric-oxide vigrx-incontinix vigrx-max-volume magnarx vigrx-delay-wipes semenhance fertility-factor-5; do
  create_placeholder "$product"
done

# 30% Commission Products
for product in primegenix-bone-complex primegenix-prostate-support; do
  create_placeholder "$product"
done

echo "✅ All 32 product placeholder images created as SVG files"
