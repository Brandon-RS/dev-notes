<template>
  <div class="home">
    <h1>Home Page</h1>

    <button @click="goToDaybook" class="btn btn-primary">Primary</button>
    <button @click="goToDaybook" class="btn btn-secondary">Secondary</button>
    <button @click="goToDaybook" class="btn btn-success">Success</button>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'


const goToDaybook = () => {
  router.push({ name: 'no-entry' })
}

</script>
