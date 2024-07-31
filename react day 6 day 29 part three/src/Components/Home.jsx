import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <NavLink to={'/nav'}>Navbar</NavLink>
      <NavLink to={'/random'}>Random</NavLink>
    </div>
  )
}

export default Home
