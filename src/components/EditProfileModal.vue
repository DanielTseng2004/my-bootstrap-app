<template>
  <div class="modal fade" id="editProfileModal" tabindex="-1" aria-hidden="true" ref="modalElement">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content rounded-4 border-0 shadow">
        <div class="modal-header border-0 pb-0">
          <h5 class="modal-title fw-bold">編輯個人資料</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="handleSave">
            <div class="mb-3">
              <label class="form-label small fw-bold">職稱</label>
              <input v-model="form.title" type="text" class="form-control" required>
            </div>
            <div class="mb-3">
              <label class="form-label small fw-bold">公司</label>
              <input v-model="form.company" type="text" class="form-control" required>
            </div>
            <div class="mb-3">
              <label class="form-label small fw-bold">地點</label>
              <input v-model="form.location" type="text" class="form-control" required>
            </div>
            <div class="mb-3">
              <label class="form-label small fw-bold">關於我</label>
              <textarea v-model="form.about" class="form-control" rows="4"></textarea>
            </div>
            <div class="d-flex justify-content-end">
              <button type="button" class="btn btn-light rounded-pill me-2" data-bs-dismiss="modal">取消</button>
              <button type="submit" class="btn btn-primary rounded-pill px-4">儲存變更</button>
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

const props = defineProps(['initialData'])
const emit = defineEmits(['save'])

const modalElement = ref(null)
let modalInstance = null
const form = reactive({ ...props.initialData })

onMounted(() => {
  modalInstance = new Modal(modalElement.value)
})

const show = () => {
  Object.assign(form, props.initialData)
  modalInstance.show()
}

const handleSave = () => {
  emit('save', { ...form })
  modalInstance.hide()
}

defineExpose({ show })
</script>