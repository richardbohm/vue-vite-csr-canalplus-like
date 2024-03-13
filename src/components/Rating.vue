<script setup lang="ts">

  defineProps<{
    rating:  number
  }>()
</script>

<template>
  <div style="background-color: #d53ea2; color: aliceblue; border-radius: 3px; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 24px">
    <div>{{rating}}</div>
  </div>
</template>

<style scoped>
</style>