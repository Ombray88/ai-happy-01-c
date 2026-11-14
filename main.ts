// This script copies the entry.png image sitting beside the program
// to the output directory specified by MAKEFUN_OUTPUT_DIR or /output.
// We copy the pre-rendered image asset directly to avoid complex runtime generation code and guarantee high visual fidelity.

import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function main() {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
  const sourcePath = path.join(__dirname, 'entry.png');
  const destPath = path.join(outputDir, 'entry.png');

  fs.mkdirSync(outputDir, { recursive: true });
  fs.copyFileSync(sourcePath, destPath);
  console.log(`Successfully copied ${sourcePath} to ${destPath}`);
}

main();
