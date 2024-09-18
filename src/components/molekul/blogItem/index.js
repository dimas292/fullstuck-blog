import React from 'react'
import { RegsiterBg } from '../../../assets'
import './blogItem.css'
const BlogItem = () => {
  return (
    <div className='blog-item'>
      <img src={RegsiterBg} alt='' className='image-tumb'/>
      <div className='content-detail'>
      <p className='title-blog'>title</p>
      <p className='author'>author - date post</p>
      <p className='body'>lorem ipsum dolor sit amet</p>
      </div>
    </div>
  )
}

export default BlogItem
