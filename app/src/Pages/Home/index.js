import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { movieImage, listMovies } from '../../api/api'
// import Genres from '../../components/Genres'
import Header from '../../components/Header'
import MovieCard from '../../components/MovieCard'
import { Container } from './styles'

export default function HomePage(){

  const [movies, setMovies] = useState([])

  function handleMovies(){

    let input = document.getElementById("search-movies").value
    listMovies(input)
      .then(response => {
        const data = response.data.results;
        // console.log(data.genre_ids)
        setMovies(data)
      })    
  }
  

  return(
    <>
      <Header/>

      <Container>
        <header>
          <input
           type="text" 
           placeholder='Busque um filme por nome, ano ou gênero...'
           id='search-movies'
           onChange={() => handleMovies()}
          />
        </header>

        {/* <h1>{error}</h1> */}

        {movies.map((movies, index)=>{          
          return(
            <Link to={`movies/${movies.id}`}>
              <MovieCard
                title={movies.title} 
                average={(movies.vote_average * 10)}
                date={movies.release_date}
                description={movies.overview}
                image={movieImage(movies.poster_path)}
                genre={movies.genre_ids}
              />
            </Link>
          )  
        })}

      </Container>
    
    </>
  )
}