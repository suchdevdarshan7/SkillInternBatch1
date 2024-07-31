import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>Home</li>
              <li><NavLink to={'/'}>Products</NavLink></li>
        </ul>
      
    </nav>
  )
}

export default Navbar
