<template>
  <div class="modal fade" id="settingsModal" tabindex="-1" aria-hidden="true" ref="modalElement">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content rounded-4 border-0 shadow">
        <div class="modal-header border-0">
          <h5 class="modal-title fw-bold">帳號設定</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body px-4 pb-4">
          <form @submit.prevent="handleSave">
            <h6 class="fw-bold mb-3 text-primary"><i class="bi bi-shield-lock me-2"></i>安全性</h6>
            <div class="mb-3">
              <label class="form-label small fw-bold text-muted">目前密碼</label>
              <input v-model="form.currentPassword" type="password" class="form-control rounded-3"
                placeholder="••••••••">
            </div>
            <div class="mb-3">
              <label class="form-label small fw-bold text-muted">新密碼</label>
              <input v-model="form.newPassword" type="password" class="form-control rounded-3" placeholder="••••••••">
            </div>

            <hr class="my-4 opacity-10">

            <h6 class="fw-bold mb-3 text-primary"><i class="bi bi-bell me-2"></i>通知設定</h6>
            <div class="form-check form-switch mb-3">
              <input v-model="form.emailNotif" class="form-check-input" type="checkbox" id="emailNotif">
              <label class="form-check-label small" for="emailNotif">接收職缺推薦電子郵件</label>
            </div>
            <div class="form-check form-switch">
              <input v-model="form.smsNotif" class="form-check-input" type="checkbox" id="smsNotif">
              <label class="form-check-label small" for="smsNotif">接收面試邀請簡訊</label>
            </div>

            <hr class="my-4 opacity-10">

            <div class="d-flex justify-content-between align-items-center">
              <button type="button" class="btn btn-link text-danger text-decoration-none p-0 small fw-bold">
                刪除帳號
              </button>
              <div>
                <button type="button" class="btn btn-light rounded-pill me-2 fw-bold"
                  data-bs-dismiss="modal">取消</button>
                <button type="submit" class="btn btn-primary rounded-pill px-4 fw-bold shadow-sm">儲存變更</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { Modal } from 'bootstrap'

const modalElement = ref(null)
let modalInstance = null

const form = reactive({
  currentPassword: '',
  newPassword: '',
  emailNotif: true,
  smsNotif: false
})

onMounted(() => {
  modalInstance = new Modal(modalElement.value)
})

const show = () => {
  modalInstance.show()
}

const handleSave = () => {
  // 模擬儲存邏輯
  if (form.newPassword && !form.currentPassword) {
    alert('請輸入目前密碼以確認身份')
    return
  }

  alert('設定已更新！')
  modalInstance.hide()

  // 清空密碼欄位
  form.currentPassword = ''
  form.newPassword = ''
}

defineExpose({ show })
</script>

<style scoped>
.form-control:focus {
  border-color: var(--google-blue);
  box-shadow: 0 0 0 0.25rem rgba(66, 133, 244, 0.15);
}
</style>