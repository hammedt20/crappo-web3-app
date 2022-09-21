import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'

const Header = () => {
  const [showNav, setShowNav] = useState(false)

  const handleNav = () => {
    setShowNav(state => !state)
  }
  return (
    <nav className='nav'>
      <div className='container nav-container'>
        <a href='/'>
          <img src='./image/logo.svg' alt='' />
        </a>
        <div className={showNav ? 'show-content' : 'nav-content'}>
          <ul className='nav-links'>
            <li>Products</li>
            <li>Features</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className='nav-auth'>
            <a href='/'>Login</a>
            <span> | </span>
            <button>Register</button>
          </div>
        </div>
        <div className='nav-hamburger' onClick={handleNav}>
          {showNav ? <IoMdClose /> : <FiMenu />}
        </div>
      </div>
    </nav>
  )
}

export default Header