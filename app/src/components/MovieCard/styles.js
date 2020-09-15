import styled from 'styled-components'
import colors from '../../utils/colors'

export const Card = styled.div`
  background: ${colors.lightgray};
  min-height: 350px;
  width: 80%;
  margin: 20px auto;
  display: grid;
  grid-template-columns: 350px 1fr;
  grid-template-areas:
    'poster infos';
  display: flex;

  .image-left{
    grid-area: poster;
  }

  .image-left img{
    height: 450px;
  }

  .content-right{
    grid-area: infos;
    width: 100%;
  }

  header{
    display: flex;
    background: ${colors.primary};
    height: 50px;
    padding-top: 20px;
  }

  header h2{
    color: ${colors.secundary};
    margin-left: 120px;
    margin-top: 10px;
    font-size: 30px;
  }

  .date-rank-content{
    display: flex;
  }

  .rank{
    text-align: left;
    display: flex;
    background: ${colors.primary};
    border-radius: 50%;
    border: 5px solid ${colors.secundary};
  }
  
  .rank p{
    padding: 20px 10px;
    color: ${colors.secundary};
    font-size: 22px;
  }

  .back-rank{
    margin-top: -40px;
    margin-left: 20px;
    border-radius: 50%;
    background-color: ${colors.primary};
    padding: 3px;
  }

  .date{
    margin-left: 20px;
    margin-top: 5px;
    font-weight: bold;
  }

  .description{
    margin-left: 20px;
    text-align: left;
    padding: 0 10px;
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
  }

  #genre{
    display: flex;
    margin-left: 250px;
    padding: 0 10px;
    margin-top: 50px;
  }

  #genre-list{
    background: white;
    color: ${colors.primary};
    border: ${colors.secundary};
    padding: 10px;
    height: 20px;
    margin-left: 20px;
    border-radius: 10px;
    border: solid 1px ${colors.primary}
  }
  
  @media(max-width: 800px){
    display: grid;
    grid-template-columns: 100%;
    grid-template-areas:
    'poster'
    'infos';
    display: block;
    width: 90%;

    header{
      display: block;
      background: ${colors.primary};
      margin-top: -15px;
      padding-top: 0;
    }

    header h2{
      margin-left: 0px;
    }

    .back-rank{
      margin-top: 10px;
      border-radius: 50%;
      background-color: ${colors.primary};
      padding: 3px;
    }

    .description{
      margin-left: 20px;
      margin-top: 20px;
      font-size: 15px;
      font-weight: bold;
    }

    .image-left img{
      width: 100%;
      margin-bottom: 0;
    }

    #genre-list{
      background: white;
      color: ${colors.primary};
      border: ${colors.secundary};
      padding: 3px;
      margin-right: 0px;
      border-radius: 5px;
      border: solid 1px ${colors.primary};  
      display: block; 
      height: 13px;
      margin-bottom: 20px;
    }

    #genre-list h4{
      font-size: 12px;
      margin-top: 0;
    }    

  }
`
