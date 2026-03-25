<template>
  <div class="job-detail-page min-vh-100 py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-8" v-if="job">
          <div class="card border-0 shadow-sm rounded-4 p-4 p-md-5 mb-4">
            <button @click="$router.back()" class="btn btn-link text-decoration-none p-0 mb-4 custom-back-btn">
              <i class="bi bi-arrow-left me-2"></i>返回列表
            </button>

            <div class="d-flex align-items-center mb-3">
              <h1 class="fw-bold mb-0">{{ job.title }}</h1>
            </div>
            <p class="text-muted fs-5">{{ job.company }} • {{ job.location }}</p>

            <hr class="my-4" style="opacity: 0.1;">

            <section class="mb-5">
              <h4 class="fw-bold mb-3 d-flex align-items-center">
                <i class="bi bi-person-workspace me-2 text-primary"></i>工作內容
              </h4>
              <p class="text-muted lh-lg">{{ job.description }}</p>
            </section>

            <section class="mb-4">
              <h4 class="fw-bold mb-3 d-flex align-items-center">
                <i class="bi bi-check2-circle me-2 text-primary"></i>條件要求
              </h4>
              <ul class="job-list">
                <li v-for="(req, index) in job.requirements" :key="index">{{ req }}</li>
              </ul>
            </section>
          </div>
        </div>

        <div class="col-lg-4" v-if="job">
          <div class="card border-0 shadow-sm rounded-4 p-4 sticky-top apply-card" style="top: 100px;">
            <div class="mb-4">
              <span class="text-muted small d-block mb-1">月薪範圍</span>
              <h3 class="text-primary fw-bold mb-0">{{ job.salary }}</h3>
            </div>

            <button class="btn btn-primary w-100 rounded-pill mb-3 py-3 fw-bold shadow-sm apply-btn">
              立即投遞履歷
            </button>

            <button class="btn btn-outline-custom w-100 rounded-pill py-2">
              <i class="bi bi-bookmark me-2"></i>收藏職缺
            </button>

            <div class="mt-4 pt-4 border-top text-center">
              <p class="text-muted small mb-0">
                <i class="bi bi-shield-check me-1"></i>此職缺由企業官方發布
              </p>
            </div>
          </div>
        </div>

        <!-- 找不到職缺的狀態 -->
        <div v-else class="col-12 text-center py-5">
          <h3 class="text-muted">找不到該職缺資料</h3>
          <router-link to="/jobs" class="btn btn-primary mt-3">返回職缺列表</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { jobs } from '../data/jobs.js'

const route = useRoute()
const jobId = route.params.id

const job = computed(() => {
  return jobs.find(j => j.id == jobId)
})
</script>

<style scoped>
.job-detail-page {
  /* 背景隨全局變數切換 */
  background-color: var(--bg-main);
  transition: background-color 0.3s ease;
}

/* 列表樣式優化 */
.job-list {
  padding-left: 1.2rem;
}

.job-list li {
  margin-bottom: 0.8rem;
  line-height: 1.6;
}

/* 返回按鈕顏色 */
.custom-back-btn {
  color: var(--text-muted);
}

.custom-back-btn:hover {
  color: var(--google-blue);
}

/* 自定義 Outlined 按鈕 */
.btn-outline-custom {
  color: var(--text-main);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.btn-outline-custom:hover {
  background-color: var(--bg-main);
  border-color: var(--google-blue);
  color: var(--google-blue);
}

/* 投遞按鈕 */
.apply-btn {
  background-color: var(--google-blue);
  border: none;
}

.apply-btn:hover {
  filter: brightness(1.1);
  transform: translateY(-1px);
}

/* 針對深色模式的微調 */
[data-theme='dark'] .card {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3) !important;
}

[data-theme='dark'] .apply-card {
  background-color: var(--bg-card);
}
</style>