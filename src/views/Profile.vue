<template>
  <div class="profile-layout-wrapper">

    <div class="profile-page min-vh-100 py-5">
      <div class="container">
        <div class="row g-4">

          <div class="col-lg-4">
            <div class="card border-0 shadow-sm rounded-4 p-4 text-center mb-4 profile-main-card">
              <div class="position-relative d-inline-block mb-3">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                  class="rounded-circle avatar-img shadow-sm" style="width: 120px; height: 120px;">
                <span class="position-absolute bottom-0 end-0 bg-success border border-4 border-card rounded-circle"
                  style="width: 22px; height: 22px;" title="在線中"></span>
              </div>
              <h4 class="fw-bold mb-1">{{ profileData.title }}</h4>
              <p class="text-muted small mb-4">{{ profileData.company }} • {{ profileData.location }}</p>

              <div class="d-grid gap-2">
                <button @click="editModalRef.show()"
                  class="btn btn-primary rounded-pill py-2 fw-bold apply-btn">編輯公開檔案</button>

                <button @click="settingsModalRef.show()"
                  class="btn btn-outline-custom rounded-pill py-2 text-muted">帳號設定</button>

                <button @click="handleLogout" class="btn btn-link text-danger text-decoration-none mt-2 small fw-bold">
                  <i class="bi bi-box-arrow-right me-2"></i>登出帳號
                </button>
              </div>
            </div>

            <div class="card border-0 shadow-sm rounded-4 p-4">
              <h6 class="fw-bold mb-3 d-flex align-items-center">
                <i class="bi bi-patch-check me-2 text-primary"></i>掌握技能
              </h6>
              <div class="d-flex flex-wrap gap-2">
                <span v-for="skill in ['Vue 3', 'Node.js', 'Bootstrap 5', 'UI Design', 'PostgreSQL']" :key="skill"
                  class="badge custom-badge">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>

          <div class="col-lg-8">
            <div class="row g-3 mb-4">
              <div class="col-md-4" v-for="stat in stats" :key="stat.label">
                <div class="card border-0 shadow-sm p-4 text-center overflow-hidden position-relative stat-card">
                  <i class="bi bi-graph-up position-absolute stat-icon-bg"></i>
                  <h2 class="fw-bold mb-1 stat-value">{{ stat.value }}</h2>
                  <span class="text-uppercase small tracking-widest text-muted fw-bold">{{ stat.label }}</span>
                </div>
              </div>
            </div>

            <div class="card border-0 shadow-sm rounded-4 p-4 mb-4">
              <h5 class="fw-bold mb-3">關於我</h5>
              <p class="text-muted mb-0 lh-lg">
                {{ profileData.about }}
              </p>
            </div>

            <div class="card border-0 shadow-sm rounded-4 p-4">
              <div class="d-flex justify-content-between align-items-center mb-4">
                <h5 class="fw-bold mb-0">最近應徵狀態</h5>
                <router-link to="/jobs"
                  class="btn btn-link btn-sm text-decoration-none p-0 text-primary fw-bold">查看全部</router-link>
              </div>

              <div class="timeline">
                <div v-for="app in applications" :key="app.id" class="d-flex mb-4 timeline-item">
                  <div class="flex-shrink-0 me-3">
                    <div class="icon-container rounded-3 d-flex align-items-center justify-content-center">
                      <i :class="app.icon" class="fs-4"></i>
                    </div>
                  </div>
                  <div class="flex-grow-1 border-bottom-theme pb-3">
                    <div class="d-flex justify-content-between align-items-start">
                      <div>
                        <h6 class="fw-bold mb-1">{{ app.role }}</h6>
                        <p class="text-muted small mb-0">{{ app.company }} • {{ app.date }}</p>
                      </div>
                      <span :class="app.statusClass" class="badge rounded-pill px-3 py-2">{{ app.status }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <EditProfileModal ref="editModalRef" :initialData="profileData" @save="updateProfile" />
    <AccountSettingsModal ref="settingsModalRef" />

  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import EditProfileModal from '../components/EditProfileModal.vue'
import AccountSettingsModal from '../components/AccountSettingsModal.vue'

const router = useRouter()
const editModalRef = ref(null)
const settingsModalRef = ref(null)

const profileData = reactive({
  title: '前端開發者',
  company: 'Google Taiwan',
  location: '台北市',
  about: '擁有 3 年以上前端開發經驗，目前深耕於 Vue 生態系。'
});

const updateProfile = (newData) => {
  Object.assign(profileData, newData);
};

const handleLogout = () => {
  if (confirm('確定要登出嗎？')) {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    router.push('/');
    console.log('使用者已登出');
  }
};

const stats = [
  { label: '已投遞職缺', value: '12' },
  { label: '面試邀請', value: '3' },
  { label: '收藏職缺', value: '25' }
]

const applications = [
  { id: 1, role: '全端開發工程師', company: 'Google Taiwan', date: '2024-03-24', status: '審核中', statusClass: 'status-pending', icon: 'bi-google' },
  { id: 2, role: 'UI 設計師', company: 'Apple Store', date: '2024-03-20', status: '已面試', statusClass: 'status-success', icon: 'bi-apple' },
  { id: 3, role: '前端工程師', company: 'Meta', date: '2024-03-15', status: '不錄取', statusClass: 'status-danger', icon: 'bi-facebook' }
]
</script>

<style scoped>
.profile-page {
  background-color: var(--bg-main);
  transition: all 0.3s ease;
}

/* 頭像與狀態 */
.avatar-img {
  border: 4px solid var(--bg-card);
  background-color: var(--bg-card);
}

.border-card {
  border-color: var(--bg-card) !important;
}

/* 卡片背景適配深色模式 */
.card {
  background-color: var(--bg-card);
  color: var(--text-main);
}

/* 技能標籤 */
.custom-badge {
  background-color: rgba(66, 133, 244, 0.1);
  color: var(--google-blue);
  font-weight: 500;
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
}

/* 數據卡片 */
.stat-card {
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-value {
  color: var(--google-blue);
  position: relative;
  z-index: 2;
}

.stat-icon-bg {
  font-size: 5rem;
  right: -10px;
  bottom: -10px;
  opacity: 0.05;
  color: var(--text-main);
}

/* 應徵進度清單 */
.icon-container {
  width: 50px;
  height: 50px;
  background-color: var(--bg-main);
  color: var(--google-blue);
  border: 1px solid var(--border-color);
}

.border-bottom-theme {
  border-bottom: 1px solid var(--border-color);
}

.timeline-item:last-child .border-bottom-theme {
  border-bottom: none;
}

/* 狀態標籤自定義顏色 (適配深深色模式) */
.status-pending {
  background-color: rgba(255, 185, 0, 0.15);
  color: #ffc107;
}

.status-success {
  background-color: rgba(25, 135, 84, 0.15);
  color: #198754;
}

.status-danger {
  background-color: rgba(220, 53, 69, 0.15);
  color: #dc3545;
}

/* 自定義 Outlined 按鈕 */
.btn-outline-custom {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-muted) !important;
}

.btn-outline-custom:hover {
  border-color: var(--google-blue);
  color: var(--google-blue) !important;
}

.apply-btn {
  background-color: var(--google-blue);
  border: none;
}

[data-theme='dark'] .custom-badge {
  background-color: rgba(138, 180, 248, 0.15);
  color: #8ab4f8;
  /* 較亮的藍色適配深色 */
}

/* 深色模式下的輔助文字優化 */
[data-theme='dark'] .text-muted {
  color: rgba(255, 255, 255, 0.6) !important;
}
</style>