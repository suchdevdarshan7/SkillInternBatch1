import React, { useState } from 'react'

const Random = () => {

    const [count, setCount] = useState(0);
  return (
    <div>
          <h1>The random is having the count value as {count}</h1>
          <button onClick={()=>setCount(count+1)}>Click here</button>
    </div>
  )
}

export default Random
