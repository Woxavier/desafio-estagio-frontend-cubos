import styled from 'styled-components'
import colors from '../../utils/colors'

export const Container = styled.div`
  margin: 30px auto;
  text-align: center;

  input{
    width: 80%;
    border: none;
    background: ${colors.lightgray};
    padding: 20px;
    border-radius: 20px;
  }

  a{
    text-decoration: none;
    color: black;
  }

  input::-webkit-input-placeholder{
    color: ${colors.primary}
  }

  #select-pages{
    display: flex;
    margin: 50 auto;
    justify-content: center;
  }

  .page-marker{
    margin: 0 30px;
  }  

  .page-marker p{
    color: ${colors.primary};
    font-size: 30px;
    padding: 5px 15px;
    border-radius: 50%;
    cursor: pointer;
  }

  .page-marked{
    margin: 0 30px;
    background: ${colors.primary};
    border-radius: 50%;
    padding: 5px;
  }  

  .page-marked p{
    color: ${colors.secundary};
    font-size: 30px;
    padding: 5px 15px;
    border-radius: 50%;
    cursor: pointer;
  }

  .page-marker .page-marked-back{
    border: none;
  }

  .page-marked .page-marked-back{
    border: 5px solid ${colors.secundary};
    border-radius: 50%;
  }

  @media(max-width: 800px){
    .page-marker{
      margin: 0 5px;
    }
  }
`
