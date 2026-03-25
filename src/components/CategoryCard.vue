<template>
  <div class="category-card d-flex align-items-center p-3 rounded-pill shadow-sm border mb-3 cursor-pointer">
    <div class="icon-box rounded-circle d-flex align-items-center justify-content-center me-3"
      style="width: 48px; height: 48px; background-color: var(--bg-main);">
      <i :class="icon" class="text-primary fs-5"></i>
    </div>
    <div class="flex-grow-1">
      <h6 class="mb-0 fw-bold small">{{ title }}</h6>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  icon: String
})
</script>

<style scoped>
.category-card {
  transition: all 0.2s ease-in-out;
  /* 使用 CSS 變數控制背景與邊框 */
  background-color: var(--bg-card) !important;
  border: 1px solid var(--border-color) !important;
}

.category-card:hover {
  /* 懸停時邊框變亮藍，背景稍微加深/變色 */
  border-color: var(--google-blue) !important;
  background-color: var(--bg-main) !important;
  transform: translateY(-3px);
  cursor: pointer;
}

/* 確保深色模式下的陰影更柔和 */
[data-theme='dark'] .category-card {
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, 0.3) !important;
}
</style>