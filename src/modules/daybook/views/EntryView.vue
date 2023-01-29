<script setup lang="ts">
import { defineAsyncComponent, ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { getEntryDate } from '@/helpers/dates'
import { EntryType, State } from '@/types'
import { blankEntry } from '@/helpers/generics'
import { uploadImage } from '../helpers/uploadImage'

const Fab = defineAsyncComponent(() => import('@/modules/daybook/components/FabDaybook.vue'))

const props = defineProps<{ id: string }>()
const router = useRouter()
const store = useStore<State>()
const entry = ref<EntryType>(blankEntry)
const imageSelector = ref()
const localImage = ref()
const file = ref()

const loadEntry = () => {
  if (props.id !== 'new-entry') {
    const item = store.getters['journal/getEntryByID'](props.id)
    if (!item) return router.push({ name: 'no-entry' })
    entry.value = item
  }
}

loadEntry()
const entryDate = computed(() => getEntryDate(entry.value.date))

watch(computed(() => props.id), (newId) => {
  loadEntry()
  if (newId === 'new-entry') {
    entry.value = blankEntry
    entry.value.text = ''
  }
})

const saveEntry = async () => {
  Swal.fire({
    title: 'Please, wait ...',
    allowEscapeKey: false,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading()
    }
  })

  const picture = await uploadImage(file.value)
  entry.value.picture = picture

  if (entry.value.id) {
    store.dispatch('journal/updateEntry', entry.value)
  } else {
    const id = await store.dispatch('journal/createEntry', entry.value)
    router.push({ name: 'entry', params: { id } })
  }

  file.value = ''
  Swal.fire('Saved', 'Entry registered successfully', 'success')
}

const deleteEntry = async () => {
  if (entry.value.id) {
    const { isConfirmed } = await Swal.fire({
      title: 'Are you sure?',
      text: 'Once deleted, cannot recovered',
      showDenyButton: true,
      confirmButtonText: 'Yes, I am sure.',
      denyButtonText: 'Cancel'
    })

    if (isConfirmed) {
      store.dispatch('journal/deleteEntry', entry.value.id)
      router.push({ name: 'no-entry' })

      Swal.fire('Deleted', '', 'success')
    }
  }
}

const onSelectedImage = () => {
  const auxFile = imageSelector.value.files[0]
  if (!auxFile) {
    localImage.value = ''
    file.value = ''
    return
  }

  file.value = auxFile
  const fr = new FileReader()
  fr.onload = () => localImage.value = fr.result
  fr.readAsDataURL(auxFile)
}

const onSelectImage = () => {
  imageSelector.value.click()
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
        <input
          v-show="false"
          type="file"
          ref="imageSelector"
          @change="onSelectedImage"
          accept="image/png, image/jpeg">

        <button
          v-if="entry.id"
          @click="deleteEntry"
          class="btn btn-danger mx-2">
          Delete
          <i class="fa-solid fa-trash-alt"></i>
        </button>
        <button
          @click="onSelectImage"
          class="btn btn-primary">
          Upload image
          <i class="fa-solid fa-upload"></i>
        </button>
      </div>
    </div>

    <hr>

    <div class="d-flex flex-column px-3 h-75">
      <textarea
        autofocus
        v-model="entry.text"
        placeholder="What happen today?"></textarea>
    </div>

    <img v-if="entry.picture && !localImage"
      class="img-thumbnail"
      :src="entry.picture"
      alt="entry picture">

    <img v-if="localImage"
      class="img-thumbnail"
      :src="localImage"
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
