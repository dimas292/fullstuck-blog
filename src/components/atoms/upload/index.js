import React from 'react'
import './upload.css'
import { UploadBg } from '../../../assets'
const Upload = () => {
  return (
    <div className='upload'>
      <img src={UploadBg} alt='' className='preview' loading='lazy'/>
      <input type='file'/>
    </div>
  )
}

export default Upload
