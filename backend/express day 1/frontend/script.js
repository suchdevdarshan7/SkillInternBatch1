async function fetchApi(){
    const response = await fetch("http://localhost:3000/api/courses",{
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            "Allow Access": "no-cors",
        }
    });
    const data = await response.json();

    console.log(data)
}

fetchApi()