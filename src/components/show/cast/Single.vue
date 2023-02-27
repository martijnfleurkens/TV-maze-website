<script setup>
import { ref } from 'vue'
import thumbnailImage from '@/assets/img/unkown-character.webp'

//Define props
const props = defineProps({
  member: {
    type: Object,
    required: true
  }
})

const character = ref(props.member.character)

//Set thumbnail
let thumbnail = thumbnailImage
if (typeof character.value?.image?.medium != 'undefined') {
  thumbnail = character.value.image.medium
}
</script>

<template>
  <figure>
    <img
      :src="thumbnail"
      :alt="`Picture of character` + character.name"
      width="120"
      height="120"
      loading="lazy"
    />
    <figcaption>
      {{ character.name }}
    </figcaption>
  </figure>
</template>

<style lang="sass" scoped>
figure
  margin: 0
  width: 120px

  img
    border-radius: $radius
    object-fit: cover

  figcaption
    max-width: 100%
    text-align: center
    color: $gray4
</style>
