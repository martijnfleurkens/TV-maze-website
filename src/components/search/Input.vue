<script setup>
import { useSearchStore } from '@/stores/SearchStore.js'
import { ref } from 'vue'
import UniqueID from '@/features/UniqueID'

//Initialize store
const searchStore = useSearchStore()

//Search function
const timeout = ref(null)
const search = function ($event) {
  searchStore.query = $event.target.value

  // clear timeout variable
  clearTimeout(timeout.value)

  //If query is empty reset
  if (searchStore.query == '') {
    searchStore.resetSearch()
  }

  //Perform function after 250ms not typed
  timeout.value = setTimeout(function () {
    searchStore.fetchSearchResults()
  }, 250)
}

//Create unique ID
const uuid = UniqueID().getID()
</script>

<template>
  <div class="search-wrapper">
    <label class="icon-search" :for="uuid"></label>
    <input
      type="search"
      placeholder="Search..."
      :id="uuid"
      @focus="searchStore.activate()"
      @blur="searchStore.deActivate()"
      @input="search($event)"
      autocomplete="off"
    />
  </div>
</template>

<style lang="sass" scoped>
.search-wrapper
  margin: 0 10px

  input[type='search']
    background: transparent
    border-radius: $radius
    border: 2px solid $text
    color: $text
    padding: 14px 70px 14px 42px
    font-size: $p
    width: 100%
    max-width: 300px
    box-sizing: border-box

  .icon-search
    position: absolute
    font-size: 19px
    padding: 14px 14px
    color: $text
    cursor: pointer
</style>
