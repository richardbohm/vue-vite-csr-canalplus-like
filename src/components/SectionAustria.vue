<script setup lang="ts">
import {Showcase} from "../models.ts";
import SectionList from "./sections/SectionList.vue";
import SectionTitle from "./sections/SectionTitle.vue";

defineProps<{
  sectionAustria:  Showcase | undefined
}>()
</script>

<template>
  <SectionTitle :title="sectionAustria.title" v-if="sectionAustria" />
  <SectionList :style="'classic'" :with-ratings="false" :section-list="sectionAustria" v-if="sectionAustria" />
</template>

<style scoped>
</style>