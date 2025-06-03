<template>
  <div class="home">
    <div class="hero">
      <h1 class="title">墨韵雅集</h1>
      <p class="subtitle">笔墨生香，心手相印</p>
      <router-link to="/gallery" class="enter-button">
        进入展厅
      </router-link>
    </div>
    <div class="features">
      <div class="feature">
        <h3>传统书法</h3>
        <p>传承千年文化，展现书法艺术之美</p>
      </div>
      <div class="feature">
        <h3>现代演绎</h3>
        <p>融合当代审美，创新书法表现形式</p>
      </div>
      <div class="feature">
        <h3>艺术交流</h3>
        <p>以墨会友，共同探讨书法艺术</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%);
}

.hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.title {
  font-family: 'Noto Serif SC', serif;
  font-size: 4em;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 20px;
  letter-spacing: 4px;
}

.subtitle {
  font-size: 1.5em;
  color: var(--text-dark);
  opacity: 0.8;
  margin-bottom: 40px;
}

.enter-button {
  display: inline-block;
  padding: 15px 40px;
  font-size: 1.2em;
  color: #fff;
  background-color: var(--accent-color);
  border: none;
  border-radius: 30px;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.enter-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(139, 69, 19, 0.3);
}

.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding: 60px 20px;
  max-width: 1200px;
  width: 100%;
}

.feature {
  text-align: center;
  padding: 30px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.feature:hover {
  transform: translateY(-5px);
}

.feature h3 {
  font-family: 'Noto Serif SC', serif;
  font-size: 1.5em;
  margin-bottom: 15px;
  color: var(--text-dark);
}

.feature p {
  color: var(--text-dark);
  opacity: 0.8;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .title {
    font-size: 3em;
  }
  
  .subtitle {
    font-size: 1.2em;
  }
  
  .features {
    grid-template-columns: 1fr;
    padding: 40px 20px;
  }
  
  .feature {
    padding: 20px;
  }
}
</style> 