<script setup lang="ts">
</script>

<template>
  <span class="form-greet">
    Hey, Hello
    <i class="fa-solid fa-hand-peace"></i>
    <span>Enter the information you entered when registered ...</span>
  </span>
  <form class="form-container">

    <div class="form-field">
      <i class="fa-solid fa-at"></i>
      <input type="text"
        class="form-input"
        placeholder="Email"
        required>
    </div>

    <div class="form-field">
      <i class="fa-solid fa-lock"></i>
      <input type="password"
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
