import React from 'react'
import './link.css'
const Link = ({title, onclick}) => {
  return (
    <div>
      <p className='link-title' onclick={onclick}>{title}</p>
    </div>
  )
}

export default Link
