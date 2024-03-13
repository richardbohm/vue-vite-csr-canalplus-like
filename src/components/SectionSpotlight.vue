<script setup lang="ts">
import {Showcase} from "../models.ts";
import SectionList from "./sections/SectionList.vue";

defineProps<{
  sectionSpotlight:  Showcase | undefined
}>()
</script>

<template>
  <SectionList :style="'top'" :with-ratings="false" :section-list="sectionSpotlight" v-if="sectionSpotlight" />
</template>

<style scoped>
</style>