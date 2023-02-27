//Import
import axios from 'axios'

//Prefixes
const baseUrl = 'https://api.tvmaze.com'

//Setup
const api = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

//Export
export default api
