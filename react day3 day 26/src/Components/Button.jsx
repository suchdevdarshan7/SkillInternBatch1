import React from 'react'

const Button = ({handle, children}) => {

  return (
    <button onClick={handle}>{children}</button>
  )
  
}

export default Button
