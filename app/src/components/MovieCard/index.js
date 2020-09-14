import React from 'react'
import {Card} from './styles'


export default function MovieCard(props){
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

        <div id='genre'>
          <div id='genre-list'>
            <h4>Comédia</h4>
          </div>

          <div id='genre-list'>
            <h4>Ficção cintífica</h4>
          </div>
        </div>
    </Card>
  )
}
    
    
   