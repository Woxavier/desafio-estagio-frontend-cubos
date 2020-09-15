import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { movieImage, listMovies } from '../../api/api'
import { date } from '../../utils/settings'
import Header from '../../components/Header'
import MovieCard from '../../components/MovieCard'
import { Container } from './styles'

export default function HomePage(){

  const [movies, setMovies] = useState([])
  const [count, setCount] = useState([]);
  const [marker, setMarker] = useState(1)
  let page = 1

  const countPages = ( totalItems ) => {

    let pages = Math.ceil(totalItems/5)
    let newArrayPages = []
    for(let i = 1; i <= pages; i++){
      newArrayPages.push(i)
      
    }
    return newArrayPages  
  }

function handleMovies(){

  let input = document.getElementById("search-movies").value
    listMovies(input)
      .then(response => {
        const data = response.data.results;
        setCount(countPages(data.length))
        setMarker(page)
        setMovies(data.slice((page - 1) * 5 , page * 5)
      )})   
  }

function choicePage(number){
  page = number 
  handleMovies()
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

        {movies.map((movies)=>{          
          return(
            <Link to={`movies/${movies.id}`}>
              <MovieCard
                title={movies.title} 
                average={(movies.vote_average * 10)}
                date={date(movies.release_date)}
                description={movies.overview}
                image={movieImage(movies.poster_path)}
                genre={movies.genre_ids}
              />
            </Link>
          )  
        })}

          <div id='select-pages'>  
            {count.map((counter) =>{
              return(
                <div 
                  className={(count.indexOf(counter) + 1) === marker ? 'page-marked' : 'page-marker'}
                  onClick={()=> {choicePage(counter)}}
                  value={counter}                  
                >
                  <div className="page-marked-back">                  
                    <p>{counter}</p>
                  </div>
                </div>
            )})}
          </div>  

      </Container>
    </>
  )
}