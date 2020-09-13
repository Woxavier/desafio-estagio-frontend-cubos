import styled from 'styled-components';
import colors from '../../utils/colors'

const HeaderContainer = styled.div`
  margin: auto;
  justify-content: center;
  text-align: center;
  background: ${colors.primary};
  height: 80px;

  p{
    color: ${colors.secundary};
    font-size: 40px;
    padding-top: 10px;
  }
`

export default HeaderContainer