import React from 'react'
import { Container } from './styles'

export default function Genres(props = []){
  return(
    <Container>
      {props.genres.map( genre => {
        return(
          <div id='genre-list'>
            <h4>{genre}</h4>
          </div>
        )
      })}
    </Container>
  )

  // return (
  //   <Container>
  //     <div id='genre-list'>
  //       <h4>{props.genre}</h4>
  //     </div>
  //   </Container>
  // )
}