<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import type { UserType } from '../auth'
import { useAuth } from '../composables/useAuth'

const { createUser } = useAuth()
const router = useRouter()

const userForm = ref<UserType>({
  name: 'Brandon',
  email: 'brandon@test.com',
  password: '123456',
})

const onSubmit = async () => {
  const resp = await createUser(userForm.value)
  if (!resp.ok) Swal.fire('Error', resp.message, 'error')
  else router.push({ name: 'no-entry' })
}

</script>

<template>
  <span class="form-greet">
    Hey, Hello
    <i class="fa-solid fa-hand-peace"></i>
    <span>Complete the fields bellow ...</span>
  </span>
  <form class="form-container" @submit.prevent="onSubmit">

    <div class="form-field">
      <i class="fa-solid fa-user"></i>
      <input type="text"
        v-model="userForm.name"
        class="form-input"
        placeholder="Name" required>
    </div>

    <div class="form-field">
      <i class="fa-solid fa-at"></i>
      <input type="email"
        v-model="userForm.email"
        class="form-input"
        placeholder="Email" required>
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
      <button type="submit" class="form-submit">
        Sing up
      </button>

    </div>

    <div class="form-link">
      <router-link :to="{ name: 'login' }">
        Do you have already an account?
      </router-link>
    </div>
  </form>
</template>

<style lang="scss" scoped>
@import '../css/form.scss';
</style>
