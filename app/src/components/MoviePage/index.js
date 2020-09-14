import React from 'react'
import Container from './styles'


export default function MoviePage(props){

  return(
    <Container>
      <div className="infos-top">
        <h1>{props.title}</h1>

        <strong>{props.date}</strong>
      </div>

      <div className="main-content">

        <div className="content-left">
          <h2>Sinopse</h2>
          <hr/>

          <div classname='sinopse'>
            <p>
              {props.overview}
            </p>
          </div>

          <h2>Informações</h2>
          <hr/>

          <div className="infos">
            <div>
              <h3>Situação</h3>
              <p>{props.status}</p>
            </div>

            <div>
              <h3>Idioma</h3>
              <p>{props.language}</p>
            </div>

            <div>
              <h3>Duração</h3>
              <p>{props.time}</p>
            </div>

            <div>
              <h3>Orçamento</h3>
              <p>${props.avenue},00</p>
            </div>

            <div>
              <h3>Receita</h3>
              <p>${props.revenue},00</p>
            </div>

            <div>
              <h3>Lucro</h3>
              <p>${props.profit},00</p>
            </div>
          </div>

          <footer>       
            <div id='genre'>
              <div id='genre-list'>
                <h4>{props.children}</h4>
              </div>                
            </div>

            <div className='rank'>
              <div>
                <p>{props.average}%</p>
              </div>
            </div>
          </footer>
        </div>


        <div className="content-right">
          <img src={props.image} alt=""/>
        </div>
      </div>
    </Container>
  )
}
