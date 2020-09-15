import React from 'react'
import { Link } from 'react-router-dom'
import HeaderContainer from './style'

export default function Header(){
  return (
    <HeaderContainer>
      <Link to='/'>
        <p>Movies</p>
      </Link>
    </HeaderContainer>
  )
}