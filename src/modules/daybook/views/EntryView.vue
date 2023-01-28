<script setup lang="ts">
import { defineAsyncComponent, ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { getEntryDate } from '@/helpers/dates'
import { EntryType } from '@/types'
import { blankEntry } from '@/helpers/generics'

const Fab = defineAsyncComponent(() => import('@/modules/daybook/components/FabDaybook.vue'))

const props = defineProps<{ id: string }>()
const router = useRouter()
const store = useStore()
const entry = ref<EntryType>(blankEntry)

const loadEntry = () => {
  const item = store.getters['journal/getEntryByID'](props.id)
  if (!item) return router.push({ name: 'no-entry' })
  entry.value = item
}

loadEntry()
const entryDate = computed(() => getEntryDate(entry.value.date))

watch(computed(() => props.id), () => { loadEntry() })

const saveEntry = async () => {
  console.log('Saving entry')
}

</script>

<template>
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-between p-2">
      <div>
        <span class="text-success fs-3 fw-bold">{{ entryDate.day }}</span>
        <span class="mx-1 fs-3">{{ entryDate.month }}</span>
        <span class="mx-2 fs-4 fw-light">{{ entryDate.yearDay }}</span>
      </div>

      <div>
        <button class="btn btn-danger mx-2">
          Delete
          <i class="fa-solid fa-trash-alt"></i>
        </button>
        <button class="btn btn-primary">
          Upload image
          <i class="fa-solid fa-upload"></i>
        </button>
      </div>
    </div>

    <hr>

    <div class="d-flex flex-column px-3 h-75">
      <textarea
        autofocus
        :value="entry.text"
        placeholder="What happen today?"></textarea>
    </div>

    <img
      class="img-thumbnail"
      src="https://images.unsplash.com/photo-1661961111184-11317b40adb2?&w=300"
      alt="entry picture">
  </template>

  <Fab
    icon="save"
    @on:click="saveEntry" />
</template>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;
  resize: none;

  &:focus {
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0 5px 10px rgba($color: #000000, $alpha: .2);
}
</style>
