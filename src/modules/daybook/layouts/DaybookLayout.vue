<template>
  <NavbarDaybook />

  <div class="d-flex">
    <div class="col-4">
      <EntryList />
    </div>
    <div class="col">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import NavbarDaybook from '@/modules/daybook/components/NavbarDaybook.vue'
import EntryList from '@/modules/daybook/components/EntryList.vue'

</script>

<style lang="scss" scoped>

</style>
