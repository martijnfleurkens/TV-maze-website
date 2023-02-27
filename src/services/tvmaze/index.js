import axios from './setup.js'

const fetchAllShows = async () => {
  return axios.get('/shows')
}

const fetchShowByID = async (showID) => {
  return axios.get('/shows/' + showID)
}

const fetchCastByShowID = async (showID) => {
  return axios.get(`/shows/${showID}/cast`)
}

const fetchSearchedShows = async (query) => {
  return axios.get('/search/shows', { params: { q: ':' + query } })
}

export default {
  fetchAllShows,
  fetchShowByID,
  fetchCastByShowID,
  fetchSearchedShows
}
