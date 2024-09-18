import React from 'react'
import './button.css'

const Button = ({title,color,bgColor,  ...rest}) => {
  return (
    <div style={{"color" : color}}>
      <button className='button'style={{backgroundColor:bgColor}}{...rest}>{title}</button>
    </div>
  )
}

export default Button
