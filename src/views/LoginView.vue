<template>
  <div class="login-page min-vh-100 d-flex align-items-center py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-5">
          <div class="card border-0 shadow-lg rounded-5 overflow-hidden">
            <div class="card-body p-5">
              <div class="text-center mb-5">
                <h2 class="fw-bold mb-2">
                  <span>歡迎回來</span>
                </h2>
                <p class="text-muted small">
                  登入您的帳號以探索更多職缺
                </p>
              </div>

              <!-- 錯誤訊息提示區塊 -->
              <div v-if="errorMessage" class="alert alert-danger py-2 small fw-bold d-flex align-items-center"
                role="alert">
                <i class="bi bi-exclamation-circle-fill me-2"></i>
                {{ errorMessage }}
              </div>

              <form @submit.prevent="handleLogin">
                <div class="mb-3">
                  <label class="form-label small fw-bold custom-label">電子郵件</label>
                  <input v-model="form.email" type="email" class="form-control form-control-lg custom-input shadow-none"
                    placeholder="name@example.com" required>
                </div>

                <div class="mb-4">
                  <div class="d-flex justify-content-between align-items-center">
                    <label class="form-label small fw-bold custom-label">密碼</label>
                    <a href="#" @click.prevent="handleForgotPassword"
                      class="text-primary x-small text-decoration-none mb-2">忘記密碼？</a>
                  </div>
                  <div class="position-relative">
                    <input v-model="form.password" :type="showPassword ? 'text' : 'password'"
                      class="form-control form-control-lg custom-input shadow-none pe-5" placeholder="••••••••"
                      required>
                    <button type="button"
                      class="btn border-0 position-absolute top-50 end-0 translate-middle-y me-1 text-muted"
                      @click="showPassword = !showPassword">
                      <i class="bi" :class="showPassword ? 'bi-eye-slash' : 'bi-eye'"></i>
                    </button>
                  </div>
                </div>

                <button type="submit" :disabled="isLoading"
                  class="btn btn-primary w-100 py-3 rounded-pill fw-bold shadow-sm mb-4 apply-btn d-flex align-items-center justify-content-center">
                  <span v-if="isLoading" class="spinner-border spinner-border-sm me-2" role="status"
                    aria-hidden="true"></span>
                  <span v-if="isLoading">登入中...</span>
                  <span v-else>立即登入</span>
                </button>
              </form>

              <div class="text-center mb-4 position-relative">
                <hr class="opacity-10">
                <span
                  class="position-absolute top-50 start-50 translate-middle bg-card px-3 text-muted x-small">或使用以下方式</span>
              </div>

              <div class="d-grid mb-4">
                <button type="button" @click="handleGoogleLogin"
                  class="btn btn-outline-custom rounded-pill py-2 d-flex align-items-center justify-content-center">
                  <i class="bi bi-google me-2"></i> Google 帳號登入
                </button>
              </div>

              <div class="text-center">
                <span class="text-muted small">還沒有帳號？</span>
                <router-link to="/register" class="btn btn-link btn-sm fw-bold text-decoration-none ms-1">
                  立即註冊
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { users } from '../data/users';

const router = useRouter();
const form = reactive({
  email: '',
  password: ''
});
const isLoading = ref(false);
const errorMessage = ref('');
const showPassword = ref(false);

const handleLogin = () => {
  // 重置錯誤訊息並開始載入
  errorMessage.value = '';
  isLoading.value = true;

  // 模擬網路延遲 (500ms)
  setTimeout(() => {
    const user = users.find(user => user.email === form.email && user.password === form.password);

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('isLoggedIn', 'true');
      // alert('登入成功！'); // 移除 alert 改為直接跳轉
      router.push('/profile');
    } else {
      errorMessage.value = '電子信箱或密碼錯誤，請再試一次。';
    }

    // 結束載入狀態
    isLoading.value = false;
  }, 800);
};

const handleGoogleLogin = () => {
  alert('此功能僅為演示，尚未串接 Google API。');
};

const handleForgotPassword = () => {
  alert('請聯繫系統管理員以重設密碼。');
};
</script>

<style scoped>
.login-page {
  background-color: var(--bg-main);
  transition: background-color 0.3s ease;
}

/* 標題漸層 */
.gradient-text {
  background: var(--google-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* 自定義輸入框樣式 */
.custom-input {
  background-color: var(--bg-main) !important;
  border: 1px solid var(--border-color) !important;
  color: var(--text-main) !important;
  border-radius: 12px;
  transition: border-color 0.2s ease;
}

.custom-input:focus {
  border-color: var(--google-blue) !important;
  background-color: var(--bg-card) !important;
}

/* 讓密碼顯示按鈕在 focus 時不要有外框 */
.position-relative button:focus {
  box-shadow: none;
}

.custom-label {
  color: var(--text-main);
  margin-left: 4px;
}

/* 輔助文字 */
.x-small {
  font-size: 0.75rem;
}

/* 背景文字覆蓋層 (用於分隔線) */
.bg-card {
  background-color: var(--bg-card);
}

/* 自定義 Outlined 按鈕 */
.btn-outline-custom {
  color: var(--text-main);
  border: 1px solid var(--border-color);
  transition: all 0.2s ease;
}

.btn-outline-custom:hover {
  background-color: var(--bg-main);
  border-color: var(--google-blue);
}

.apply-btn {
  background-color: var(--google-blue);
  border: none;
}

.apply-btn:hover {
  filter: brightness(1.1);
  transform: translateY(-1px);
}
</style>