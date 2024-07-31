import React from 'react'
import { CountContext } from '../App'
import { useContext } from 'react'
const CarComponent = () => {
    let value = useContext(CountContext);
  return (
    <div>
      I am car my count is {value}
    </div>
  )
}

export default CarComponent
