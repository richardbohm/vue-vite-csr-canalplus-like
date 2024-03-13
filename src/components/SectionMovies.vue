<script setup lang="ts">
  import {Showcase} from "../models.ts";
  import SectionTitle from "./sections/SectionTitle.vue";
  import SectionList from "./sections/SectionList.vue";

  defineProps<{
    sectionMovies:  Showcase | undefined
  }>()

</script>

<template>
  <SectionTitle :title="sectionMovies.title" v-if="sectionMovies" />
  <SectionList :style="'classic'" :with-ratings="false" :section-list="sectionMovies" v-if="sectionMovies" />
</template>

<style scoped>
</style>