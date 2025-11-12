const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesToOptimize = [
  'best-iptv-services-2025-a-complete-review.jpg',
  'iptv-vs-fubotv-which-is-better-for-sports.jpg',
  'iptv-vs-hulu-live-tv-a-cost-and-channel-comparison.jpg',
  'what-to-look-for-in-an-iptv-provider-5-red-flags-to-avoid.jpg',
  'free-iptv-vs-paid-iptv-is-it-worth-the-risk.jpg'
];

const blogDir = path.join(__dirname, 'public', 'images', 'blog');

async function optimizeImages() {
  console.log('Starting image optimization...\n');

  for (const imageName of imagesToOptimize) {
    const imagePath = path.join(blogDir, imageName);
    
    if (!fs.existsSync(imagePath)) {
      console.log(`❌ ${imageName} not found, skipping...`);
      continue;
    }

    const originalStats = fs.statSync(imagePath);
    const originalSizeKB = (originalStats.size / 1024).toFixed(2);
    
    // Create backup
    const backupPath = imagePath + '.backup';
    fs.copyFileSync(imagePath, backupPath);

    try {
      // Optimize image: resize to max 1200px width, quality 85, progressive
      await sharp(imagePath)
        .resize(1200, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .jpeg({ 
          quality: 85, 
          progressive: true,
          mozjpeg: true
        })
        .toFile(imagePath + '.optimized');

      // Replace original with optimized
      fs.unlinkSync(imagePath);
      fs.renameSync(imagePath + '.optimized', imagePath);

      const newStats = fs.statSync(imagePath);
      const newSizeKB = (newStats.size / 1024).toFixed(2);
      const savedKB = (originalSizeKB - newSizeKB).toFixed(2);
      const savedPercent = ((savedKB / originalSizeKB) * 100).toFixed(1);

      console.log(`✅ ${imageName}`);
      console.log(`   Original: ${originalSizeKB} KB`);
      console.log(`   Optimized: ${newSizeKB} KB`);
      console.log(`   Saved: ${savedKB} KB (${savedPercent}%)\n`);

      // Remove backup if successful
      fs.unlinkSync(backupPath);

    } catch (error) {
      console.error(`❌ Error optimizing ${imageName}:`, error.message);
      // Restore from backup if error
      if (fs.existsSync(backupPath)) {
        fs.copyFileSync(backupPath, imagePath);
        fs.unlinkSync(backupPath);
      }
    }
  }

  console.log('✨ Image optimization complete!');
}

optimizeImages().catch(console.error);
