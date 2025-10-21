import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../public/assets/testimonials');
const outputDir = path.join(__dirname, '../public/assets/testimonials/optimized');

const avatars = [
  { input: 't1.png', output: 'testimonial-1.jpg' },
  { input: 't2.png', output: 'testimonial-2.jpg' },
  { input: 't3.png', output: 'testimonial-3.jpg' },
  { input: 't4.png', output: 'testimonial-4.jpg' },
  { input: 't5.png', output: 'testimonial-5.jpg' },
  { input: 't6.png', output: 'testimonial-6.jpg' }
];

async function optimizeAvatars() {
  console.log('🚀 Starting avatar optimization...');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log('📁 Created testimonials directory');
  }

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  for (const avatar of avatars) {
    const inputPath = path.join(inputDir, avatar.input);
    const outputPath = path.join(outputDir, avatar.output);
    
    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Skipping ${avatar.input} - file not found`);
      continue;
    }
    
    try {
      const originalStats = fs.statSync(inputPath);
      totalOriginalSize += originalStats.size;
      
      await sharp(inputPath)
        .resize(400, 400, { fit: 'cover' })
        .jpeg({ quality: 90 })
        .toFile(outputPath);
        
      const optimizedStats = fs.statSync(outputPath);
      totalOptimizedSize += optimizedStats.size;
      
      const savings = ((originalStats.size - optimizedStats.size) / originalStats.size * 100).toFixed(1);
      console.log(`✅ Optimized: ${avatar.output} (${(optimizedStats.size / 1024).toFixed(1)}KB, ${savings}% savings)`);
    } catch (error) {
      console.error(`❌ Error optimizing ${avatar.input}:`, error.message);
    }
  }

  const totalSavings = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1);
  console.log(`\n📊 Avatar Optimization Summary:`);
  console.log(`   Original size: ${(totalOriginalSize / 1024).toFixed(1)}KB`);
  console.log(`   Optimized size: ${(totalOptimizedSize / 1024).toFixed(1)}KB`);
  console.log(`   Total savings: ${totalSavings}%`);
  console.log(`\n🎉 Avatar optimization complete!`);
}

optimizeAvatars().catch(console.error);
