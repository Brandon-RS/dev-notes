<script lang="ts" setup>
import { EntryType } from '@/types'
import { computed } from 'vue'
import { getEntryDate } from '@/helpers/dates'

const props = defineProps<{
  entry: EntryType
}>()

const shortText = computed(() => {
  return (props.entry.text.length > 150)
    ? props.entry.text.substring(0, 150) + '...'
    : props.entry.text
})

const entryDate = computed(() => getEntryDate(props.entry.date))

</script>

<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: props.entry.id } })">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">{{ entryDate.day }}</span>
      <span class="mx-1 fs-5">{{ entryDate.month }}</span>
      <span class="mx-2 fw-light">{{ entryDate.yearDay }}</span>
    </div>

    <div class="entry-description">
      {{ shortText }}
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
