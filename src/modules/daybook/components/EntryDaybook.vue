<script lang="ts" setup>
import { EntryType } from '@/types'
import { computed } from 'vue'

const props = defineProps<{
  entry: EntryType
}>()

const entry = computed(() => props.entry)

</script>

<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: '12' } })">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">July</span>
      <span class="mx-2 fw-light">2023, Sunday</span>
    </div>

    <div class="entry-description">
      {{ entry.text }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: .2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: .2s all ease-in;
  }

  .entry-description {
    font-size: 14px;
  }
}
</style>
