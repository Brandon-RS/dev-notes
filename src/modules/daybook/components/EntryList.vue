<script lang="ts" setup>
import { defineAsyncComponent, computed, ref } from 'vue'
import { useStore } from 'vuex'
import { EntryType } from '@/types'

const Entry = defineAsyncComponent(() => import('@/modules/daybook/components/EntryDaybook.vue'))
const store = useStore()
const getEntriesByTerm = store.getters['journal/getEntriesByTerm']
const entriesByTerm = computed<EntryType[]>(() => getEntriesByTerm(text.value))
// const entriesByTerm = computed(() => store.getters['journal/getEntriesByTerm'](text.value))

const text = ref<string>('')


</script>
  
<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input
        type="text"
        class="form-control"
        v-model="text"
        placeholder="Search entry">
    </div>

    <div class="entry-scroll-area">
      <Entry v-for="entry in entriesByTerm" :key="entry.id" :entry="entry" />
    </div>
  </div>
</template>

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
