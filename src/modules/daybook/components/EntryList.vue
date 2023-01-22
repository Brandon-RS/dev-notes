<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input
        type="text"
        class="form-control"
        placeholder="Search entry">
    </div>

    <div class="entry-scroll-area">
      <Entry v-for="item in 10" :key="item" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const Entry = defineAsyncComponent(() => import('@/modules/daybook/components/EntryDaybook.vue'))
</script>

<style lang="scss" scoped>
.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 62px);
}

.entry-scroll-area {
  height: calc(100vh - 108px);
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
