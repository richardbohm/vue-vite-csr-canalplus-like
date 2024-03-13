<script setup lang="ts">
import {Showcase} from "../models.ts";
import SectionList from "./sections/SectionList.vue";
import SectionTitle from "./sections/SectionTitle.vue";

defineProps<{
  sectionCrime:  Showcase | undefined
}>()
</script>

<template>
  <SectionTitle :title="sectionCrime.title" v-if="sectionCrime" />
  <SectionList :style="'classic'" :with-ratings="false" :section-list="sectionCrime" v-if="sectionCrime" />
</template>

<style scoped>

</style>