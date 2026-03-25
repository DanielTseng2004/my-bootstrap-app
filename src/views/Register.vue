<template>
  <div class="register-page min-vh-100 d-flex align-items-center justify-content-center py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-5 col-lg-4">
          <div class="card border-0 shadow-lg rounded-4 overflow-hidden">
            <div class="card-body p-4 p-md-5">

              <div class="text-center mb-4">
                <router-link to="/" class="navbar-brand fw-bold fs-2 gradient-text text-decoration-none">
                  Job Finder
                </router-link>
                <h4 class="fw-bold mt-3 mb-1">建立新帳號</h4>
                <p class="text-muted small">加入我們，開啟你的職涯新篇章</p>
              </div>

              <form @submit.prevent="handleRegister">
                <div class="mb-3">
                  <label class="form-label small fw-bold">全名</label>
                  <input v-model="form.name" type="text" class="form-control rounded-3" placeholder="王小明" required>
                </div>
                <div class="mb-3">
                  <label class="form-label small fw-bold">電子信箱</label>
                  <input v-model="form.email" type="email" class="form-control rounded-3" placeholder="name@example.com"
                    required>
                </div>
                <div class="mb-3">
                  <label class="form-label small fw-bold">密碼</label>
                  <input v-model="form.password" type="password" class="form-control rounded-3" placeholder="至少 8 個字元"
                    required>
                </div>
                <div class="mb-4">
                  <label class="form-label small fw-bold">確認密碼</label>
                  <input v-model="form.confirmPassword" type="password" class="form-control rounded-3" required>
                </div>

                <div class="d-grid gap-2">
                  <button type="submit" class="btn btn-primary rounded-pill py-2 fw-bold shadow-sm">
                    註冊帳號
                  </button>
                </div>
              </form>

              <div class="d-flex align-items-center my-4">
                <hr class="flex-grow-1 border-color">
                <span class="mx-3 text-muted small">已有帳號？</span>
                <hr class="flex-grow-1 border-color">
              </div>

              <div class="text-center">
                <router-link to="/login" class="text-primary text-decoration-none fw-bold small">
                  立即登入
                </router-link>
              </div>

            </div>
          </div>

          <div class="text-center mt-4">
            <router-link to="/" class="text-muted text-decoration-none small">
              <i class="bi bi-arrow-left me-1"></i> 返回首頁
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { users } from '../data/users';

const router = useRouter();
const form = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
});

const handleRegister = () => {
  if (form.password !== form.confirmPassword) {
    alert('兩次密碼輸入不一致！');
    return;
  }

  const existingUser = users.find(user => user.email === form.email);
  if (existingUser) {
    alert('這個電子信箱已經被註冊了！');
    return;
  }

  const newUser = {
    id: Date.now(),
    name: form.name,
    email: form.email,
    password: form.password, // In a real app, hash this password
  };

  users.push(newUser);
  localStorage.setItem('user', JSON.stringify(newUser));
  localStorage.setItem('isLoggedIn', 'true');

  alert('註冊成功！已為您自動登入。');
  router.push('/profile');
};
</script>

<style scoped>
.register-page {
  background-color: var(--bg-main);
}

.card {
  background-color: var(--bg-card);
}

.form-control {
  background-color: var(--bg-main);
  border: 1px solid var(--border-color);
  color: var(--text-main);
  padding: 0.75rem 1rem;
}

.form-control:focus {
  border-color: var(--google-blue);
  box-shadow: 0 0 0 0.25 hide-rem rgba(66, 133, 244, 0.25);
}

.btn-primary {
  background-color: var(--google-blue);
  border: none;
}

.btn-primary:hover {
  filter: brightness(1.1);
}

/* 確保暗色模式下的分隔線顏色正確 */
.border-color {
  border-color: var(--border-color) !important;
}
</style>