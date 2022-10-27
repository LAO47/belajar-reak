import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <div id='main'>
      <Navbar />
      <div className='name'>
        
      <h1> It's a <br /> <span>Digital Learning</span> USU</h1>
      <p className='details'> Lorem ipsum </p>
        <div className='header-btns'>
            <a href="#" className='cv-btn'>Button 1</a>
            <a href="#" className='cv-btn1'>Button 2</a>
        </div>
      </div>
      <div className='arrow'></div>
    </div>
  )
}

export default Header