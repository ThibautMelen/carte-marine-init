import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting SEO-friendly image renaming...\n');

// Define all image renaming mappings
const imageMappings = {
  // Apps logos - already SEO friendly, just ensure consistency
  'apps': {
    'cmap-logo.jpg': 'cmap-embark-logo.jpg',
    'cmap-logo.png': 'cmap-embark-logo.png',
    'expedition-logo.png': 'expedition-marine-logo.png',
    'imray-logo.png': 'imray-charts-logo.png',
    'inavx-logo.png': 'inavx-navigation-logo.png',
    'maxsea-logo.png': 'maxsea-timezero-logo.png',
    'navicarte-logo.png': 'navicarte-french-logo.png',
    'navionics-logo.png': 'navionics-boating-logo.png',
    'navionics-plus-logo.png': 'navionics-plus-premium-logo.png',
    'opencpn-logo.png': 'opencpn-free-logo.png',
    'openseamap-logo.png': 'openseamap-community-logo.png',
    'shom-logo.png': 'shom-french-navy-logo.png',
    'timezero-logo.png': 'timezero-professional-logo.png'
  },
  
  // FAQ images - rename with SEO keywords
  'faq': {
    ' carte-nautique.png': 'carte-nautique-francaise-types.png',
    'carte-marins.png': 'carte-marine-shom-marins-professionnels.png',
    'carte-navigatio.png': 'carte-navigation-types-comparaison.png',
    'portulan.png': 'portulan-carte-marine-ancienne-medievale.png'
  },
  
  // Testimonials - already optimized, just ensure consistency
  'testimonials': {
    't1.png': 'testimonial-marc-plaisancier-bretagne.png',
    't2.png': 'testimonial-jean-pierre-instructeur-mediterranee.png',
    't3.png': 'testimonial-sophie-proprietaire-atlantique.png',
    't4.png': 'testimonial-pierre-navigateur-manche.png',
    't5.png': 'testimonial-marie-capitaine-corse.png',
    't6.png': 'testimonial-antoine-marin-dom-tom.png'
  }
};

async function renameImages() {
  let totalRenamed = 0;
  let totalSkipped = 0;
  
  for (const [category, mappings] of Object.entries(imageMappings)) {
    const categoryDir = path.join(__dirname, '../public/assets', category);
    
    if (!fs.existsSync(categoryDir)) {
      console.log(`⚠️  Skipping ${category} - directory not found`);
      continue;
    }
    
    console.log(`📁 Processing ${category} images...`);
    
    for (const [oldName, newName] of Object.entries(mappings)) {
      const oldPath = path.join(categoryDir, oldName);
      const newPath = path.join(categoryDir, newName);
      
      if (fs.existsSync(oldPath)) {
        try {
          fs.renameSync(oldPath, newPath);
          console.log(`✅ Renamed: ${oldName} → ${newName}`);
          totalRenamed++;
        } catch (error) {
          console.log(`❌ Error renaming ${oldName}:`, error.message);
        }
      } else {
        console.log(`⚠️  Skipping ${oldName} - file not found`);
        totalSkipped++;
      }
    }
  }
  
  // Check for any remaining non-SEO friendly names
  console.log('\n🔍 Checking for remaining non-SEO friendly names...');
  
  const allImagePaths = [];
  const searchDirs = ['apps', 'faq', 'testimonials', 'ugc', 'guides'];
  
  for (const dir of searchDirs) {
    const dirPath = path.join(__dirname, '../public/assets', dir);
    if (fs.existsSync(dirPath)) {
      const files = fs.readdirSync(dirPath, { recursive: true });
      allImagePaths.push(...files.filter(file => 
        /\.(jpg|jpeg|png|webp)$/i.test(file) && 
        !file.includes('optimized')
      ));
    }
  }
  
  const nonSeoFiles = allImagePaths.filter(file => 
    /^[a-z0-9-]+\.(jpg|jpeg|png|webp)$/i.test(path.basename(file)) === false ||
    file.includes(' ') ||
    file.includes('_') ||
    /^[A-Z]/.test(path.basename(file))
  );
  
  if (nonSeoFiles.length > 0) {
    console.log('\n⚠️  Found files that may need SEO renaming:');
    nonSeoFiles.forEach(file => console.log(`   ${file}`));
  } else {
    console.log('✅ All image names appear to be SEO-friendly!');
  }
  
  console.log(`\n📊 Renaming Summary:`);
  console.log(`   Files renamed: ${totalRenamed}`);
  console.log(`   Files skipped: ${totalSkipped}`);
  console.log(`   Non-SEO files found: ${nonSeoFiles.length}`);
  console.log(`\n🎉 SEO renaming complete!`);
}

renameImages().catch(console.error);
