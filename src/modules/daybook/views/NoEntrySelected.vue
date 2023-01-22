<template>
  <div class="no-entry-container d-flex justify-content-center">
    <h2 class="align-self-center">
      There is nothing to see ...
    </h2>
  </div>
  <Fab />
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const Fab = defineAsyncComponent(() => import('@/modules/daybook/components/FabDaybook.vue'))

</script>

<style lang="scss" scoped>
.no-entry-container {
  height: 100%;
}
</style>
