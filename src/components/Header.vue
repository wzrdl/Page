<template>
  <header class="header">
    <h1 class="artist-name">墨韵雅集</h1>
    <p class="slogan">笔墨生香，心手相印</p>
  </header>
</template>

<style scoped>
.header {
  text-align: center;
  padding: 80px 20px 60px;
}

.artist-name {
  font-family: 'Noto Serif SC', '思源宋体', serif;
  font-size: 3.5em;
  font-weight: 700;
  margin-bottom: 10px;
  letter-spacing: 2px;
  color: var(--text-dark);
}

.slogan {
  font-size: 1.2em;
  font-weight: 400;
  color: var(--text-dark);
  opacity: 0.8;
}

@media (max-width: 992px) {
  .artist-name {
    font-size: 2.8em;
  }
  .slogan {
    font-size: 1.1em;
  }
}

@media (max-width: 768px) {
  .header {
    padding: 60px 15px 40px;
  }
  .artist-name {
    font-size: 2.2em;
  }
  .slogan {
    font-size: 1em;
  }
}
</style> 