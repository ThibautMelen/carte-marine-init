import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../public/assets/zones');
const outputDir = path.join(__dirname, '../public/assets/zones/optimized');

const zones = [
  { input: 'zone-bretagne-cote-granit-rose.png', output: 'zone-bretagne-cote-granit-rose.jpg' },
  { input: 'zone-mediterranee-cote-azur.png', output: 'zone-mediterranee-cote-azur.jpg' },
  { input: 'zone-atlantique-la-rochelle-arcachon.png', output: 'zone-atlantique-la-rochelle-arcachon.jpg' },
  { input: 'zone-manche-dunkerque-cherbourg.png', output: 'zone-manche-dunkerque-cherbourg.jpg' },
  { input: 'zone-corse-bonifacio.png', output: 'zone-corse-bonifacio.jpg' },
  { input: 'zone-dom-tom-lagons-tropicaux.png', output: 'zone-dom-tom-lagons-tropicaux.jpg' }
];

async function optimizeZones() {
  console.log('🚀 Starting zones image optimization...');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log('📁 Created zones optimized directory');
  }

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  for (const zone of zones) {
    const inputPath = path.join(inputDir, zone.input);
    const outputPath = path.join(outputDir, zone.output);
    
    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Skipping ${zone.input} - file not found`);
      continue;
    }
    
    try {
      const originalStats = fs.statSync(inputPath);
      totalOriginalSize += originalStats.size;
      
      await sharp(inputPath)
        .resize(800, 600, { fit: 'cover' })
        .jpeg({ quality: 90 })
        .toFile(outputPath);
        
      const optimizedStats = fs.statSync(outputPath);
      totalOptimizedSize += optimizedStats.size;
      
      const savings = ((originalStats.size - optimizedStats.size) / originalStats.size * 100).toFixed(1);
      console.log(`✅ Optimized: ${zone.output} (${(optimizedStats.size / 1024).toFixed(1)}KB, ${savings}% savings)`);
    } catch (error) {
      console.error(`❌ Error optimizing ${zone.input}:`, error.message);
    }
  }

  const totalSavings = totalOriginalSize > 0 ? ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1) : 0;
  console.log(`\n📊 Zones Optimization Summary:`);
  console.log(`   Original size: ${(totalOriginalSize / 1024).toFixed(1)}KB`);
  console.log(`   Optimized size: ${(totalOptimizedSize / 1024).toFixed(1)}KB`);
  console.log(`   Total savings: ${totalSavings}%`);
  console.log(`\n🎉 Zones optimization complete!`);
}

optimizeZones().catch(console.error);