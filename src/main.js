import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 添加 Google Fonts
const link = document.createElement('link')
link.rel = 'stylesheet'
link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&family=Noto+Serif+SC:wght@400;700&display=swap'
document.head.appendChild(link)

const app = createApp(App)
app.use(router)
app.mount('#app') 