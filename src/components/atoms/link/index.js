import React from 'react'
import './link.css'
const Link = ({title, onclick, linkColor}) => {
  return (
    <div>
      <p className='link-title' style={{color: linkColor}} onClick={onclick}>{title}</p>
    </div>
  )
}

export default Link
