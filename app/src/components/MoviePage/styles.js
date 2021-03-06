import styled from 'styled-components'
import colors from '../../utils/colors'

const Container = styled.div`
  /* display: flex; */
  width: 85%;
  margin: 40px auto;
  background: #DEDFE0;
  max-height: 500px;

  .infos-top{
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .infos-top h1{
    color: ${colors.primary};
    padding: 20px 30px;
  }

  .infos-top strong{
    font-size: 15px;
    margin-top: 10px;
    padding: 20px 30px;
  }

  .main-content{
    display: grid;
    grid-template-columns: 500px 1fr;
    grid-template-areas:
      'user main';
    display: flex;
    background: ${colors.lightgray};
  }

  .content-left{
    grid-area: user;
    padding: 0 30px;
    width: 100%;
  }

  .content-left h2{
    margin-top: 30px;
    color: ${colors.primary};
    font-size: 30px;
  }

  .content-left hr{
    border: 1px solid ${colors.secundary};
    background: ${colors.secundary};
    margin-top: 10px;
    margin-bottom: 10px; 
  }

  .infos{
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
  }

  .infos h3{
    color: ${colors.primary}
  }

  p{
    font-size: 18px;
  }

  .infos div{
    text-align: center;
  }

  footer{
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
  }

  .list-genre{
    display: flex;
  }

  .rank {
    background: ${colors.primary};
    border-radius: 50%;
    padding: 5px;
  }

  .rank div{
    border: 8px solid ${colors.secundary};
    border-radius: 50%;
  }

  .rank div p{
    color: ${colors.secundary};
    margin-top: 0;
    padding: 30px 20px;
    font-size: 30px;
  }

  .content-right{
    grid-area: main;
  }

  .content-right img{
    max-height: 500px;
  }

  @media(max-width: 800px){

    margin-bottom: 900px;
    width: 85%;

    .infos-top{
      font-size: 12px;
    }

    .main-content{
      display: grid;
      grid-template-columns: 1fr;
      grid-template-areas:
      'main'
      'user';
    }

    .content-left{
      width: 85%;
      padding: 2px;
      margin: 0 auto;
    }

    .content-left h2, p, h3{
      font-size: 15px;
      /* text-align: center; */
    }

    .infos{
      display: block
    }

    .infos div{
      margin-top: 10px
    }

    footer{
      display: block
    }

    .list-genre{
      display: block;
    }

    .rank {
      background: ${colors.primary};
      border-radius: 50%;
      padding: 5px;
      width: 110px;
      display: flex;
      margin: 30px auto;
      justify-content: center;

    }

    .rank div{
      border: 8px solid ${colors.secundary};
      border-radius: 50%;
    }

    .rank div p{
      color: ${colors.secundary};
      margin-top: 0;
      padding: 30px 20px;
      font-size: 30px;
    }

    .content-right img{
      width: 100%;
    }

  }

  @media(max-width: 350px){
    width: 90%;

    .content-left{
      width: 90%;
    }

    .content-right img{
      width: 96%;
    }
  }
`

export default Container;