<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { UserType } from '../auth'
import { useAuth } from '../composables/useAuth'
import Swal from 'sweetalert2'

const { loginUser } = useAuth()
const router = useRouter()

const userForm = ref<UserType>({
  name: '',
  email: 'brandon@test.com',
  password: '123456',
})

const onSubmit = async () => {
  const resp = await loginUser(userForm.value)
  if (!resp.ok) Swal.fire('Error', resp.message, 'error')
  else router.push({ name: 'no-entry' })
}

</script>

<template>
  <span class="form-greet">
    Hey, Hello
    <i class="fa-solid fa-hand-peace"></i>
    <span>Enter the information you entered when registered ...</span>
  </span>
  <form class="form-container" @submit.prevent="onSubmit">

    <div class="form-field">
      <i class="fa-solid fa-at"></i>
      <input type="text"
        v-model="userForm.email"
        class="form-input"
        placeholder="Email"
        required>
    </div>

    <div class="form-field">
      <i class="fa-solid fa-lock"></i>
      <input type="password"
        v-model="userForm.password"
        class="form-input"
        placeholder="Password"
        required>
    </div>

    <div class="form-button">
      <button class="form-submit">
        Login
      </button>

    </div>

    <div class="form-link">
      <router-link :to="{ name: 'register' }">Don't have an account?</router-link>
    </div>
  </form>
</template>

<style lang="scss" scoped>
@import '../css/form.scss';
</style>
