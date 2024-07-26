import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./modules/dashboard/Dashboard";
import DashboardHome from "./modules/dashboard/DashboardHome";
import About from "./modules/home/About";
import Contact from "./modules/home/Contact";
import Home from "./modules/home/Home";
import LandingPage from "./modules/home/LandingPage";
import NotFound from "./modules/home/NotFound";
import Portfolio from "./modules/home/Portfolio";
import Projects from "./modules/home/Projects";
import Service from "./modules/home/Service";
import Login from "./modules/users/Login";
import Signup from "./modules/users/Signup";
import AddNewClient from "./modules/dashboard/AddNewClient";
import UpdateClient from "./modules/dashboard/UpdateClient";
import ForgotPassword from "./modules/users/ForgotPassword";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route index element={<Home />} />
          <Route path="service" element={<Service />} />
          <Route path="projects" element={<Projects />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="add-client" element={<AddNewClient/>}/>
          <Route path="update-client" element={<UpdateClient/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
