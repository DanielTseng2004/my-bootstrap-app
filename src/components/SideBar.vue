<template>
  <aside class="sidebar-wrapper" style="position: relative; z-index: 1;">
    <div class="card shadow-sm p-4 rounded-4 sticky-top" style="top: 100px; z-index: 10;">

      <div class="d-flex justify-content-between align-items-center mb-4">
        <h6 class="fw-bold mb-0 text-uppercase text-muted">進階篩選</h6>
        <button @click="clearFilters"
          class="btn btn-link btn-sm p-0 text-decoration-none text-primary fw-bold">清除全部</button>
      </div>

      <div class="mb-4">
        <label class="form-label fw-bold small mb-2">關鍵字</label>
        <div class="input-group input-group-sm">
          <span class="input-group-text bg-light border-0"><i class="bi bi-search"></i></span>
          <input type="text" class="form-control bg-light border-0 shadow-none" placeholder="搜尋職位、公司..."
            v-model.trim="filters.search">
        </div>
      </div>

      <div class="mb-4">
        <label class="form-label fw-bold small mb-3">職位條件</label>
        <div class="form-check mb-2">
          <input class="form-check-input" type="checkbox" id="f-full" v-model="filters.fullTime">
          <label class="form-check-label small" for="f-full">全職 (Full-time)</label>
        </div>
        <div class="form-check mb-2">
          <input class="form-check-input" type="checkbox" id="f-remote" v-model="filters.isRemote">
          <label class="form-check-label small" for="f-remote">包含遠端 (Remote)</label>
        </div>
        <div class="form-check mb-2">
          <input class="form-check-input" type="checkbox" id="f-contract" v-model="filters.contract">
          <label class="form-check-label small" for="f-contract">約聘 (Contract)</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="f-intern" v-model="filters.internship">
          <label class="form-check-label small" for="f-intern">實習 (Internship)</label>
        </div>
      </div>

      <div class="mb-4">
        <label class="form-label fw-bold small mb-2">熱門技術</label>
        <div class="d-flex flex-wrap gap-2 mt-1">
          <span v-for="tag in popularTags" :key="tag" @click="toggleTag(tag)"
            :class="['badge rounded-pill cursor-pointer tag-badge', filters.tags.includes(tag) ? 'active' : '']">
            {{ tag }}
          </span>
        </div>
      </div>

      <div class="mb-4">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <label class="form-label fw-bold small mb-0">月薪預算</label>
          <span class="badge rounded-pill small px-3 py-2"
            style="background-color: rgba(66, 133, 244, 0.15); color: var(--google-blue);">
            {{ salaryLabel }}
          </span>
        </div>
        <input type="range" class="form-range custom-range mb-2" min="0" max="3" step="1"
          v-model.number="filters.salary">
        <select class="form-select border-0 small shadow-none custom-select" v-model.number="filters.salary">
          <option :value="0">不限金額</option>
          <option :value="1">NT$ 50k 以上</option>
          <option :value="2">NT$ 80k 以上</option>
          <option :value="3">NT$ 100k 以上</option>
        </select>
      </div>

      <div class="alert border-0 small mb-0 rounded-4"
        style="background-color: rgba(66, 133, 244, 0.08); color: var(--google-blue);">
        <i class="bi bi-info-circle-fill me-2"></i>
        <span>目前符合條件：{{ filteredCount }} 筆</span>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { jobs } from '../data/jobs'

const emit = defineEmits(['update-results'])

// 篩選狀態
const filters = ref({
  search: '',
  fullTime: false,
  isRemote: false,
  contract: false,
  internship: false,
  salary: 0,
  tags: []
})

const popularTags = ['Vue.js', 'React', 'Node.js', 'TypeScript', 'Python', 'Go', 'Figma', 'Security']
const salaryOptions = { 0: '不限', 1: '50k+', 2: '80k+', 3: '100k+' }
const salaryLabel = computed(() => salaryOptions[filters.value.salary])

// 核心過濾邏輯
const filteredResults = computed(() => {
  return jobs.filter(job => {
    const f = filters.value;

    // A. 關鍵字過濾 (公司、職稱、描述)
    const matchesSearch = !f.search ||
      [job.title, job.company, job.description].some(text =>
        text.toLowerCase().includes(f.search.toLowerCase())
      );

    // B. 薪資過濾 (使用資料中的 minSalary)
    const salaryThreshold = [0, 50, 80, 100][f.salary];
    const matchesSalary = job.minSalary >= salaryThreshold;

    // C. 職位類型過濾 (聯集邏輯：勾選多個時，符合其中之一即可)
    const noTypeSelected = !f.fullTime && !f.isRemote && !f.contract && !f.internship;
    const matchesType = noTypeSelected ||
      (f.fullTime && job.type === 'Full-time') ||
      (f.isRemote && job.isRemote) ||
      (f.contract && job.type === 'Contract') ||
      (f.internship && job.type === 'Internship');

    // D. 技術標籤過濾 (交集邏輯：必須包含所有選取的標籤)
    const matchesTags = f.tags.length === 0 ||
      f.tags.every(tag => job.tags.includes(tag));

    return matchesSearch && matchesSalary && matchesType && matchesTags;
  });
})

const filteredCount = computed(() => filteredResults.value.length)

// 監聽計算結果並發送給父組件
watch(filteredResults, (newResults) => {
  emit('update-results', newResults)
}, { immediate: true })

// 互動方法
const toggleTag = (tag) => {
  const index = filters.value.tags.indexOf(tag)
  if (index === -1) filters.value.tags.push(tag)
  else filters.value.tags.splice(index, 1)
}

const clearFilters = () => {
  filters.value = {
    search: '',
    fullTime: false,
    isRemote: false,
    contract: false,
    internship: false,
    salary: 0,
    tags: []
  }
}
</script>

<style scoped>
.tag-badge {
  background-color: #f8f9fa;
  color: #5f6368;
  border: 1px solid #dadce0;
  cursor: pointer;
  transition: all 0.2s;
  padding: 5px 12px;
  font-size: 0.8rem;
}

.tag-badge:hover {
  background-color: #e8f0fe;
}

.tag-badge.active {
  background-color: var(--google-blue, #4285f4);
  color: white;
  border-color: var(--google-blue, #4285f4);
}

.custom-select {
  cursor: pointer;
  background-color: #f8f9fa;
}

[data-theme='dark'] .tag-badge {
  background-color: #2d2e30;
  color: #bdc1c6;
  border-color: #5f6368;
}
</style>