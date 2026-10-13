// Regenerates the raster assets in public/ (social preview image and PNG icons).
// Run with `npm run assets` after changing the name, role or colours below.
import sharp from 'sharp';
import { readFile } from 'node:fs/promises';

const name = 'Radu-Adrian Stavilă';
const role = 'Senior Android Engineer · Mobile Technical Lead';
const line = 'Kotlin · Jetpack Compose · Coroutines · MVI / MVVM';
const url = 'radustavila.github.io';

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.2" fill="#ffffff" fill-opacity="0.07"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="#101514"/>
  <rect width="1200" height="630" fill="url(#dots)"/>
  <rect x="80" y="84" width="64" height="64" rx="15" fill="#f3f0e8"/>
  <text x="112" y="131" text-anchor="middle" font-family="Georgia, serif" font-size="42" font-weight="700" fill="#101514">R</text>
  <circle cx="131" cy="134" r="5" fill="#1b6643"/>
  <text x="80" y="300" font-family="Georgia, 'Times New Roman', serif" font-size="88" fill="#eceee8" letter-spacing="-2">${name}</text>
  <text x="80" y="368" font-family="Helvetica, Arial, sans-serif" font-size="36" fill="#3ddc84">${role}</text>
  <rect x="80" y="430" width="1040" height="1" fill="#2b3633"/>
  <text x="80" y="486" font-family="Menlo, Courier, monospace" font-size="24" fill="#a3aea9">${line}</text>
  <text x="1120" y="126" text-anchor="end" font-family="Menlo, Courier, monospace" font-size="24" fill="#a3aea9">${url}</text>
</svg>`;

await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toFile('public/og.png');

const favicon = await readFile('public/favicon.svg');
await sharp(favicon, { density: 300 }).resize(48, 48).png().toFile('public/favicon.png');
await sharp(favicon, { density: 600 }).resize(180, 180).png().toFile('public/apple-touch-icon.png');

console.log('Generated public/og.png, public/favicon.png, public/apple-touch-icon.png');
