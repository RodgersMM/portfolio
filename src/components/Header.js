import React from 'react'

const Header = () => {
  return (
    <header>
    <h1>My Portfolio</h1>
    <nav>
      <ul className='bg-blue-500 '>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  )
}

export default Header