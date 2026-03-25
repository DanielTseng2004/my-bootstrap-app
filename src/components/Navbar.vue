<template>
  <nav class="navbar navbar-expand-lg sticky-top shadow-sm"
    style="background: var(--nav-bg); backdrop-filter: blur(10px); border-bottom: 1px solid var(--border-color);">
    <div class="container">
      <router-link to="/" class="navbar-brand fw-bold fs-3 gradient-text">Job Finder</router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item px-2">
            <router-link to="/" class="nav-link fw-bold">首頁</router-link>
          </li>
          <li class="nav-item px-2">
            <router-link to="/jobs" class="nav-link fw-bold">瀏覽職缺</router-link>
          </li>

          <li v-if="isLoggedIn" class="nav-item px-2">
            <router-link to="/profile" class="nav-link fw-bold d-flex align-items-center">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" class="rounded-circle me-2 border"
                width="28">
              個人空間
            </router-link>
          </li>

          <template v-else>
            <li class="nav-item px-2">
              <router-link to="/login" class="nav-link fw-bold">登入</router-link>
            </li>
            <li class="nav-item px-2">
              <router-link to="/register" class="btn btn-primary rounded-pill px-4 fw-bold shadow-sm ms-lg-2">
                註冊
              </router-link>
            </li>
          </template>

          <li class="nav-item ms-lg-3">
            <button @click="toggleTheme" class="btn btn-link nav-link p-0 border-0 shadow-none">
              <i :class="isDark ? 'bi bi-sun-fill text-warning' : 'bi bi-moon-stars-fill text-primary'"
                class="fs-5"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const isLoggedIn = ref(localStorage.getItem('isLoggedIn') === 'true')

watch(() => route.path, () => {
  isLoggedIn.value = localStorage.getItem('isLoggedIn') === 'true'
})

const isDark = ref(false)
const toggleTheme = () => {
  isDark.value = !isDark.value;
  const theme = isDark.value ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
};

onMounted(() => {
  window.addEventListener('storage', (e) => {
    if (e.key === 'isLoggedIn') {
      isLoggedIn.value = e.newValue === 'true';
    }
  });
  const savedTheme = localStorage.getItem('theme') || 'light';
  isDark.value = savedTheme === 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  router.afterEach(() => {
    const backdrop = document.querySelector('.modal-backdrop')
    if (backdrop) backdrop.remove()
    document.body.classList.remove('modal-open')
    document.body.style.overflow = ''
  });
})
</script>

<style scoped>
.nav-link {
  color: var(--text-main) !important;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--google-blue) !important;
}

/* 顯示當前所在頁面的標示 */
.router-link-active {
  color: var(--google-blue) !important;
}

/* 註冊按鈕樣式優化 */
.btn-primary {
  background-color: var(--google-blue);
  border: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(66, 133, 244, 0.3);
}

/* 移動版間距微調 */
@media (max-width: 991.98px) {
  .nav-item {
    padding: 0.5rem 0;
    width: 100%;
    text-align: center;
  }

  .ms-lg-3 {
    margin-top: 1rem;
  }
}
</style>