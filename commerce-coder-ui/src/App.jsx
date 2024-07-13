import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import Home from "./landing_page/Home";
import Login from "./users/Login";
import Service from "./landing_page/Service";
import About from "./landing_page/About";
import Contact from "./landing_page/Contact";
import Portfolio from "./landing_page/Portfolio";
import Projects from "./landing_page/Projects";
import Signup from "./users/Signup";
import Dashboard from "./dashboard/Dashboard";
import NotFound from "./landing_page/NotFound";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
