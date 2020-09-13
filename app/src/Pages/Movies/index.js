import React from 'react'
import Header from '../../components/Header'
import MoviePage from '../../components/MoviePage'
import Container from './styles'

export default function Movies(){
  return(
    <Container>
      <Header/>

      <MoviePage/>
    </Container>
  )
}