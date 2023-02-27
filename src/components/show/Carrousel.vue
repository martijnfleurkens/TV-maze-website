<script setup>
import { ref } from 'vue'
import { useShowStore } from '@/stores/ShowStore.js'
import showPreview from './Preview.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const showStore = useShowStore()

//Define props
const props = defineProps({
  filter: {
    type: String,
    required: true
  },
  customTitle: {
    type: String,
    default: null
  }
})

const filter = ref(props.filter)

//Set filtername as title except if customTitle is set
const title = ref(filter.value)
if (props.customTitle != null) {
  title.value = props.customTitle
}
</script>

<template>
  <div class="carrousel-wrapper">
    <h2 class="h4">{{ title }}</h2>

    <div class="content" v-if="showStore?.showsLoaded">
      <span class="swiper">TEST</span>
      <swiper
        :slides-per-view="6"
        :space-between="20"
        :loop="true"
        :breakpoints="{
          1450: {
            slidesPerView: 6.3
          },
          1200: {
            slidesPerView: 5.3
          },
          1000: {
            slidesPerView: 4.3
          },
          740: {
            slidesPerView: 3.3
          },
          480: {
            slidesPerView: 2.3
          },
          1: {
            slidesPerView: 1.3,
            spaceBetween: 14
          }
        }"
      >
        <swiper-slide v-for="show in showStore.byGenre(props.filter)" :key="show.id">
          <show-preview :showData="show" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="fallback" v-else>
      <!-- TO Do: Insert skeleton -->
      ...Loading shows
    </div>
  </div>
</template>

<style lang=sass scoped>
.carrousel-wrapper
  margin-bottom: 60px

.content
  position: relative

  &:after
    content: " "
    width: 10%
    height: 100%
    position: absolute
    right: 0
    top: 0
    z-index: 1
    background: rgba(0,0,0,0)
    background: linear-gradient(90deg, rgba(2,0,36,0) 0%, rgba(14,17,26,1) 100%)
</style>
