import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { createContext } from 'react';

export const CountContext = createContext(0);

const App = () => {
  const [count,setCount] = useState(0);
  return (

    <CountContext.Provider value={count}>
    <div>
      <Navbar value={count}/>
      <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
    </CountContext.Provider>
  )
}

export default App
