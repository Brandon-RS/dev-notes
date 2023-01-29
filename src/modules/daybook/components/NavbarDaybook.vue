<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuth } from '@/modules/auth/composables/useAuth'

const router = useRouter()
const { username, logout } = useAuth()

const onLogout = () => {
  router.push({ name: 'login' })
  logout()
}

</script>

<template>
  <nav class="navbar bg-primary">
    <a class="navbar-brand text-white">
      <img
        src="@/assets/images/icon-head.png"
        alt="brand logo"
        height="35"
        class="d-inline-block align-text-center mx-2">
      {{ username }}
    </a>
    <div class="d-flex">
      <button
        @click="onLogout"
        class="btn btn-outline-info mx-2">
        <i class="fa-solid fa-sign-out-alt"></i>
      </button>
    </div>
  </nav>
</template>

<style lang="scss" scoped>

</style>
