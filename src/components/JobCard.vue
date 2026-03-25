<template>
  <div class="card shadow-sm mb-4 overflow-hidden job-card" @click="$router.push(`/jobs/${job.id}`)">
    <div class="card-body p-4">
      <div class="row align-items-center">
        <div class="col-auto">
          <div class="rounded-4 d-flex align-items-center justify-content-center"
            style="width: 70px; height: 70px; background-color: var(--bg-main);">
            <i :class="job.icon || 'bi bi-briefcase'" class="fs-1 text-primary"></i>
          </div>
        </div>

        <div class="col">
          <div class="d-flex justify-content-between">
            <h5 class="fw-bold mb-1">{{ job.title }}</h5>
            <span class="text-muted small">
              <i class="bi bi-clock me-1"></i>{{ job.postedAt }}
            </span>
          </div>
          <p class="text-muted mb-2">{{ job.company }} • {{ job.location }}</p>

          <div class="d-flex flex-wrap gap-2 mb-2">
            <span v-for="tag in job.tags" :key="tag" class="badge fw-normal border border-primary border-opacity-25"
              style="background-color: rgba(66, 133, 244, 0.1); color: var(--google-blue) !important;">
              {{ tag }}
            </span>
          </div>
        </div>

        <div class="col-md-3 text-md-end mt-3 mt-md-0 border-start ps-md-4"
          style="border-color: var(--border-color) !important;">
          <div class="h5 fw-bold mb-1">{{ job.salary }}</div>
          <button class="btn btn-primary w-100 rounded-pill fw-bold shadow-sm mt-2">
            查看詳情
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  job: {
    type: Object,
    required: true,
    default: () => ({
      id: 0,
      title: '職位名稱',
      company: '公司名稱',
      location: '地點',
      salary: '面議',
      tags: [],
      postedAt: '剛剛',
      icon: 'bi-briefcase'
    })
  }
})
</script>

<style scoped>
.job-card {
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  /* 背景與邊框已由全域 CSS 變數控制 */
}

.job-card:hover {
  transform: translateY(-5px);
  /* 懸停時增加陰影深度 */
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
}

[data-theme='dark'] .job-card:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4) !important;
}

/* 確保小螢幕下的邊框顯示正確 */
@media (max-width: 767.98px) {
  .col-md-3 {
    border-start: none !important;
    border-top: 1px solid var(--border-color) !important;
    padding-top: 1.5rem;
  }
}
</style>