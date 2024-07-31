import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar';

const App = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    // useEffect(() => {
    //   alert("The useEffect will run on every re -render")
    // })
    // useEffect(() => {
    //   alert("The useEffect will run only once ")
    // }, [])

    // useEffect(() => {
    //   alert("This useEffect will run only if you change the state of count");
    // }, [count, count2])


    return (
        <div>

            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>

            <h1>count is {count}</h1>


            <button onClick={() => setCount2(count2 + 1)}>Increase</button>
            <button onClick={() => setCount2(count2 - 1)}>Decrease</button>

            <h1>count2 is {count2}</h1>



            <Navbar />
        </div>
    )
}

export default App
