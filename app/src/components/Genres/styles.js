import styled from 'styled-components'
import colors from '../../utils/colors'

export const Container = styled.div`
    
  display: flex;
  /* margin-left: 250px; */
  padding: 0 10px;
  margin-top: 50px;
  justify-content: none;  

  #genre-list{
    background: white;
    color: ${colors.primary};
    border: ${colors.secundary};
    padding: 10px;
    height: 20px;
    margin-left: 20px;
    border-radius: 10px;
    border: solid 1px ${colors.primary};
    
  }
` 