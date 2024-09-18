import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateBlog from "../createBlog";
import Home from "../home";
import DetailBlog from "../detailBlog";
import { Footer, Header } from "../../components";
import './mainApp.css'
const MainApp = () => {
  return (
    <div className="main-app-wraper">
      <div className="header-wraper">
        <Header />
      </div>
      <div className="content-wraper">
        <Routes>
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/detail-blog" element={<DetailBlog />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <div className="footer-wraper">
        <Footer />
      </div>
    </div>
  );
};

export default MainApp;
