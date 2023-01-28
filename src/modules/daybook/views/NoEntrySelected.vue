<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { useRouter } from 'vue-router'

const Fab = defineAsyncComponent(() => import('@/modules/daybook/components/FabDaybook.vue'))

const router = useRouter()

const createNewEntry = () => {
  router.push({ name: 'entry', params: { id: 'new-entry' } })
}

</script>

<template>
  <div class="no-entry-container d-flex justify-content-center">
    <h2 class="align-self-center">
      There is nothing to see ...
    </h2>
  </div>
  <Fab @on:click="createNewEntry" />
</template>

<style lang="scss" scoped>
.no-entry-container {
  height: 100%;
}
</style>
