const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Images to process (relative to project root)
const images = [
  'ewa-oloyin.jpeg', 'yam-flour.jpeg', 'palm-oil.jpeg', 'pepper-soup.jpeg',
  'rice-poundo.jpeg', 'garri-ijebu.jpeg', 'plantain-flour.jpeg', 'ogbono.jpeg',
  'locust-beans.jpeg', 'suya-spice.jpeg', 'cray-fish.jpeg', 'ofada-rice.jpeg', 'wheat-flour.jpeg'
];

const sizes = [480, 800, 1200];
const outDir = path.join(__dirname, '..', 'img');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function processImage(file) {
  const input = path.join(__dirname, '..', file);
  if (!fs.existsSync(input)) return console.warn('Missing:', file);

  const ext = path.extname(file).toLowerCase();
  const base = path.basename(file, ext);

  for (const w of sizes) {
    const outWebp = path.join(outDir, `${base}-${w}.webp`);
    const outJpeg = path.join(outDir, `${base}-${w}.jpeg`);
    try {
      await sharp(input).resize({ width: w }).webp({ quality: 80 }).toFile(outWebp);
      await sharp(input).resize({ width: w }).jpeg({ quality: 80 }).toFile(outJpeg);
      console.log('Written', outWebp, outJpeg);
    } catch (err) {
      console.error('Error processing', file, err);
    }
  }
}

async function run() {
  for (const img of images) await processImage(img);
  console.log('Done. Optimized images are in ./img');
}

run();
