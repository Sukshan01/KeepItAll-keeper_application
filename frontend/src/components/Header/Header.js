import React from 'react'
import './Header.css'

import logo from './keepItAll_logo.png'

const Header = () => {

  const handleClick = () => {

    window.location.href = '/';
  }
  return (
    <div className='header'>
      <img src={logo} alt='' className='logo' onClick={handleClick} />
      KeepItAll
    </div>
  )
}

export default Header
