const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// 配置
const IMAGES_DIR = path.join(__dirname, '../public/images/full');
const ARTWORKS_FILE = path.join(__dirname, '../src/data/artworks.js');

async function processImages() {
    try {
        // 读取artworks.js文件
        const artworksContent = fs.readFileSync(ARTWORKS_FILE, 'utf8');
        
        // 提取artworks数组
        const artworksMatch = artworksContent.match(/export const artworks = (\[[\s\S]*?\]);/);
        if (!artworksMatch) {
            throw new Error('Could not find artworks array in the file');
        }

        // 将artworks数组字符串转换为JavaScript对象
        const artworksStr = artworksMatch[1];
        const artworks = eval(artworksStr);
        const existingIds = new Set(artworks.map(art => art.id));
        
        // 读取图片目录
        const files = fs.readdirSync(IMAGES_DIR);
        const imageFiles = files.filter(file => 
            /\.(jpg|jpeg|png|gif)$/i.test(file)
        );

        // 处理每个图片
        for (const file of imageFiles) {
            const filePath = path.join(IMAGES_DIR, file);
            const fileName = path.parse(file).name;
            
            // 获取图片信息
            const metadata = await sharp(filePath).metadata();
            
            // 生成新的ID
            let newId = 1;
            while (existingIds.has(newId)) {
                newId++;
            }
            existingIds.add(newId);

            // 创建新的artwork对象，image_thumb 也指向原图
            const newArtwork = {
                id: newId,
                title: `作品 ${newId}`,
                artist: "墨韵雅集",
                creation_year: new Date().getFullYear().toString(),
                dimensions: `${metadata.width}px x ${metadata.height}px`,
                material: "宣纸，墨",
                description: "这是一幅书法作品。",
                image_thumb: `/images/full/${file}`,
                image_full: `/images/full/${file}`,
                interpretation: ""
            };

            artworks.push(newArtwork);
        }

        // 更新artworks.js文件
        const newContent = `export const artworks = ${JSON.stringify(artworks, null, 4)};`;
        fs.writeFileSync(ARTWORKS_FILE, newContent);

        console.log('Successfully processed images and updated artworks.js');
    } catch (error) {
        console.error('Error processing images:', error);
    }
}

processImages(); 