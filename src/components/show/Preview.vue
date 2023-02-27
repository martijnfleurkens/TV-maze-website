<script setup>
import { ref } from 'vue'
import showRating from './Rating.vue'

//Define props
const props = defineProps({
  showData: {
    type: Object,
    required: true
  }
})

const show = ref(props.showData)
</script>

<template>
  <router-link :to="`/show/` + show.id" class="show-preview">
    <img
      v-if="show?.image?.medium"
      :alt="`preview poster for ${show.name}`"
      :src="show.image.medium"
      loading="lazy"
      width="225"
      height="280"
      class="image-thumbnail"
    />
    <div v-else class="image-thumbnail"></div>

    <h3>{{ show.name }}</h3>
    <show-rating :rating="show.rating.average" v-if="show?.rating?.average" />
  </router-link>
</template>

<style lang="sass" scoped>
a.show-preview
  padding: 15px
  box-sizing: border-box
  background: $background-light
  border-radius: $radius
  text-decoration: none
  color: $text
  display: block
  transition: 0.2s all ease
  user-select: none
  min-height: 385px

  *
    transition: 0.2s all ease

  .image-thumbnail
    background: $background
    object-fit: cover
    object-position: center
    border-radius: $radius
    height: 250px
    width: 100%

  h3
    font-size: $p
    min-height: 35px

  &:hover
    background: $background-dark

    .image-thumbnail
      transition: 0.2s all ease
      transform: scale(1.05)
</style>
