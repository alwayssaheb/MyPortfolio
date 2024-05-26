import React from 'react'
import './css/Header.css';

export const Header = () => {
  return (
    <header>
      <div className='logo'> My logo</div>
        <nav>
            <ul id='items'>
                <li><a href='#about'>About</a></li>
                <li><a href='#contact'>Contact</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
