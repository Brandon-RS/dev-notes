<script lang="ts" setup>
import { defineAsyncComponent, computed, ref } from 'vue'
import { useStore } from 'vuex'
import { EntryType, State } from '@/types'

const Entry = defineAsyncComponent(() => import('@/modules/daybook/components/EntryDaybook.vue'))
const store = useStore<State>()
const text = ref<string>('')

const entriesByTerm = computed<EntryType[]>(
  () => store.getters['journal/getEntriesByTerm'](text.value)
)

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

    <div class="mt-2 d-flex flex-column">
      <button
        @click="$router.push({ name: 'entry', params: { id: 'new-entry' } })"
        class="btn btn-primary mx-2">
        New Entry
      </button>
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
