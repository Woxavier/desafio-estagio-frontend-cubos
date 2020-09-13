import React from 'react'
import Container from './styles'


export default function MoviePage(){
  const poster = 'https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/3/130620180226-uau-posters-filmes-thor-ragnarok.jpg'

  return(
    <Container>
      <div className="infos-top">
        <h1>Thor: Ragnarok</h1>

        <strong>25/10/2017</strong>
      </div>

      <div className="main-content">

        <div className="content-left">
          <h2>Sinopse</h2>
          <hr/>

          <div classname='sinopse'>
            <p>
              Salve familia Salve familia Salve familia Salve familia Salve familia
              Salve familia Salve familia Salve familia Salve familia Salve familia Salve familia Salve familia Salve familia
            </p>
          </div>

          <h2>Informações</h2>
          <hr/>

          <div className="infos">
            <div>
              <h3>Situação</h3>
              <p>Lançado</p>
            </div>

            <div>
              <h3>Idioma</h3>
              <p>Inglês</p>
            </div>

            <div>
              <h3>Duração</h3>
              <p>2h11min</p>
            </div>

            <div>
              <h3>Orçamento</h3>
              <p>$180.000.000,00</p>
            </div>

            <div>
              <h3>Receita</h3>
              <p>$853.977.126,00</p>
            </div>

            <div>
              <h3>Lucro</h3>
              <p>$673.977.126,00</p>
            </div>
          </div>

          <footer>       
            <div id='genre'>
              <div id='genre-list'>
                <h4>Comédia</h4>
              </div>

              <div id='genre-list'>
                <h4>Ficção cintífica</h4>
              </div>
            </div>

            <div className='rank'>
              <div>
                <p>75%</p>
              </div>
            </div>
          </footer>
        </div>


        <div className="content-right">
          <img src={poster} alt=""/>
        </div>
      </div>
    </Container>
  )
}
