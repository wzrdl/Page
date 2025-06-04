<template>
    <div class="styles">
      <div class="container">
        <h1 class="title">风格系列</h1>
        <div class="style-categories">
          <div class="category">
            <h2 @click="toggleCategory('kaishu')" class="clickable-title">楷书</h2>
          </div>
          <div class="category">
            <h2 @click="toggleCategory('xingshu')" class="clickable-title">行书</h2>
          </div>
          <div class="category">
            <h2 @click="toggleCategory('caoshu')" class="clickable-title">草书</h2>
          </div>
          <div class="category">
            <h2 @click="toggleCategory('lishu')" class="clickable-title">隶书</h2>
          </div>
          <div class="category">
            <h2 @click="toggleCategory('zhuanshu')" class="clickable-title">篆书</h2>
          </div>
        </div>

        <!-- 弹窗展示区 -->
        <div class="modal" v-if="activeCategory" @click="closeModal">
          <div class="modal-content" @click.stop>
            <div class="modal-header">
              <h2>{{ getCategoryName(activeCategory) }}</h2>
              <button class="close-btn" @click="closeModal">&times;</button>
            </div>
            <div class="works-grid">
              <div class="work-item" v-for="(img, index) in getCategoryImages(activeCategory)" :key="index">
                <img :src="img.src" :alt="img.alt" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        activeCategory: null,
        categoryImages: {
          kaishu: [
            { src: '/images/full/微信图片_20250603184853.jpg', alt: '楷书作品1' },
            { src: '/images/full/微信图片_20250603184849.jpg', alt: '楷书作品2' }
          ],
          xingshu: [
            { src: '/images/full/微信图片_20250603184846.jpg', alt: '行书作品1' },
            { src: '/images/full/微信图片_20250603184843.jpg', alt: '行书作品2' }
          ],
          caoshu: [
            { src: '/images/full/微信图片_20250603184839.jpg', alt: '草书作品1' }
          ],
          lishu: [
            { src: '/images/full/微信图片_20250603184835.jpg', alt: '隶书作品1' },
            { src: '/images/full/微信图片_20250603184832.jpg', alt: '隶书作品2' }
          ],
          zhuanshu: [
            { src: '/images/full/微信图片_20250603184827.jpg', alt: '篆书作品1' }
          ]
        }
      }
    },
    methods: {
      toggleCategory(category) {
        this.activeCategory = category;
      },
      closeModal() {
        this.activeCategory = null;
      },
      getCategoryName(category) {
        const names = {
          kaishu: '楷书',
          xingshu: '行书',
          caoshu: '草书',
          lishu: '隶书',
          zhuanshu: '篆书'
        };
        return names[category];
      },
      getCategoryImages(category) {
        return this.categoryImages[category] || [];
      }
    }
  }
  </script>
  
  <style scoped>
  .styles {
    min-height: 100vh;
    padding: 40px 20px;
    background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%);
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .title {
    font-family: 'Noto Serif SC', serif;
    font-size: 2.5em;
    color: var(--text-dark);
    text-align: center;
    margin-bottom: 40px;
  }
  
  .style-categories {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 40px;
  }
  
  .category {
    flex: 1;
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
  }
  
  .clickable-title {
    cursor: pointer;
    transition: color 0.3s ease;
    text-align: center;
    font-family: 'Noto Serif SC', serif;
    font-size: 1.8em;
    color: var(--text-dark);
    margin: 0;
  }
  
  .clickable-title:hover {
    color: #666;
  }

  /* 弹窗样式 */
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    animation: fadeIn 0.3s ease;
  }

  .modal-content {
    background: white;
    padding: 30px;
    border-radius: 15px;
    width: 90%;
    max-width: 1200px;
    max-height: 90vh;
    overflow-y: auto;
    animation: scaleIn 0.3s ease;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .close-btn {
    background: none;
    border: none;
    font-size: 2em;
    cursor: pointer;
    color: #666;
    padding: 0;
    line-height: 1;
  }

  .close-btn:hover {
    color: #333;
  }

  .works-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
  
  .work-item {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    aspect-ratio: 3/4;
  }
  
  .work-item:hover {
    transform: translateY(-5px);
  }
  
  .work-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes scaleIn {
    from {
      transform: scale(0.9);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  @media (max-width: 768px) {
    .style-categories {
      flex-direction: column;
    }
    
    .title {
      font-size: 2em;
    }
    
    .modal-content {
      width: 95%;
      padding: 20px;
    }
  }
  </style>
