import styled from 'styled-components'
import colors from '../../utils/colors'

export const Container = styled.div`
    
  display: flex;
  padding: 0 10px;
  margin-top: 50px;

  #genre-list{
    background: white;
    color: ${colors.primary};
    border: ${colors.secundary};
    padding: 10px;
    height: 20px;
    margin-right: 20px;
    border-radius: 10px;
    border: solid 1px ${colors.primary};
    
  }

  @media(max-width: 800px){
    display: flex;
    margin-top: 40px;
    max-width: 300px;
    
    #genre-list{
      background: white;
      color: ${colors.primary};
      border: ${colors.secundary};
      padding: 5px;
      height: 10px;
      margin-right: 10px;
      border-radius: 5px;
      border: solid 1px ${colors.primary};    
    }

    #genre-list h4{
      margin-top: -5px;
    }
    
  }
` 