import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const zonesDir = path.join(__dirname, '../public/assets/zones');

const renameMap = {
  '1.png': 'zone-bretagne-cote-granit-rose.png',
  '2.png': 'zone-mediterranee-cote-azur.png',
  '3.png': 'zone-atlantique-la-rochelle-arcachon.png',
  '4.png': 'zone-manche-dunkerque-cherbourg.png',
  '5.png': 'zone-corse-bonifacio.png',
  '6.png': 'zone-dom-tom-lagons-tropicaux.png'
};

console.log('🚀 Starting zones SEO renaming...');

let renamedCount = 0;
let skippedCount = 0;

for (const [oldName, newName] of Object.entries(renameMap)) {
  const oldPath = path.join(zonesDir, oldName);
  const newPath = path.join(zonesDir, newName);
  
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

console.log(`\n📊 Zones SEO Renaming Summary:`);
console.log(`   Files renamed: ${renamedCount}`);
console.log(`   Files skipped: ${skippedCount}`);
console.log(`\n🎉 Zones SEO renaming complete!`);
