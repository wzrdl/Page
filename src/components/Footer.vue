<template>
  <footer class="footer">
    <p class="contact-info">联系邮箱: contact@example.com</p>
    <p class="copyright">© {{ new Date().getFullYear() }} 墨韵雅集. All Rights Reserved.</p>
  </footer>
</template>

<style scoped>
.footer {
  text-align: center;
  padding: 40px 20px;
  font-size: 0.9em;
  color: var(--text-dark);
  opacity: 0.7;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  margin-top: 60px;
}
</style> 