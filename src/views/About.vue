<template>
    <div class="about">
      <div class="container">
        <h1 class="title">关于我</h1>
        <div class="content">
          <section class="story">
            <h2>学习历程</h2>
            <p>在这里分享您的书法学习经历...</p>
          </section>
          <section class="teachers">
            <h2>师承</h2>
            <p>介绍您的书法老师...</p>
          </section>
          <section class="tools">
            <h2>工具偏好</h2>
            <p>分享您喜爱的书法工具...</p>
          </section>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .about {
    min-height: 100vh;
    padding: 40px 20px;
    background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%);
  }
  
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .title {
    font-family: 'Noto Serif SC', serif;
    font-size: 2.5em;
    color: var(--text-dark);
    text-align: center;
    margin-bottom: 40px;
  }
  
  .content {
    background: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  }
  
  section {
    margin-bottom: 30px;
  }
  
  h2 {
    font-family: 'Noto Serif SC', serif;
    font-size: 1.8em;
    color: var(--text-dark);
    margin-bottom: 20px;
  }
  
  p {
    color: var(--text-dark);
    line-height: 1.8;
    opacity: 0.9;
  }
  
  @media (max-width: 768px) {
    .title {
      font-size: 2em;
    }
    
    .content {
      padding: 20px;
    }
  }
  </style>