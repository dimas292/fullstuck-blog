import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreateBlog from '../createBlog'
import Home from '../home'
import DetailBlog from '../detailBlog'
const MainApp = () => {
  return (
    <div>
     <p>Header</p>
      <Routes>
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/detail-blog" element={<DetailBlog />} />
        <Route path="/" element={<Home />} />
      </Routes>
     <p>Footer</p>
    </div>
  )
}

export default MainApp
