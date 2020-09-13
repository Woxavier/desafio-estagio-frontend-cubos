import axios from 'axios'

const api = axios.create({
  baseURL = 'https://api.themoviedb.org/3'
})

const api_key = 'adaa5437b364f5fe44811455714d6bbc'

export const listmovies = ( query ) => {
  return api.get(`/search/movie?api_key=${api_key}&language=pt-BR&query=${query}`)
}