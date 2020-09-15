import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import MoviePage from '../../components/MoviePage'
import Container from './styles'
import {infosMovie, movieImage} from '../../api/api'
import Genres from '../../components/Genres'
import api_key from '../../api/api'
import { date, languages, statusMovie } from '../../utils/settings'
import Axios from 'axios'

export default function Movies(props){


  const [movieInfos, setMovieInfos] = useState([]);
  const [genresMovies, setGenreMovies] = useState([]);
  const [trailer, setTrailer] = useState()  
  
  function searchTrailer(id){
    return Axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}&language=pt-br`)
  }

  useEffect(()=>{
    infosMovie(props.match.params.id)
      .then(response => {
        const data = response.data
        setMovieInfos(data)
        setGenreMovies(listMovies(data.genres))
        searchTrailer(props.match.params.id).then(response => {
          if(response.data.results[0]){
            setTrailer(response.data.results[0].key)
          }  
        })
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
        date={date(movieInfos?.release_date)}
        overview={movieInfos?.overview}
        status={statusMovie(movieInfos?.status)}
        language={languages(movieInfos?.original_language)}
        time={`${Math.floor(movieInfos?.runtime / 60)}h${movieInfos?.runtime % 60}min`}
        avenue={Number(movieInfos?.budget).toLocaleString('pt-br')}
        revenue={Number(movieInfos?.revenue).toLocaleString('pt-br')}
        profit={Number(movieInfos?.revenue - movieInfos?.budget).toLocaleString('pt-br')}
        average={Number((movieInfos?.vote_average) * 10).toLocaleString('pt-br')}
        image={movieImage(movieInfos?.poster_path)}
      >
        
        <Genres genres={genresMovies}/>
      </MoviePage>

      <div className='trailer-container'>
        {trailer ? 
        <iframe key={trailer} id="ytplayer" type="text/html" width="100%" height="700px"
        src={`https://www.youtube.com/embed/${trailer}`}
        frameborder="0"/>  
        : 
        <></>}
      </div>  
    </Container>
  )
}