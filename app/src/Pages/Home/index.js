import React from 'react'
import Header from '../../components/Header'
import MovieCard from '../../components/MovieCard'
import { Container } from './styles'

export default function HomePage(){
  return(
    <>
      <Header/>

      <Container>
        <header>
          <input type="text" placeholder='Busque um filme por nome, ano ou gênero...'/>
        </header>

        <MovieCard/>

      </Container>
    
    </>
  )
}