<template>
    <div class="styles">
      <div class="container">
        <h1 class="title">风格系列</h1>
        <div class="style-categories">
          <div class="category">
            <h2>楷书</h2>
            <div class="works-grid">
              <!-- 作品展示区域 -->
            </div>
          </div>
          <div class="category">
            <h2>行书</h2>
            <div class="works-grid">
              <!-- 作品展示区域 -->
            </div>
          </div>
          <div class="category">
            <h2>草书</h2>
            <div class="works-grid">
              <!-- 作品展示区域 -->
            </div>
          </div>
          <div class="category">
            <h2>隶书</h2>
            <div class="works-grid">
              <!-- 作品展示区域 -->
            </div>
          </div>
          <div class="category">
            <h2>篆书</h2>
            <div class="works-grid">
              <!-- 作品展示区域 -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
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
    display: grid;
    gap: 40px;
  }
  
  .category {
    background: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  }
  
  h2 {
    font-family: 'Noto Serif SC', serif;
    font-size: 1.8em;
    color: var(--text-dark);
    margin-bottom: 20px;
    text-align: center;
  }
  
  .works-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px 0;
  }
  
  @media (max-width: 768px) {
    .title {
      font-size: 2em;
    }
    
    .category {
      padding: 20px;
    }
    
    .works-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>