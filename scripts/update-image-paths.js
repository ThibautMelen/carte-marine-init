import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Starting image path updates...\n');

// Define path mappings for all files
const pathMappings = {
  'src/data/apps.js': {
    '/assets/apps/navionics-logo.png': '/assets/apps/navionics-boating-logo.png',
    '/assets/apps/cmap-logo.png': '/assets/apps/cmap-embark-logo.png',
    '/assets/apps/openseamap-logo.png': '/assets/apps/openseamap-community-logo.png',
    '/assets/apps/expedition-logo.png': '/assets/apps/expedition-marine-logo.png',
    '/assets/apps/imray-logo.png': '/assets/apps/imray-charts-logo.png',
    '/assets/apps/inavx-logo.png': '/assets/apps/inavx-navigation-logo.png',
    '/assets/apps/maxsea-logo.png': '/assets/apps/maxsea-timezero-logo.png',
    '/assets/apps/navicarte-logo.png': '/assets/apps/navicarte-french-logo.png',
    '/assets/apps/navionics-plus-logo.png': '/assets/apps/navionics-plus-premium-logo.png',
    '/assets/apps/opencpn-logo.png': '/assets/apps/opencpn-free-logo.png',
    '/assets/apps/shom-logo.png': '/assets/apps/shom-french-navy-logo.png',
    '/assets/apps/timezero-logo.png': '/assets/apps/timezero-professional-logo.png'
  },
  'src/data/faq.js': {
    '/assets/faq/ carte-nautique.png': '/assets/faq/carte-nautique-francaise-types.png',
    '/assets/faq/carte-marins.png': '/assets/faq/carte-marine-shom-marins-professionnels.png',
    '/assets/faq/carte-navigatio.png': '/assets/faq/carte-navigation-types-comparaison.png',
    '/assets/faq/portulan.png': '/assets/faq/portulan-carte-marine-ancienne-medievale.png'
  }
};

async function updatePaths() {
  let totalUpdated = 0;
  let totalFiles = 0;
  
  for (const [filePath, mappings] of Object.entries(pathMappings)) {
    const fullPath = path.join(__dirname, '..', filePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️  Skipping ${filePath} - file not found`);
      continue;
    }
    
    console.log(`📁 Processing ${filePath}...`);
    totalFiles++;
    
    let content = fs.readFileSync(fullPath, 'utf8');
    let fileUpdated = false;
    
    for (const [oldPath, newPath] of Object.entries(mappings)) {
      if (content.includes(oldPath)) {
        content = content.replace(new RegExp(oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newPath);
        console.log(`✅ Updated: ${oldPath} → ${newPath}`);
        fileUpdated = true;
        totalUpdated++;
      }
    }
    
    if (fileUpdated) {
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`💾 Saved ${filePath}\n`);
    } else {
      console.log(`ℹ️  No updates needed for ${filePath}\n`);
    }
  }
  
  console.log(`📊 Path Update Summary:`);
  console.log(`   Files processed: ${totalFiles}`);
  console.log(`   Paths updated: ${totalUpdated}`);
  console.log(`\n🎉 Path updates complete!`);
}

updatePaths().catch(console.error);
