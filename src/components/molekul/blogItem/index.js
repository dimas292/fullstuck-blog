import React from 'react'
import './blogItem.css'
import { Button, Gap } from '../../atoms'
import { useNavigate } from 'react-router-dom'
const BlogItem = (props) => {
  const navigate = useNavigate()
  const {title, name, date, body, image} = props
  return (
    <div className='blog-item'>
      <img src={image} alt='' className='image-tumb'loading='lazy'/>
      <div className='content-detail'>
      <p className='title-blog'>{title}</p>
      <p className='author'>{name} - {date}</p>
      <p className='body'>{body}</p>
      <Gap height={20}/>
      <Button title={"read more"} onClick={() => navigate('/detail-blog/')}/>
      </div>
    </div>
  )
}

export default BlogItem
