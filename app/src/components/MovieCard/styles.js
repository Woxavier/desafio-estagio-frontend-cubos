import styled from 'styled-components'
import colors from '../../utils/colors'

export const Card = styled.div`
  background: ${colors.lightgray};
  min-height: 350px;
  width: 80%;
  margin: 20px auto;

  .image-left img{
    height: 350px;
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

  .description{
    margin-left: 20px;
    text-align: left;
    margin-left: 250px;
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
`
