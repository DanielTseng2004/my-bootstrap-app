<template>
  <div class="home-page overflow-hidden">
    <div class="p-4">
      <el-button type="primary">這是自動引入的按鈕</el-button>
      <el-date-picker v-model="value" type="date" placeholder="選個日期" />
    </div>
    <header class="py-5 position-relative hero-header">
      <div class="glow-sphere glow-1"></div>
      <div class="glow-sphere glow-2"></div>
      <div class="container py-5 position-relative" style="z-index: 1;">
        <!-- 橫排 -->
        <div class="row align-items-center">
          <!-- 左半邊 -->
          <div class="col-lg-7">
            <h1 class="display-3 fw-bold mb-4 tracking-tight">
              智慧配對，<br>
              <span class="gradient-text">成就精彩職涯</span>
            </h1>
            <p class="fs-5 text-muted mb-5" style="max-width: 500px; line-height: 1.6;">
              透過 AI 技術優化你的求職體驗，讓對的人遇見對의機會。
            </p>
            <div class="d-flex gap-3">
              <router-link to="/jobs" class="btn btn-primary btn-lg rounded-pill px-5 shadow-lg border-0"
                style="background: var(--google-blue);">
                立即探索
              </router-link>
              <router-link to="/jobs" class="btn btn-outline-primary btn-lg rounded-pill px-5 shadow-lg border-0"
                style="background: var(--google-white);">
                人才招聘
              </router-link>
            </div>
          </div>
          <!-- 右半邊 -->
          <div class="col-lg-5 text-center d-none d-lg-block">
            <div class="ai-recommend-card p-5 shadow-lg rounded-5">
              <i class="bi bi-stars fs-1 gradient-text"></i>
              <h4 class="mt-3 fw-bold">Gemini Match</h4>
              <p class="small text-muted">根據您的技能推薦 98% 匹配職缺</p>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- 分類section -->
    <section class="container py-5">
      <h3 class="fw-bold mb-5">探索熱門分類</h3>
      <!-- 橫排 -->
      <div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-4">
        <CategoryCard v-for="c in categories" :key="c.title" :title="c.title" :icon="c.icon" />
      </div>
    </section>

    <section class="container mb-5">
      <div class="row g-4">
        <div class="col-md-6">
          <div class="status-card p-5 rounded-4 d-flex align-items-center h-100 border-start border-4 border-primary">
            <i class="bi bi-archive fs-1 text-primary me-4"></i>
            <div>
              <h4 class="fw-bold">最近新增職缺</h4>
              <p class="text-muted small">查看最新發布的職缺資訊。</p>
              <router-link to="/jobs" class="text-primary fw-bold text-decoration-none small">
                尋找工作 <i class="bi bi-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="status-card p-5 rounded-4 d-flex align-items-center h-100 border-start border-4 border-danger">
            <i class="bi bi-megaphone fs-1 text-danger me-4"></i>
            <div>
              <h4 class="fw-bold">急徵人才中</h4>
              <p class="text-muted small">這些公司正在急徵人才，立即投遞！</p>
              <router-link to="/jobs" class="text-danger fw-bold text-decoration-none small">
                立即查看 <i class="bi bi-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container py-5">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h3 class="fw-bold">熱門城市</h3>
        <router-link to="/jobs" class="text-muted text-decoration-none small">查看全部 <i
            class="bi bi-arrow-right"></i></router-link>
      </div>
      <div class="row g-4">
        <div class="col-md-3 text-center" v-for="city in cities" :key="city.name">
          <div class="city-card rounded-4 overflow-hidden shadow-sm mb-3 border">
            <img :src="city.img" class="img-fluid w-100" style="height: 200px; object-fit: cover;" alt="city">
          </div>
          <h6 class="fw-bold mb-0">{{ city.name }}</h6>
          <span class="text-muted small">{{ city.jobs }} 個職缺</span>
        </div>
      </div>
    </section>

    <section class="container py-5 border-top section-logos">
      <h3 class="fw-bold mb-5">頂尖企業合作</h3>
      <div class="row align-items-center justify-content-between company-logos">
        <div class="col-auto mb-4"><i class="bi bi-microsoft fs-1"></i> Microsoft</div>
        <div class="col-auto mb-4">
          <h3 class="fw-bold">indeed</h3>
        </div>
        <div class="col-auto mb-4">
          <h3 class="fw-bold">CocaCola</h3>
        </div>
        <div class="col-auto mb-4"><i class="bi bi-slack fs-1"></i> Slack</div>
        <div class="col-auto mb-4">
          <h3 class="fw-bold">Google</h3>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import CategoryCard from '../components/CategoryCard.vue'
import { ref } from 'vue'
const value = ref('')
const categories = [
  { title: 'Accounting', icon: 'bi-briefcase' },
  { title: 'Marketing', icon: 'bi-megaphone' },
  { title: 'Medicine', icon: 'bi-capsule' },
  { title: 'IT', icon: 'bi-laptop' },
  { title: 'Security', icon: 'bi-shield-check' },
  { title: 'Design', icon: 'bi-palette' }
]

const cities = [
  { name: '紐約', jobs: '328', img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=400' },
  { name: '巴黎', jobs: '328', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400' },
  { name: '倫敦', jobs: '74', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=400' },
  { name: '曼谷', jobs: '92', img: 'https://images.unsplash.com/photo-1508009603885-50cf7c579367?auto=format&fit=crop&w=400' }
]
</script>

<style scoped>
.hero-header {
  background-color: var(--bg-main) !important;
  transition: background-color 0.3s ease;
}

.gradient-text {
  background: var(--google-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.btn-outline-custom {
  color: var(--text-main);
  border-color: var(--border-color);
}

.ai-recommend-card,
.status-card {
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
}

.city-card {
  border: 1px solid var(--border-color) !important;
}

/* --- 企業 Logo 顏色修正 --- */
.company-logos {
  /* 淺色模式：稍微淡化 */
  opacity: 0.7;
  transition: all 0.3s ease;
}

[data-theme='dark'] .company-logos,
[data-theme='dark'] .company-logos h3,
[data-theme='dark'] .company-logos i {
  /* 深色模式：強制變白，並移除灰階濾鏡 */
  color: #ffffff !important;
  filter: none !important;
  opacity: 1 !important;
}

.company-logos .col-auto:hover {
  opacity: 1;
  transform: translateY(-3px);
}

/* --- 光暈動畫 --- */
.glow-sphere {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  z-index: 0;
  opacity: 0.1;
}

.glow-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, #4285F4 0%, transparent 70%);
  top: -100px;
  right: -50px;
}

.glow-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #FBBC05 0%, transparent 70%);
  bottom: 0px;
  left: -100px;
}

[data-theme='dark'] .glow-sphere {
  opacity: 0.15;
}
</style>