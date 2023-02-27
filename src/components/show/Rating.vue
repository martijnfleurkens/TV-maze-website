<script setup>
//Define props
const props = defineProps({
  rating: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="star-wrapper">
    <i class="icon-star"></i>
    <span>{{ props.rating }}</span>
  </div>
</template>

<style lang="sass" scoped>
.star-wrapper
  padding: 5px 8px
  border: 1px solid $rating
  background: $rating-background
  border-radius: $radius-s
  display: inline-block

  .icon-star
    color: $rating
    font-size: $p-s

  span
    font-weight: bold
    font-size: $p-s
    margin-left: 3px
</style>
