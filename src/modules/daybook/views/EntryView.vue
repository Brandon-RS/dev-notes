<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">15</span>
      <span class="mx-1 fs-3">July</span>
      <span class="mx-2 fs-4 fw-light">2023, Sunday</span>
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
    <textarea autofocus placeholder="What happen today?"></textarea>
  </div>

  <Fab
    icon="save" />

  <img
    class="img-thumbnail"
    src="https://images.unsplash.com/photo-1661961111184-11317b40adb2?&w=300"
    alt="entry picture">
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const Fab = defineAsyncComponent(() => import('@/modules/daybook/components/FabDaybook.vue'))
</script>

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
