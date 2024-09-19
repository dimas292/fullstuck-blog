import React from 'react'
import { RegsiterBg } from '../../../assets'
import './blogItem.css'
import { Button, Gap } from '../../atoms'
import { useNavigate } from 'react-router-dom'
const BlogItem = () => {
  const navigate = useNavigate()
  return (
    <div className='blog-item'>
      <img src={RegsiterBg} alt='' className='image-tumb'/>
      <div className='content-detail'>
      <p className='title-blog'>Title blog</p>
      <p className='author'>author - date post</p>
      <p className='body'>Di sebuah desa kecil yang dikelilingi oleh hutan hijau, hidup seorang pemuda bernama Aidan. Setiap pagi, Aidan berjalan ke sungai untuk menangkap ikan dan mengumpulkan buah-buahan. Ia menikmati keindahan alam dan suara burung berkicau. Suatu hari, saat menjelajahi hutan, ia menemukan sebuah gua tersembunyi. Di dalam gua itu, ia menemukan ukiran kuno yang bercerita tentang legenda desa.  </p>
      <Gap height={20}/>
      <Button title={"read more"} onClick={() => navigate('/detail-blog')}/>
      </div>
    </div>
  )
}

export default BlogItem
