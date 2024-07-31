import React from 'react'

const Navbar = ({count,setCountfunction}) => {
  return (
    <div>
        <h1>{count}</h1>
      <nav>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Careers</a></li>
        </ul>
      </nav>
      <button onClick={()=>setCountfunction(count+1)}>count</button>
    </div>
  )
}

export default Navbar
