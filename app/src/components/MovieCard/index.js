import React from 'react'
import {Card} from './styles'


export default function MovieCard(){
  return(
    <Card>
      <div className="image-left">
        <img src="https://http2.mlstatic.com/poster-grande-imp-offset-do-filme-mulher-maravilha-vr10-D_NQ_NP_811040-MLB25920051556_082017-F.jpg" alt=""/>
      </div>

        <header>
          <h2>Mulher Maravilha</h2>
        </header>

        <div className="date-rank-content">
          <div className='rank'>
            <h2>75%</h2>
          </div>
          <span className='date'>11/10/2020</span>
        </div>

        <div className='description'>
          Salve familia na situação das coisas Salve familia na situação das coisas Salve familia na situação das coisas
          Salve familia na situação das coisas Salve familia na situação das coisas Salve familia na situação das coisas
          Salve familia na situação das coisas Salve familia na situação das coisas Salve familia na situação das coisas
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
    
    
   