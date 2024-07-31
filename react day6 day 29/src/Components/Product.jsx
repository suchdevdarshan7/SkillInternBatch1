import React, { useState ,useEffect} from 'react'
import { useParams } from 'react-router'



const Product = () => {
    const {slug}  = useParams();

    const [product,setProduct] = useState({});

    async function fetchApi(slug) {
        let response = await fetch(`https://fakestoreapi.com/products/${slug}`);
        let data = await response.json();
        console.log(data)
        setProduct(data);
    }

    useEffect(() => {
        fetchApi(slug);
    }, [])

    return (
    <div>
        <h1>{product?.title}</h1>
        <img src={product?.image} alt="" />
        <h3>{product?.price}</h3>
    </div>
  )
}

export default Product
