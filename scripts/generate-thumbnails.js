const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const fullDir = path.join(__dirname, '../public/images/full');
const thumbnailDir = path.join(__dirname, '../public/images/thumbnail');

// 确保缩略图目录存在
if (!fs.existsSync(thumbnailDir)) {
    fs.mkdirSync(thumbnailDir, { recursive: true });
}

// 读取full目录中的所有jpg文件
fs.readdirSync(fullDir)
    .filter(file => file.endsWith('.jpg'))
    .forEach(async (file) => {
        const inputPath = path.join(fullDir, file);
        const outputPath = path.join(thumbnailDir, file);

        try {
            // 生成缩略图
            await sharp(inputPath)
                .resize(400, 400, { // 设置缩略图尺寸
                    fit: 'inside',   // 保持宽高比
                    withoutEnlargement: true // 如果原图更小，不放大
                })
                .jpeg({ quality: 80 }) // 设置JPEG质量
                .toFile(outputPath);

            console.log(`Created thumbnail for ${file}`);
        } catch (error) {
            console.error(`Error processing ${file}:`, error);
        }
    }); 