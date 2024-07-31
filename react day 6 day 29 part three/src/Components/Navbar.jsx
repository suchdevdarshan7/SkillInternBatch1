import React, { useState } from 'react'

const Navbar = () => {
    
    const [count,setCount]  = useState(0);
  
    return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={()=>setCount(count+1)}>Click </button>
    </div>
  )
}

export default Navbar
