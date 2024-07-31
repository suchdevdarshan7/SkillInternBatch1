import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [count, setCount] = useState(0);



    async function fetchApi() {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await response.json();
        console.log(data)
    }

    useEffect(() => {
        fetchApi();
    }, [])




    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>

            <h1>count is {count}</h1>
        </div>
    )
}

export default Navbar
