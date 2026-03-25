<template>
  <div class="jobs-page min-vh-100">

    <div class="search-header py-5 shadow-sm sticky-top" style="top: 70px; z-index: 100;">
      <div class="container text-center">
        <div class="col-md-8 mx-auto">
          <div class="input-group input-group-lg shadow-sm rounded-pill overflow-hidden border">
            <span class="input-group-text border-0 custom-search-icon">
              <i class="bi bi-search"></i>
            </span>
            <input v-model="searchQuery" type="text" class="form-control border-0 custom-search-input shadow-none"
              placeholder="搜尋職位、公司名稱或關鍵字...">
          </div>
        </div>
      </div>
    </div>

    <div class="container py-5">
      <div class="row g-4">
        <div class="col-lg-3 position-relative" style="z-index: 20;">
          <SideBar @filter="handleFilter" />
        </div>

        <div class="col-lg-9" style="z-index: 10;">
          <TransitionGroup name="list">
            <JobCard v-for="job in filteredJobs" :key="job.id" :job="job" />
          </TransitionGroup>

          <div v-if="filteredJobs.length === 0" class="text-center py-5">
            <div class="mb-3">
              <i class="bi bi-search text-muted" style="font-size: 3rem; opacity: 0.3;"></i>
            </div>
            <h5 class="text-muted">找不到符合關鍵字的職缺</h5>
            <p class="text-muted small">嘗試調整搜尋條件或清除篩選</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import SideBar from '../components/SideBar.vue'
import JobCard from '../components/JobCard.vue'
import { jobs } from '../data/jobs.js'

const searchQuery = ref('')
const activeFilters = ref({
  fullTime: true, // 預設顯示，需配合 Sidebar 邏輯
  remote: false,
  contract: false,
  salary: 0
})

const filteredJobs = computed(() => {
  return jobs.filter(job => {
    // 1. 關鍵字搜尋
    const matchQuery =
      job.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      job.tags.some(tag => tag.toLowerCase().includes(searchQuery.value.toLowerCase()));

    if (!matchQuery) return false;

    // 2. 側邊欄篩選
    // 薪資篩選 (簡單邏輯：職缺最低薪資 >= 篩選薪資)
    const salaryLimits = { 0: 0, 1: 50, 2: 80, 3: 100 };
    const minSalaryReq = salaryLimits[activeFilters.value.salary] || 0;
    if (job.minSalary < minSalaryReq) return false;

    // 類型篩選 (如果使用者有勾選任何類型，則只顯示符合的；若全沒勾則顯示所有 或 預設顯示 Full-time)
    // 這裡實作：如果有勾選特定條件，必須符合其中之一
    const showFullTime = activeFilters.value.fullTime;
    const showRemote = activeFilters.value.remote;
    const showContract = activeFilters.value.contract;

    // 如果篩選器有勾選，檢查是否符合
    if (showRemote && !job.isRemote) return false;
    if (showContract && job.type !== 'Contract') return false;
    // 注意：實際邏輯視需求而定，這裡示範簡單的過濾

    return true;
  })
})

const handleFilter = (filters) => {
  activeFilters.value = filters;
}
</script>

<style scoped>
/* JobsView.vue */
.jobs-page {
  /* 強制套用 app.css 定義的背景變數 */
  background-color: var(--bg-main) !important;
  min-height: 100vh;
  transition: background-color 0.3s ease;
}

/* 確保搜尋列在滾動時不會因為透明度看到下方的白色 */
.search-header {
  background-color: var(--nav-bg) !important;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
}

/* 搜尋圖示背景 */
.custom-search-icon {
  background-color: var(--bg-card) !important;
  color: var(--google-blue);
  padding-left: 1.5rem;
}

/* 搜尋輸入框 */
.custom-search-input {
  background-color: var(--bg-card) !important;
  color: var(--text-main) !important;
  font-size: 1rem;
}

/* 輸入框 Placeholder 顏色 */
.custom-search-input::placeholder {
  color: var(--text-muted);
  opacity: 0.6;
}

/* 列表動畫 */
.list-enter-active,
.list-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* 搜尋欄在深色模式下的邊框微調 */
[data-theme='dark'] .input-group {
  border-color: var(--border-color) !important;
}
</style>