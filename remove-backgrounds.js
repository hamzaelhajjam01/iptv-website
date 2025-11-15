const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const boxesDir = path.join(__dirname, 'public', 'images', 'boxes');

async function removeBackground(inputPath, outputPath) {
    try {
        console.log(`Processing ${path.basename(inputPath)}...`);
        
        // Load the image
        const image = sharp(inputPath);
        const metadata = await image.metadata();
        
        // Convert to PNG with transparency
        // Using threshold to remove dark backgrounds
        await image
            .flatten({ background: { r: 0, g: 0, b: 0, alpha: 0 } })
            .threshold(20, { grayscale: false })
            .negate()
            .threshold(235, { grayscale: false })
            .negate()
            .png({ quality: 100, compressionLevel: 9 })
            .toFile(outputPath);
        
        console.log(`✓ Saved ${path.basename(outputPath)}`);
    } catch (error) {
        console.error(`✗ Error processing ${path.basename(inputPath)}:`, error.message);
    }
}

async function processAllBoxes() {
    const files = fs.readdirSync(boxesDir).filter(f => f.endsWith('.jpg'));
    
    console.log(`Found ${files.length} box images to process\n`);
    
    for (const file of files) {
        const inputPath = path.join(boxesDir, file);
        const outputPath = path.join(boxesDir, file.replace('.jpg', '.png'));
        await removeBackground(inputPath, outputPath);
    }
    
    console.log('\nBackground removal complete!');
    console.log('The PNG files with transparency have been created.');
    console.log('You may want to manually refine them using a tool like remove.bg or Photoshop for better results.');
}

processAllBoxes();
