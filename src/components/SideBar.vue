<template>
  <aside class="sidebar-wrapper" style="position: relative; z-index: 1;">
    <div class="card shadow-sm p-4 rounded-4 sticky-top" style="top: 100px; z-index: 10;">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <h6 class="fw-bold mb-0 text-uppercase text-muted">進階篩選</h6>
        <button @click="clearFilters"
          class="btn btn-link btn-sm p-0 text-decoration-none text-primary fw-bold">清除</button>
      </div>

      <div class="mb-4">
        <label class="form-label fw-bold small mb-3">職位類型</label>
        <div class="form-check mb-2">
          <input class="form-check-input" type="checkbox" id="f-full" v-model="filters.fullTime">
          <label class="form-check-label small" for="f-full">全職 (Full-time)</label>
        </div>
        <div class="form-check mb-2">
          <input class="form-check-input" type="checkbox" id="f-remote" v-model="filters.remote">
          <label class="form-check-label small" for="f-remote">遠端 (Remote)</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="f-contract" v-model="filters.contract">
          <label class="form-check-label small" for="f-contract">約聘 (Contract)</label>
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

        <input type="range" class="form-range custom-range" min="0" max="3" step="1" v-model.number="filters.salary">

        <select class="form-select border-0 small shadow-none mt-2 custom-select" v-model.number="filters.salary">
          <option :value="0">不限金額</option>
          <option :value="1">NT$ 50k 以上</option>
          <option :value="2">NT$ 80k 以上</option>
          <option :value="3">NT$ 100k 以上</option>
        </select>
      </div>

      <div class="alert border-0 small mb-0 rounded-4"
        style="background-color: rgba(66, 133, 244, 0.08); color: var(--google-blue);">
        <i class="bi bi-info-circle-fill me-2"></i>
        <span>訂閱篩選條件，有新職缺時將主動通知。</span>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref, watch, computed } from 'vue'

const emit = defineEmits(['filter'])

const filters = ref({
  fullTime: true,
  remote: false,
  contract: false,
  salary: 0
})

const salaryOptions = {
  0: '不限金額',
  1: 'NT$ 50k+',
  2: 'NT$ 80k+',
  3: 'NT$ 100k+'
}

const salaryLabel = computed(() => salaryOptions[filters.value.salary])

watch(filters, (newVal) => {
  emit('filter', { ...newVal })
}, { deep: true })

const clearFilters = () => {
  filters.value = {
    fullTime: false,
    remote: false,
    contract: false,
    salary: 0
  }
}
</script>

<style scoped>
/* 針對 Select 在深色模式下的底色修正 */
.custom-select {
  background-color: var(--bg-main) !important;
  color: var(--text-main) !important;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

/* 針對深色模式下的 Checkbox 修正 */
[data-theme='dark'] .form-check-input {
  background-color: #2d2e30;
  border-color: #444;
}

[data-theme='dark'] .form-check-input:checked {
  background-color: var(--google-blue);
  border-color: var(--google-blue);
}

/* Range 滑桿在深色模式下的軌道顏色 */
[data-theme='dark'] .custom-range::-webkit-slider-runnable-track {
  background-color: #3c4043;
}

/* 微調側邊欄卡片在深色模式下的陰影 */
[data-theme='dark'] .card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;
}
</style>