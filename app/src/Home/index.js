import React from 'react'
import { Header, Container, MovieCard } from './styles'

export default function HomePage(){
  return(
    <>
      <Header>
        <h2>Movies</h2>
      </Header>

      <Container>
        <header>
          <input type="text" placeholder='Busque um filme por nome, ano ou gênero...'/>
        </header>


        <MovieCard>
          <div className="image-left">
            <img src="https://http2.mlstatic.com/poster-grande-imp-offset-do-filme-mulher-maravilha-vr10-D_NQ_NP_811040-MLB25920051556_082017-F.jpg" alt=""/>
          </div>

          <div className='content-right'>
            <header>
              <h2>Mulher Maravilha</h2>
            </header>

            <div className="date-rank-content">
              <div className='rank'>
                <h2>75%</h2>
              </div>
              <span className='date'>11/10/2020</span>
            </div>
          </div>
        </MovieCard>  
      </Container>
    
    </>
  )
}