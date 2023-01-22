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
      Commodo amet cupidatat dolor id duis. Do excepteur dolore enim do adipisicing eu cupidatat
      consectetur proident laborum irure est esse. Cupidatat labore dolor amet nostrud pariatur qui
      nostrud ad consequat.
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

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
