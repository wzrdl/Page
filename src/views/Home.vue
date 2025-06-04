<template>
  <div class="home">
    <div class="content">
      <div class="hero">
        <h1 class="title">墨韵雅集</h1>
        <p class="subtitle">笔墨生香，心手相印</p>
        <div class="nav-buttons">
          <router-link to="/gallery" class="nav-button">进入展厅</router-link>
          <router-link to="/about" class="nav-button">关于我</router-link>
          <router-link to="/styles" class="nav-button">风格系列</router-link>
        </div>
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
  </div>
</template>

<style scoped>
.home {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%);
  overflow: hidden;
}

.content {
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.hero {
  text-align: center;
}

.title {
  font-family: 'Noto Serif SC', serif;
  font-size: 3.5em;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 15px;
  letter-spacing: 4px;
}

.subtitle {
  font-size: 1.3em;
  color: var(--text-dark);
  opacity: 0.8;
  margin-bottom: 30px;
}

.nav-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.nav-button {
  display: inline-block;
  padding: 12px 30px;
  font-size: 1.1em;
  color: #fff;
  background-color: var(--accent-color);
  border: none;
  border-radius: 30px;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.nav-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(139, 69, 19, 0.3);
}

.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.feature {
  text-align: center;
  padding: 20px;
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
  font-size: 1.3em;
  margin-bottom: 10px;
  color: var(--text-dark);
}

.feature p {
  color: var(--text-dark);
  opacity: 0.8;
  line-height: 1.4;
  font-size: 0.95em;
}

@media (max-width: 768px) {
  .content {
    padding: 15px;
    gap: 20px;
  }

  .title {
    font-size: 2.5em;
  }
  
  .subtitle {
    font-size: 1.1em;
    margin-bottom: 20px;
  }
  
  .nav-buttons {
    flex-direction: column;
    gap: 10px;
  }
  
  .nav-button {
    width: 100%;
    text-align: center;
    padding: 10px 20px;
    font-size: 1em;
  }
  
  .features {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .feature {
    padding: 15px;
  }

  .feature h3 {
    font-size: 1.2em;
  }

  .feature p {
    font-size: 0.9em;
  }
}
</style>