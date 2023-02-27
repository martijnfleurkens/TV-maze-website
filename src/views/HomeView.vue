<script setup>
import TheLayoutDefault from '../layouts/DefaultLayout.vue'
import ShowCarrousel from '../components/show/Carrousel.vue'
import { useShowStore } from '../stores/ShowStore.js'
import { ref, onMounted, onUnmounted } from 'vue'

const showStore = useShowStore()

//Fetch all shows
showStore.fetchAll()

//List of all the genres that will be displayed
const genreList = [
  'Action',
  'Romance',
  'Comedy',
  'Science-Fiction',
  'Thriller',
  'Crime',
  'Drama',
  'Horror',
  'Adventure',
  'Mystery',
  'Supernatural',
  'Fantasy',
  'Family'
]

//Function to get more genres
const getGenres = (loadedGenres = [], amount = 3) => {
  var newGenres = []

  //Get current amount of genres
  var current = loadedGenres.length

  //The amount of genres we want to grow to
  var wanted = current + amount

  //If wanted genre is more then the full length of the list, set wanted as the full length
  if (wanted > genreList.length) {
    wanted = genreList.length
  }

  //Loop through wanted till current is the same
  for (current; current < wanted; current++) {
    //Get new genre
    var genre = genreList[current]

    //Add to array
    newGenres.push(genre)
  }

  //Return array
  return newGenres
}

//Genres that are loaded on the page
const loadedGenres = ref(getGenres())

//Function to load more genres
const loadMoreGenres = () => {
  var newGenres = getGenres(loadedGenres.value)
  loadedGenres.value.push(...newGenres)
}

//Scroll component
const scrollComponent = ref(null)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

//On scroll, if scrollComponent is near bottom of the viewport load more genres
const handleScroll = (e) => {
  let element = scrollComponent.value
  if (element.getBoundingClientRect().bottom < window.innerHeight + 200) {
    loadMoreGenres()
  }
}
</script>

<template>
  <the-layout-default>
    <div ref="scrollComponent">
      <div class="welcome-wrapper">
        <h1>Welcome to StreamVision</h1>
        <p class="sub-title">Your Gateway to Find Unlimited Entertainment!</p>
      </div>

      <show-carrousel v-for="genre in loadedGenres" :key="genre" :filter="genre" />
    </div>
  </the-layout-default>
</template>

<style lang="sass" scoped>
h1
  margin-bottom: 0
.sub-title
  font-size: $p-m
  margin-top: 0
  color: $gray4
  margin-bottom: 60px

.welcome-wrapper
  padding: 50px
  border-radius: $radius
  background: $background-dark
  margin: 30px 0 50px

@media (max-width: $breakpoint-mobile)

  .sub-title
    margin-bottom: 20px
  .welcome-wrapper
    padding: 20px
    margin: 10px 0 20px
</style>
