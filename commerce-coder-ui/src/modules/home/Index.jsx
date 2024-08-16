import React from "react";
import { Outlet } from "react-router-dom";
import "../../assets/css/home.scss";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Index = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Index;
