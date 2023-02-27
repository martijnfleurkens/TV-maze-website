<script setup>
import TheLayoutDefault from '../layouts/DefaultLayout.vue'
import { useShowStore } from '../stores/ShowStore.js'
import { useRoute } from 'vue-router'
import { computed, watch, ref } from 'vue'
import ShowRating from '@/components/show/Rating.vue'
import ShowCastOverview from '@/components/show/cast/overview.vue'
import ShowCarrousel from '../components/show/Carrousel.vue'

//Get Show ID
const route = useRoute()
const showID = ref(parseInt(route.params.id))

//On route change
watch(
  () => route.params.id,
  (newID) => {
    showID.value = parseInt(newID)
  }
)

//Initialize store
const showStore = useShowStore()

//Retrieve all shows from API
showStore.fetchAll()

//Filter on show by route ID
const show = computed(() => {
  return showStore.showsLoaded == true && showID.value > 0
    ? Object.values(showStore.shows).filter((showItem) => showItem.id == showID.value)[0]
    : false
})

//Genre for recomendations
const genre = ref(null)

//Function to set genre if available
const setGenre = function () {
  if (typeof show.value?.genres != 'undefined' && show.value.genres.length > 0) {
    genre.value = show.value.genres[0]
  }
}

//If show changes, check genre again
watch(show, () => {
  setGenre()
})

//On initialize set genre
setGenre()
</script>

<template>
  <the-layout-default>
    <div v-if="show != false && show?.name" class="show-detail-wrapper">
      <img
        class="preview"
        :alt="`preview poster for ${show.name}`"
        :src="show.image.original"
        width="220"
        height="320"
      />
      <div class="detail">
        <h1 class="h3">{{ show.name }}</h1>
        <ul class="tags" v-if="show?.genres.length > 0">
          <li v-for="genre in show.genres" :key="genre">{{ genre }}</li>
        </ul>
        <show-rating :rating="show.rating.average" v-if="show?.rating?.average" />
        <div class="desc" v-html="show.summary" v-if="show?.summary"></div>
      </div>
    </div>

    <show-cast-overview :showID="showID" />

    <div class="spacer"></div>

    <show-carrousel v-if="genre != null" :filter="genre" customTitle="What else you might like" />
  </the-layout-default>
</template>

<style lang="sass" scoped>
.show-detail-wrapper
  display: flex
  gap: 40px
  padding: 50px 0

  .preview
    border-radius: $radius
    object-fit: cover

  h1
    margin: 0
    margin-bottom: 10px

  .tags
    display: flex
    gap: 20px
    padding: 0
    margin: 0
    margin-bottom: 15px

    li
      list-style: none
      padding: 0
      color: $gray4

  .star-wrapper
    margin-bottom: 15px

  .desc
    max-width: 600px
    margin: 0
    color: $gray4

.spacer
  margin-bottom: 80px

@media (max-width: $breakpoint-tablet)
  .show-detail-wrapper
    flex-direction: column
</style>
