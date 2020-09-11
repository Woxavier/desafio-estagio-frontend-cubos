import styled from 'styled-components'
import colors from '../utils/colors'

export const Header = styled.div`
  margin: auto;
  justify-content: center;
  text-align: center;
  background: ${colors.primary};
  height: 80px;

  h2{
    color: ${colors.secundary};
    font-size: 30px;
    padding-top: 20px;
  }
`

export const Container = styled.div`
  /* max-width: 1200px; */
  margin: 30px auto;
  text-align: center;
  justify-content: center;

  input{
    width: 80%;
    border: none;
    background: ${colors.lightgray};
    padding: 20px;
    border-radius: 20px;
  }

  input::-webkit-input-placeholder{
    color: ${colors.primary}
  }  
`

export const MovieCard = styled.div`
  background: ${colors.lightgray};
  height: 300px;
  width: 80%;

  margin: 20px auto;

  .image-left img{
    height: 300px;
    float: left;
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
    margin-top: -40px;
    margin-left: 20px;
  }
  
  .rank h2{
    padding: 20px 10px;
    color: ${colors.secundary};
    /* position: absolute; */
  }

  .date{
    margin-left: 20px;
    margin-top: 5px;
    font-weight: bold;
  }
`