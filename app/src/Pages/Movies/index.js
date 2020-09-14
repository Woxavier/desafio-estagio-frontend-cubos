import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import MoviePage from '../../components/MoviePage'
import Container from './styles'
import {infosMovie, movieImage} from '../../api/api'

export default function Movies(props){

  const [movieInfos, setMovieInfos] = useState();

  useEffect(()=>{
    infosMovie(props.match.params.id)
      .then(response => {
        let data = response.data
        setMovieInfos(data)
        console.log(movieInfos)
      })
  }, [movieInfos])


  return(
    <Container>
      <Header/>

      <MoviePage
        title={movieInfos?.original_title}
        date={movieInfos?.release_date}
        overview={movieInfos?.overview}
        status={movieInfos?.status}
        language={movieInfos?.original_language}
        time={movieInfos?.runtime}
        avenue={movieInfos?.budget}
        revenue={movieInfos?.revenue}
        profit={(movieInfos?.revenue - movieInfos?.budget)}
        genre={movieInfos?.genres}
        average={(movieInfos?.vote_average) * 10}
        image={movieImage(movieInfos?.poster_path)}
      />
    </Container>
  )
}