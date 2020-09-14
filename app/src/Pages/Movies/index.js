import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import MoviePage from '../../components/MoviePage'
import Container from './styles'
import {infosMovie, movieImage} from '../../api/api'
import Genres from '../../components/Genres'
import { languages } from '../../api/languages'


export default function Movies(props){

  const [movieInfos, setMovieInfos] = useState([]);
  const [genresMovies, setGenreMovies] = useState([])

  useEffect(()=>{
    infosMovie(props.match.params.id)
      .then(response => {
        let data = response.data
        setMovieInfos(data)
        setGenreMovies(listMovies(data.genres))
        // console.log(movieInfos?.genres)
        console.log(genresMovies)
      })
  }, [movieInfos])

  const listMovies = ( genre ) => {
    let genresName = []
    genre.map(genre =>{
      genresName.push(genre.name)
    })

    return genresName
  }


  return(
    <Container>
      <Header/>

      <MoviePage
        title={movieInfos?.original_title}
        date={movieInfos?.release_date}
        overview={movieInfos?.overview}
        status={movieInfos?.status}
        language={languages(movieInfos?.original_language)}
        time={movieInfos?.runtime}
        avenue={movieInfos?.budget}
        revenue={movieInfos?.revenue}
        profit={(movieInfos?.revenue - movieInfos?.budget)}
        average={(movieInfos?.vote_average) * 10}
        image={movieImage(movieInfos?.poster_path)}
      >
        
        {genresMovies.map( genre => {
          return <Genres genre={genre}/>
        })}
      </MoviePage>
    </Container>
  )
}