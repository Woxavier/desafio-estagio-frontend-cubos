import React, { useEffect, useState } from 'react'
import { searchGenre } from '../../api/api'
import Genres from '../Genres'
import {Card} from './styles'


export default function MovieCard(props){

  const [genres, setGenres] = useState([])

  useEffect(() => {
    getGenres(props.genre);
  }, [props.genres])

  const getGenres = ( ids ) => {
    searchGenre().then(response => {
      const genresComplete = response.data.genres;
      let genresNames = [];
     ids.map(request =>
        genresComplete.map(consult =>
          consult.id === request ? genresNames.push(consult.name) : ''
        )
      );
      setGenres(genresNames)
      console.log(genresNames)
    })
  }
  
  return(
    <Card>
      <div className="image-left">
        <img src={props.image} alt=""/>
      </div>

        <header>
          <h2>{props.title}</h2>
        </header>

        <div className="date-rank-content">
          <div className='rank'>
            <h2>{props.average}%</h2>
          </div>
          <span className='date'>{props.date}</span>
        </div>

        <div className='description'>
          {props.description}
        </div>

        <Genres genres={genres}/>
    </Card>
  )
}
    
    
   