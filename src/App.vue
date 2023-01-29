<script setup lang="ts">
import { statusEnum } from './helpers/generics'
import { useAuth } from './modules/auth/composables/useAuth'

const { authStatus, checkAuthStatus } = useAuth()

checkAuthStatus()

</script>

<template>
  <h1
    v-if="authStatus === statusEnum.authenticating">
    {{ authStatus }}
  </h1>
  <RouterView v-else />
</template>

<style lang="scss">

</style>
