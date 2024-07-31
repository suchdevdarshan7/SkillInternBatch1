import React from 'react'
import Button from './Button'
import { useContext } from 'react'
import { CountContext } from '../App'

const Navbar = () => {

    let value = useContext(CountContext);

  return (
    <div>
        <h1>Count is : {value}</h1>
      <Button value={value}/>
    </div>
  )
}

export default Navbar
