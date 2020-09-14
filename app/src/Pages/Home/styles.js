import styled from 'styled-components'
import colors from '../../utils/colors'

export const Container = styled.div`
  /* max-width: 1200px; */
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
`
