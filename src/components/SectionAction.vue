<script setup lang="ts">
import {Showcase} from "../models.ts";
import SectionList from "./sections/SectionList.vue";
import SectionTitle from "./sections/SectionTitle.vue";

defineProps<{
  sectionAction:  Showcase | undefined
}>()
</script>

<template>
  <SectionTitle :title="sectionAction.title" v-if="sectionAction" />
  <SectionList :style="'classic'" :with-ratings="false" :section-list="sectionAction" v-if="sectionAction" />
</template>

<style scoped>
</style>