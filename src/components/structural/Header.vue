<script setup>
import TheSearchInput from '@/components/search/input.vue'
</script>

<template>
  <header>
    <div class="container">
      <router-link to="/" class="logo" data-link-type="nav" data-link-name="StreamVision home logo"
        >S<span>TREAM</span>V<span>ISION</span></router-link
      >

      <div class="search">
        <the-search-input />
      </div>
    </div>
  </header>
</template>

<style lang="sass" scoped>
.container
  padding-top: 40px
  padding-bottom: 40px
  display: flex
  justify-content: center
  align-items: center

  .logo
    font-weight: bold
    color: $text
    text-decoration: none
    font-size: $p-l

    span
      font-weight: normal

  .search
    display: inline-block
    margin: auto

  @media (max-width: $breakpoint-mobile)
    flex-direction: column
    gap: 20px
    padding: 20px 0
</style>
