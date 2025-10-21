import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../public/assets/faq');
const outputDir = path.join(__dirname, '../public/assets/faq/optimized');

const images = [
  { 
    input: ' carte-nautique.png', 
    output: 'carte-marine-nautique-francaise.webp',
    alt: 'Marin français utilisant une carte nautique traditionnelle sur un bateau français'
  },
  { 
    input: 'carte-navigatio.png', 
    output: 'carte-navigation-types-comparaison.webp',
    alt: 'Instructeur maritime français comparant différents types de cartes de navigation'
  },
  { 
    input: 'carte-marins.png', 
    output: 'carte-marine-shom-marins-professionnels.webp',
    alt: 'Officiers de la Marine française utilisant les cartes SHOM officielles'
  },
  { 
    input: 'portulan.png', 
    output: 'portulan-carte-marine-ancienne-medievale.webp',
    alt: 'Historien français étudiant une carte portulan médiévale dans un musée maritime'
  }
];

async function optimizeFAQImages() {
  console.log('🚀 Starting FAQ images optimization...');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log('📁 Created FAQ optimized directory');
  }

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  const imageMetadata = [];

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
      
      // Get original image dimensions
      const originalImage = sharp(inputPath);
      const { width: originalWidth, height: originalHeight } = await originalImage.metadata();
      
      // Calculate 16:9 dimensions
      const targetWidth = 1920;
      const targetHeight = 1080;
      
      await sharp(inputPath)
        .resize(targetWidth, targetHeight, { 
          fit: 'cover',
          position: 'center'
        })
        .webp({ 
          quality: 85,
          effort: 6
        })
        .toFile(outputPath);
        
      const optimizedStats = fs.statSync(outputPath);
      totalOptimizedSize += optimizedStats.size;
      
      const savings = ((originalStats.size - optimizedStats.size) / originalStats.size * 100).toFixed(1);
      console.log(`✅ Optimized: ${img.output} (${(optimizedStats.size / 1024).toFixed(1)}KB, ${savings}% savings)`);
      
      // Store metadata for SEO
      imageMetadata.push({
        filename: img.output,
        alt: img.alt,
        width: targetWidth,
        height: targetHeight,
        size: optimizedStats.size
      });
      
    } catch (error) {
      console.error(`❌ Error optimizing ${img.input}:`, error.message);
    }
  }

  const totalSavings = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1);
  console.log(`\n📊 FAQ Images Optimization Summary:`);
  console.log(`   Original size: ${(totalOriginalSize / 1024).toFixed(1)}KB`);
  console.log(`   Optimized size: ${(totalOptimizedSize / 1024).toFixed(1)}KB`);
  console.log(`   Total savings: ${totalSavings}%`);
  console.log(`\n🎉 FAQ images optimization complete!`);
  
  // Save metadata for SEO integration
  const metadataPath = path.join(__dirname, '../public/assets/faq/optimized/metadata.json');
  fs.writeFileSync(metadataPath, JSON.stringify(imageMetadata, null, 2));
  console.log(`📄 Metadata saved to: ${metadataPath}`);
}

optimizeFAQImages().catch(console.error);
