import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../public/assets/guides');
const outputDir = path.join(__dirname, '../public/assets/guides/optimized');

const guides = [
  { input: 'guide-lire-carte.png', output: 'guide-lire-carte.jpg' },
  { input: 'guide-planifier.png', output: 'guide-planifier.jpg' },
  { input: 'guide-marees.png', output: 'guide-marees.jpg' },
  { input: 'guide-nuit.png', output: 'guide-nuit.jpg' },
  { input: 'guide-meteo.png', output: 'guide-meteo.jpg' },
  { input: 'guide-symboles.png', output: 'guide-symboles.jpg' },
  { input: 'guide-equipement.png', output: 'guide-equipement.jpg' },
  { input: 'guide-mouillage.png', output: 'guide-mouillage.jpg' },
  { input: 'guide-cotiere.png', output: 'guide-cotiere.jpg' },
  { input: 'guide-gps.png', output: 'guide-gps.jpg' },
  { input: 'guide-preparation.png', output: 'guide-preparation.jpg' },
  { input: 'guide-reglementation.png', output: 'guide-reglementation.jpg' }
];

async function optimizeGuides() {
  console.log('🚀 Starting guides image optimization...');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log('📁 Created guides optimized directory');
  }

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  for (const guide of guides) {
    const inputPath = path.join(inputDir, guide.input);
    const outputPath = path.join(outputDir, guide.output);
    
    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Skipping ${guide.input} - file not found`);
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
      console.log(`✅ Optimized: ${guide.output} (${(optimizedStats.size / 1024).toFixed(1)}KB, ${savings}% savings)`);
    } catch (error) {
      console.error(`❌ Error optimizing ${guide.input}:`, error.message);
    }
  }

  const totalSavings = totalOriginalSize > 0 ? ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1) : 0;
  console.log(`\n📊 Guides Optimization Summary:`);
  console.log(`   Original size: ${(totalOriginalSize / 1024).toFixed(1)}KB`);
  console.log(`   Optimized size: ${(totalOptimizedSize / 1024).toFixed(1)}KB`);
  console.log(`   Total savings: ${totalSavings}%`);
  console.log(`\n🎉 Guides optimization complete!`);
}

optimizeGuides().catch(console.error);
