import React from 'react'
import { CountContext } from '../App'
import { useContext } from 'react'
import CarComponent from './CarComponent';

const Button = () => {

    let value = useContext(CountContext);
  return (
    <div>
      <button>This is the {value}</button>
      <CarComponent/>
    </div>
  )
}

export default Button
