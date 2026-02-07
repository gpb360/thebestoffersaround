#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const productsPath = join(__dirname, '..', 'src', 'data', 'products.ts');
const productsContent = readFileSync(productsPath, 'utf-8');

const productsMatch = productsContent.match(/export const products.*?=\s*(\[[\s\S]*?\]);/);

if (!productsMatch) {
  console.error('Could not extract products from products.ts');
  process.exit(1);
}

const productsStr = productsMatch[1];
const products = new Function('return ' + productsStr)();

// Convert array to object for easier access by slug
const productsData = {};
products.forEach(product => {
  productsData[product.slug] = product;
});

const outputPath = join(__dirname, '..', 'src', 'data', 'products-data.json');
writeFileSync(outputPath, JSON.stringify(productsData, null, 2));

console.log(`✅ Exported ${products.length} products to ${outputPath}`);
