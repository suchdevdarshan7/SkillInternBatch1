import React, { useState, useEffect } from 'react'

const Navbar = () => {

    const [title, setTitle] = useState([]);


    async function fetchApi() {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await response.json();
        console.log(data)
        setTitle(data);
    }

    useEffect(() => {
        fetchApi();
    }, [])



    return (
        <div>
            <ol>
                {
                    title.map((el) => {
                        return <li key={el.id}>{el.title}</li>
                    })
                }

            </ol>
        </div>
    )
}

export default Navbar
