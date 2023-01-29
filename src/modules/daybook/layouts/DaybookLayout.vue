<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import NavbarDaybook from '@/modules/daybook/components/NavbarDaybook.vue'
import EntryList from '@/modules/daybook/components/EntryList.vue'

const store = useStore()

if (store.state.journal.entries.length === 0) {
  store.dispatch('journal/loadEntries')
}
const isLoading = computed(() => store.state.journal.isLoading)

</script>

<template>
  <NavbarDaybook />

  <div
    v-if="isLoading"
    class="row justify-content-md-center">
    <div class="col-3 alert-info text-center mt-5">
      Please, wait ...
      <h3 class="mt-2">
        <i class="fa-solid fa-spin fa-sync"></i>
      </h3>
    </div>
  </div>

  <div
    v-else
    class="d-flex">
    <div class="col-4">
      <EntryList />
    </div>
    <div class="col">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
