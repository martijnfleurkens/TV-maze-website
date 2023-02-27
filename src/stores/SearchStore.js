import { defineStore } from 'pinia'
import tvmazeService from '../services/tvmaze/index.js'

export const useSearchStore = defineStore('SearchStore', {
  state: () => ({
    query: null,
    results: null,
    active: false,
    activeTimeout: null
  }),
  getters: {},
  actions: {
    //Retrieve search shows
    fetchSearchResults() {
      //Search shows
      tvmazeService
        .fetchSearchedShows(this.query)
        .then((res) => {
          //Apply results
          this.results = res.data
        })
        .catch((error) => {
          throw error
        })
    },
    resetSearch() {
      ;(this.query = null), (this.results = null), (this.active = false)
    },
    activate() {
      clearTimeout(this.timeout)
      this.active = true
    },
    deActivate() {
      clearTimeout(this.timeout)

      //Perform function after 250ms not typed
      this.timeout = setTimeout(
        function () {
          this.active = false
        }.bind(this),
        250
      )
    }
  }
})
