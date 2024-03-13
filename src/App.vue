<script setup lang="ts">
  import { ref, computed } from 'vue'
  import {Root, SectionData} from "./models.ts";
  import SectionMovies from "./components/SectionMovies.vue";
  import SectionTop from "./components/SectionTop.vue";
  import SectionSpotlight from "./components/SectionSpotlight.vue";
  import {toJson, transform} from "./utils/utils.ts";
  import SectionAustria from "./components/SectionAustria.vue";
  import SectionAction from "./components/SectionAction.vue";
  import SectionCrime from "./components/SectionCrime.vue";
  import {data} from "./utils/static.ts";

  const posts = ref<Root>()

  const sectionData = computed<SectionData>(() => {
    return {
      sectionSpotlight: posts.value?.showcase[0],
      sectionMovies: posts.value?.showcase[1],
      sectionTop: posts.value?.showcase[2],
      sectionAustria: posts.value?.showcase[3],
      sectionAction: posts.value?.showcase[4],
      sectionCrime: posts.value?.showcase[5]
    }
  })

  async function getData() {
    posts.value = await fetch(data.fetchUrl).then(toJson).then(transform);
  }

  getData();

</script>

<template>
  <div class="styles__ext">
    <div theme="dark">
      <SectionSpotlight :section-spotlight="sectionData.sectionSpotlight"></SectionSpotlight>
      <SectionMovies :sectionMovies="sectionData.sectionMovies"></SectionMovies>
      <SectionTop :section-top="sectionData.sectionTop"></SectionTop>
      <SectionAustria :section-austria="sectionData.sectionAustria"></SectionAustria>
      <SectionAction :section-action="sectionData.sectionAction"></SectionAction>
      <SectionCrime :section-crime="sectionData.sectionCrime"></SectionCrime>
    </div>
  </div>
</template>

<style scoped>
</style>
