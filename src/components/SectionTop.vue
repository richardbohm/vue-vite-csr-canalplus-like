<script setup lang="ts">
import {Showcase} from "../models.ts";
import SectionTitle from "./sections/SectionTitle.vue";
import SectionList from "./sections/SectionList.vue";

defineProps<{
  sectionTop:  Showcase | undefined
}>()

</script>

<template>
  <SectionTitle :title="sectionTop.title" v-if="sectionTop" />
  <SectionList :style="'classic'" :with-ratings="true" :section-list="sectionTop" sectionTop/>
</template>

<style scoped>
</style>