import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router';

const Products = () => {

    const [products,setProducts] = useState([]);

    const navigate = useNavigate();

    async function fetchApi(){
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        console.log(data)
        setProducts(data);
    }

    useEffect(()=>{
        fetchApi();
    },[])

    function handleClick(id){
        navigate(`/${id}`)
    }

  return (
    <div>
      {
        products.map((element)=>{
            return <div key={element.id} onClick={()=>handleClick(element.id)}><li>{element.title}</li></div>
        })
      }
    </div>
  )
}

export default Products
