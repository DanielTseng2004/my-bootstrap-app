<template>
  <div id="app">
    <Navbar />

    <div class="content-wrapper">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>

    <footer class="custom-footer py-5 mt-auto">
      <div class="container text-center">
        <div class="footer-logo mb-3 gradient-text fw-bold fs-4">Job Finder</div>
        <div class="footer-links mb-3">
          <a href="#" class="mx-2 text-decoration-none">隱私條款</a>
          <a href="#" class="mx-2 text-decoration-none">服務條款</a>
          <a href="#" class="mx-2 text-decoration-none">聯絡我們</a>
        </div>
        <p class="mb-0 opacity-50 small">
          © 2026 Job Finder Vue Demo.
          <span class="d-none d-md-inline">| Made with Vue 3 & Google Design Spirit</span>
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>

<style>
/* 引用全局變數樣式 */
@import './assets/app.css';

/* 1. 基礎佈局優化 */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* 背景隨主題色切換 */
  background-color: var(--bg-main);
  color: var(--text-main);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.content-wrapper {
  flex: 1;
  /* 確保 Footer 始終在底部 */
  /* 移除固定奶油色，背景由 #app 統一控制 */
}

/* 2. 路由切換動畫 (Fade + Slide) */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
}

/* 3. Footer 樣式優化 */
.custom-footer {
  /* 使用與背景微區隔的顏色 */
  background-color: var(--bg-card);
  border-top: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.footer-links a {
  color: var(--text-muted);
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: var(--google-blue);
}

/* 文字漸層效果 */
.gradient-text {
  background: var(--google-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* 修正 Body 預設邊距與背景 */
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  /* 奶油色移除，改為透明或跟隨變數 */
  background-color: var(--bg-main);
}
</style>