<template>
  <button 
  @click="$emit('on:click')"
  class=" btn-fab btn btn-primary">
    <i
      class="fa-solid fa-2x"
      :class="'fa-' + props.icon">
    </i>
  </button>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    default: 'plus'
  }
})

</script>

<style lang="scss" scoped>
.btn-fab {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 70px;
  height: 70px;
  border-radius: 100%;
}
</style>
