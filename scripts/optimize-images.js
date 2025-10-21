import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../dist/assets/ugc');
const outputDir = path.join(__dirname, '../public/assets/ugc/optimized');

const images = [
  { input: 'ugc-1.png', output: 'mouillage-bretagne-cote-granit-rose.webp' },
  { input: 'ugc-2.png', output: 'coucher-soleil-mediterranee-french-riviera.webp' },
  { input: 'ugc-3.png', output: 'calanques-bonifacio-corse-falaises.webp' },
  { input: 'ugc-4.png', output: 'port-la-rochelle-tours-medievales-matin.webp' },
  { input: 'ugc-5.png', output: 'traversee-manche-tempete-atlantique.webp' },
  { input: 'ugc-6.png', output: 'lagon-polynesie-turquoise-paradis.webp' },
  { input: 'ugc-7.png', output: 'phare-ouessant-bretagne-granite.webp' },
  { input: 'ugc-8.png', output: 'mouillage-sauvage-corse-crique.webp' }
];

async function optimizeImages() {
  console.log('🚀 Starting image optimization...');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log('📁 Created optimized directory');
  }

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  for (const img of images) {
    const inputPath = path.join(inputDir, img.input);
    const outputPath = path.join(outputDir, img.output);
    
    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Skipping ${img.input} - file not found`);
      continue;
    }
    
    try {
      const originalStats = fs.statSync(inputPath);
      totalOriginalSize += originalStats.size;
      
      await sharp(inputPath)
        .resize(800, 600, { fit: 'cover' })
        .webp({ quality: 85 })
        .toFile(outputPath);
        
      const optimizedStats = fs.statSync(outputPath);
      totalOptimizedSize += optimizedStats.size;
      
      const savings = ((originalStats.size - optimizedStats.size) / originalStats.size * 100).toFixed(1);
      console.log(`✅ Optimized: ${img.output} (${(optimizedStats.size / 1024).toFixed(1)}KB, ${savings}% savings)`);
    } catch (error) {
      console.error(`❌ Error optimizing ${img.input}:`, error.message);
    }
  }

  const totalSavings = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1);
  console.log(`\n📊 Optimization Summary:`);
  console.log(`   Original size: ${(totalOriginalSize / 1024).toFixed(1)}KB`);
  console.log(`   Optimized size: ${(totalOptimizedSize / 1024).toFixed(1)}KB`);
  console.log(`   Total savings: ${totalSavings}%`);
  console.log(`\n🎉 Image optimization complete!`);
}

optimizeImages().catch(console.error);
