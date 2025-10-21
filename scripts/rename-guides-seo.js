import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const guidesDir = path.join(__dirname, '../public/assets/guides');

const renameMap = {
  '1.png': 'guide-lire-carte.png',
  '2.png': 'guide-planifier.png',
  '3.png': 'guide-marees.png',
  '4.png': 'guide-nuit.png',
  '5.png': 'guide-meteo.png',
  '6.png': 'guide-symboles.png',
  '7.png': 'guide-equipement.png',
  '8.png': 'guide-mouillage.png',
  '9.png': 'guide-cotiere.png',
  '10.png': 'guide-gps.png',
  '11.png': 'guide-preparation.png',
  '12.png': 'guide-reglementation.png'
};

console.log('🚀 Starting guide images SEO renaming...');

let renamedCount = 0;
let skippedCount = 0;

for (const [oldName, newName] of Object.entries(renameMap)) {
  const oldPath = path.join(guidesDir, oldName);
  const newPath = path.join(guidesDir, newName);
  
  if (fs.existsSync(oldPath)) {
    try {
      fs.renameSync(oldPath, newPath);
      console.log(`✅ Renamed: ${oldName} → ${newName}`);
      renamedCount++;
    } catch (error) {
      console.error(`❌ Error renaming ${oldName}:`, error.message);
    }
  } else {
    console.warn(`⚠️  Skipping ${oldName} - file not found`);
    skippedCount++;
  }
}

console.log(`\n📊 Renaming Summary:`);
console.log(`   Files renamed: ${renamedCount}`);
console.log(`   Files skipped: ${skippedCount}`);
console.log(`\n🎉 Guide images SEO renaming complete!`);
