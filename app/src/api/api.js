import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})

const api_key = 'adaa5437b364f5fe44811455714d6bbc'

export const listMovies = ( query ) => {
  return api.get(`/search/movie?api_key=${api_key}&language=pt-BR&query=${query}`)
}

export const movieImage = ( path ) => {
  return `https://image.tmdb.org/t/p/w500${path}`
};

export const searchGenre = () => {
  return api.get(`/genre/movie/list?api_key=${api_key}&language=pt-BR`)
};

export const infosMovie = ( id ) => {
  return api.get(`/movie/${id}?api_key=${api_key}&language=pt-BR`)
};