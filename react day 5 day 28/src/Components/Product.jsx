import React from 'react'
import { useParams } from 'react-router'



const Product = () => {

    const{slug} = useParams();

  return (
    <div>
      I am the slug{slug}
    </div>
  )
}

export default Product
