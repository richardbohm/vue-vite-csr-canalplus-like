<script setup lang="ts">
import {Showcase, Style} from "../../models.ts";
import {ref} from "vue";
import {data} from "../../utils/static.ts";
import Rating from "../Rating.vue";

defineProps<{
  sectionList: Showcase | undefined,
  withRatings: boolean,
  style: Style
}>()

const menu = ref<HTMLElement>()
const section = ref<HTMLElement>()
const rightHidden = ref(false)
const leftHidden = ref(true)

const scrollRight = () => {
  menu.value?.scrollBy({
    left: 400,
    behavior: "smooth",
  })

  const handleRightArrowVisibility = () => {
    if ( menu.value?.scrollLeft + menu.value?.clientWidth + menu.value?.offsetLeft + 1 >= menu.value?.scrollWidth) {
      rightHidden.value = true
    }
  }

  setTimeout(handleRightArrowVisibility,400)
  leftHidden.value = false
}

const scrollLeft = () => {
  menu.value?.scrollBy({
    left: -400,
    behavior: "smooth",
  })

  rightHidden.value = false
  if (menu.value?.scrollLeft <= 400) {
    leftHidden.value = true
  }
}

</script>

<template>
  <section ref="section" class="c-section  !pt-0 !pb-20" id="" comp-title="VOD Content" v-if="sectionList">
    <div  class="flex flex-wrap relative px-2" id="slide_1076857672">
      <i  @click="scrollLeft" class="chevron-left material-icons absolute -left-5 text-[30px] top-1/2 -mt-5 bg-grey-800 text-grey-500 opacity-80 hover:opacity-100 hover:text-white transition-all cursor-pointer h-10 w-10 text-center leading-10 " :class="{ hidden: leftHidden }">keyboard_arrow_left</i>
      <i  @click="scrollRight" class="chevron-right material-icons absolute -right-5 text-[30px] top-1/2 -mt-5 bg-grey-800 text-grey-500 opacity-80 hover:opacity-100 hover:text-white transition-all cursor-pointer h-10 w-10 text-center leading-10" :class="{ hidden: rightHidden }">keyboard_arrow_right</i>

      <div ref="menu" id="hits_1076857672" class="c-section__slider pr-base c-section__columns w-full flex">

        <div class="w-full  c-section__columns-item  self-start text-start" :class="{ 'lg:w-2/12': style !== 'top', 'lg:w-6/12': style === 'top' && sectionList.imageType.toLowerCase() === data.image.type.landscape, 'lg:w-5/12': style === 'top' && sectionList.imageType.toLowerCase() === 'po'}" comp-title="{{item.title}}" v-for="(item, index) in sectionList.assets">
          <div class="px-1 h-full w-full" :class="{ relative: withRatings }">

            <div v-if="withRatings" class="absolute" style="top: 0px ; left: 8px; height: 15%; width: 20%"><Rating :rating="index+1" /></div>

            <a :href="data.image.href + item.id" class="!block">
              <img loading="lazy" class="block o-img w-full" :class="{ 'aspect-[16/9]': sectionList.imageType.toLowerCase() === data.image.type.landscape, 'aspect-[3/4]': sectionList.imageType.toLowerCase() === data.image.type.portrait}" :title="item.title" :alt="item.title" :src="item.images[0].url" width="100" height="100">
            </a>

            <div class="mb-3" v-if="(style !== 'top')">
              <p :title="item.title" class="truncate !m-0 dark:!text-white">{{ item.title }}</p>
              <span class="font-light !m-0 float-left">
                <span class="dark:!text-white font-bold">{{item.type}}</span>
              </span>
              <span class="font-light font-light truncate block pl-2"><span>{{item.params.genres[0].title}}</span></span>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>

</template>

<style scoped>

</style>