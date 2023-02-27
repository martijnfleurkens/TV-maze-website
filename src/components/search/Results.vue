<script setup>
import { useSearchStore } from '@/stores/SearchStore.js'
import ShowPreview from '@/components/show/Preview.vue'

const searchStore = useSearchStore()
</script>

<template>
  <div>
    <div v-if="searchStore.results" class="results-wrapper">
      <h1>
        Results for: <u>{{ searchStore.query }}</u>
      </h1>
      <div class="section">
        <div class="fc5" v-for="item in searchStore.results" :key="item.show.id">
          <show-preview :showData="item.show" @click="searchStore.resetSearch()" />
        </div>
      </div>
    </div>
    <div v-else><h1>Loading...</h1></div>
  </div>
</template>

<style lang="sass" scoped>
.results-wrapper
  margin-bottom: 80px
</style>
