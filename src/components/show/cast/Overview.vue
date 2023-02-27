<script setup>
import { ref, watch } from 'vue'
import tvmazeService from '@/services/tvmaze/index.js'
import ShowCastSingle from './Single.vue'

//Define props
const props = defineProps({
  showID: {
    type: Number,
    required: true
  }
})

//Retrieve Show main information from Store
let cast = ref(false)

//Fetch cast from API
const fetchData = function (ID) {
  tvmazeService
    .fetchCastByShowID(ID)
    .then((res) => {
      cast.value = res.data
    })
    .catch((error) => {
      throw error
    })
}

//Execute on inital load
fetchData(props.showID)

//Watch changes on props, on change reload
watch(
  () => props.showID,
  (newID) => {
    cast.value = false
    fetchData(newID)
  }
)
</script>

<template>
  <div class="cast-wrapper">
    <h2 class="h4">Cast</h2>
    <template v-if="cast != false && cast.length > 0">
      <div class="cast-overview">
        <show-cast-single v-for="member in cast" :key="member.person.id" :member="member" />
      </div>
    </template>
    <template v-else-if="cast != false && cast.length < 1">
      <p>No cast available</p>
    </template>
    <template v-else>
      <p>Loading cast members...</p>
    </template>
  </div>
</template>

<style lang="sass" scoped>
.cast-overview
  display: flex
  max-width: 100%
  gap: 20px
  flex-wrap: wrap

  @media (max-width: $breakpoint-tablet)
    flex-wrap: nowrap
    overflow: scroll
    width: 100%
    padding-right: 30px
    padding-bottom: 5px
    box-sizing: border-box

    /* width */
    &::-webkit-scrollbar
      width: 100%
      height: 5px
      border-radius: $radius

    /* Track */
    &::-webkit-scrollbar-track
      background: $background-light
      height: 5px

    /* Handle */
    &::-webkit-scrollbar-thumb
      background: $gray2
      border-radius: $radius

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover
      background: $gray3
</style>
