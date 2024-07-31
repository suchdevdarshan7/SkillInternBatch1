import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import Button from './Components/Button';

const App = () => {
  const [count,setCount] = useState(0);
   
  
  function increase(){
    console.log(count)-
    setCount(count => count+1);
    setCount(count => count+1);
  }
  function decrease(){
    setCount(count-1);
    console.log(count)
  }


  return (
    <div>
      <Navbar count={count} setCountfunction={setCount}/>
      <h1>Count : {count}</h1>
      
      <Button handle={increase}>Add</Button>
      <Button handle={decrease}>Subtract</Button>
    </div>
  )
}



export default App


// function increase() {
//   count = count + 1;
// }

// function decrease() {
//   count = count - 1;
// }