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
    /* padding: 20px; */
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
    display: flex;
    justify-content: space-between;
    background: ${colors.lightgray};
  }

  img{
    height: 500px;
  }

  .content-left{
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

  #genre{
    display: flex;
    text-align: left;
    /* margin-left: 250px; */
    padding: 0 10px;
    margin-top: 20px;
  }

  #genre-list{
    background: white;
    color: ${colors.primary};
    border: ${colors.secundary};
    padding: 5px;
    height: 15px;
    margin-right: 20px;
    border-radius: 10px;
    border: solid 1px ${colors.primary}
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
`

export default Container;