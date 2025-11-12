const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ROOT_DIR = __dirname;
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');

// Marker file to track optimized images
const OPTIMIZATION_LOG = path.join(ROOT_DIR, '.image-optimization-log.json');

// Load optimization log
function loadOptimizationLog() {
  if (fs.existsSync(OPTIMIZATION_LOG)) {
    try {
      return JSON.parse(fs.readFileSync(OPTIMIZATION_LOG, 'utf8'));
    } catch (e) {
      return {};
    }
  }
  return {};
}

// Save optimization log
function saveOptimizationLog(log) {
  fs.writeFileSync(OPTIMIZATION_LOG, JSON.stringify(log, null, 2));
}

// Get all image files recursively
function getAllImages(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllImages(filePath, fileList);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      // Skip already optimized responsive versions and OG images
      if (!file.match(/-(400|800|1200|1600|og)\.(jpg|webp|png)$/i)) {
        fileList.push(filePath);
      }
    }
  });
  
  return fileList;
}

// Check if image needs optimization
function needsOptimization(filePath, log) {
  const stats = fs.statSync(filePath);
  const lastModified = stats.mtimeMs;
  const fileSize = stats.size;
  
  // If file was optimized before and hasn't been modified, skip
  if (log[filePath] && log[filePath].lastModified === lastModified) {
    return false;
  }
  
  // If file is already small (< 150KB), skip
  if (fileSize < 150 * 1024) {
    return false;
  }
  
  return true;
}

// Optimize a single image
async function optimizeImage(imagePath, log) {
  const originalStats = fs.statSync(imagePath);
  const originalSizeKB = (originalStats.size / 1024).toFixed(2);
  const ext = path.extname(imagePath).toLowerCase();
  
  // Create backup
  const backupPath = imagePath + '.backup';
  fs.copyFileSync(imagePath, backupPath);
  
  try {
    let pipeline = sharp(imagePath);
    
    // Get image metadata to determine max width
    const metadata = await sharp(imagePath).metadata();
    const maxWidth = Math.min(metadata.width || 1200, 1200);
    
    // Resize if needed
    if (metadata.width > maxWidth) {
      pipeline = pipeline.resize(maxWidth, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }
    
    // Apply format-specific optimization
    if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({
        quality: 85,
        progressive: true,
        mozjpeg: true
      });
    } else if (ext === '.png') {
      pipeline = pipeline.png({
        quality: 85,
        progressive: true,
        compressionLevel: 9
      });
    }
    
    // Save optimized version
    await pipeline.toFile(imagePath + '.optimized');
    
    // Replace original with optimized
    fs.unlinkSync(imagePath);
    fs.renameSync(imagePath + '.optimized', imagePath);
    
    const newStats = fs.statSync(imagePath);
    const newSizeKB = (newStats.size / 1024).toFixed(2);
    const savedKB = (originalSizeKB - newSizeKB).toFixed(2);
    const savedPercent = ((savedKB / originalSizeKB) * 100).toFixed(1);
    
    // Update log
    log[imagePath] = {
      lastModified: newStats.mtimeMs,
      originalSize: parseFloat(originalSizeKB),
      optimizedSize: parseFloat(newSizeKB),
      saved: parseFloat(savedKB),
      date: new Date().toISOString()
    };
    
    // Remove backup if successful
    fs.unlinkSync(backupPath);
    
    console.log(`✅ ${path.relative(PUBLIC_DIR, imagePath)}`);
    console.log(`   ${originalSizeKB} KB → ${newSizeKB} KB (saved ${savedKB} KB / ${savedPercent}%)\n`);
    
    return {
      success: true,
      saved: parseFloat(savedKB)
    };
    
  } catch (error) {
    console.error(`❌ Error optimizing ${path.relative(PUBLIC_DIR, imagePath)}:`, error.message);
    
    // Restore from backup if error
    if (fs.existsSync(backupPath)) {
      fs.copyFileSync(backupPath, imagePath);
      fs.unlinkSync(backupPath);
    }
    
    return {
      success: false,
      saved: 0
    };
  }
}

// Main optimization function
async function optimizeAllImages() {
  console.log('🔍 Scanning for images to optimize...\n');
  
  const log = loadOptimizationLog();
  const allImages = getAllImages(PUBLIC_DIR);
  
  console.log(`Found ${allImages.length} total images in public folder\n`);
  
  const imagesToOptimize = allImages.filter(img => needsOptimization(img, log));
  
  if (imagesToOptimize.length === 0) {
    console.log('✨ All images are already optimized!\n');
    return;
  }
  
  console.log(`📦 ${imagesToOptimize.length} images need optimization\n`);
  console.log('Starting optimization...\n');
  
  let totalSaved = 0;
  let successCount = 0;
  let skipCount = 0;
  
  for (const imagePath of imagesToOptimize) {
    const result = await optimizeImage(imagePath, log);
    
    if (result.success) {
      totalSaved += result.saved;
      successCount++;
    } else {
      skipCount++;
    }
  }
  
  // Save the updated log
  saveOptimizationLog(log);
  
  console.log('\n' + '='.repeat(60));
  console.log('✨ Optimization Complete!');
  console.log('='.repeat(60));
  console.log(`✅ Successfully optimized: ${successCount} images`);
  console.log(`⏭️  Skipped (errors): ${skipCount} images`);
  console.log(`💾 Total space saved: ${totalSaved.toFixed(2)} KB (${(totalSaved / 1024).toFixed(2)} MB)`);
  console.log('='.repeat(60) + '\n');
}

// Run the optimization
optimizeAllImages().catch(console.error);
