import { defineStore } from 'pinia'
import tvmazeService from '../services/tvmaze/index.js'

export const useShowStore = defineStore('ShowStore', {
  state: () => ({
    shows: null,
    showsLoaded: false
  }),
  getters: {},
  actions: {
    //Retrieve all shows
    fetchAll() {
      this.showsLoaded = false
      if (this.shows == null) {
        tvmazeService
          .fetchAllShows()
          .then((res) => {
            this.shows = res.data
            this.showsLoaded = true
          })
          .catch((error) => {
            throw error
          })
      } else {
        this.showsLoaded = true
      }
    },
    //Retrieve show by specific genre
    byGenre(genre) {
      //Check if shows are available
      if (this.shows !== null) {
        //Filter show by genre
        const filteredShows = Object.values(this.shows).filter((show) =>
          show.genres.includes(genre)
        )

        //Return
        return filteredShows
      }
    },
    //Retrieve single show by show id
    byID(id) {
      //Check if shows are available
      if (this.shows !== null) {
        //Filter show by ID
        const filteredShows = Object.values(this.shows).filter((show) => (show.id = id))

        //If show found return show
        if (filteredShows.length > 0) {
          return filteredShows[0]
        }
      }
      return false
    }
  }
})
