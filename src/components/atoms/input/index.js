import React from 'react'
import './input.css'

const Input = ({label,textColor, ...rest}) => {
  return (
    <div>
      <p className='label' style={{color: textColor}}>{label}</p>
      <input className='input'{...rest}/>
    </div>
  )
}

export default Input
