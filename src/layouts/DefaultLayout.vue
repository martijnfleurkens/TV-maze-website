<script setup>
import TheStructuralHeader from '../components/structural/Header.vue'
import TheSearchResults from '@/components/search/Results.vue'
import { useSearchStore } from '@/stores/SearchStore.js'

const searchStore = useSearchStore()
</script>

<template>
  <div class="default-layout">
    <the-structural-header />

    <main class="container">
      <template v-if="searchStore.active == true && searchStore.query != null">
        <the-search-results />
      </template>
      <template v-else>
        <slot />
      </template>
    </main>
  </div>
</template>

<style lang="sass" scoped>
</style>
