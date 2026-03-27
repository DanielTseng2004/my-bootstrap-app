<template>
  <div class="jobs-page min-vh-100">
    <div class="search-header py-3 shadow-sm sticky-top" style="top: 10px; z-index: 100;">
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
          <SideBar :external-search="searchQuery" @update-results="handleUpdateResults" />
        </div>

        <div class="col-lg-9" style="z-index: 10;">
          <div class="d-flex justify-content-between align-items-center mb-4 px-2">
            <h5 class="fw-bold mb-0">共找到 {{ filteredJobs.length }} 個機會</h5>
          </div>

          <TransitionGroup name="list">
            <JobCard v-for="job in filteredJobs" :key="job.id" :job="job" />
          </TransitionGroup>

          <div v-if="filteredJobs.length === 0" class="text-center py-5 mt-4">
            <div class="mb-3">
              <i class="bi bi-search text-muted" style="font-size: 3rem; opacity: 0.3;"></i>
            </div>
            <h5 class="text-muted fw-bold">找不到符合條件的職缺</h5>
            <p class="text-muted small">請嘗試調整左側篩選條件或搜尋關鍵字</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SideBar from '../components/SideBar.vue'
import JobCard from '../components/JobCard.vue'

const searchQuery = ref('')

const filteredJobs = ref([])

const handleUpdateResults = (results) => {
  filteredJobs.value = results
}
</script>

<style scoped>
.jobs-page {
  background-color: var(--bg-main) !important;
  min-height: 100vh;
  transition: background-color 0.3s ease;
}

.search-header {
  background-color: var(--nav-bg) !important;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
}

.custom-search-icon {
  background-color: var(--bg-card) !important;
  color: var(--google-blue);
  padding-left: 1.5rem;
}

.custom-search-input {
  background-color: var(--bg-card) !important;
  color: var(--text-main) !important;
  font-size: 1rem;
}

.custom-search-input::placeholder {
  color: var(--text-muted);
  opacity: 0.6;
}

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