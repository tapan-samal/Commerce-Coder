import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./modules/dashboard/Dashboard";
import About from "./modules/home/About";
import Contact from "./modules/home/Contact";
import Home from "./modules/home/Home";
import Index from "./modules/home/Index";
import NotFound from "./modules/home/NotFound";
import Portfolio from "./modules/home/Portfolio";
import Projects from "./modules/home/Projects";
import Service from "./modules/home/Service";
import ForgotPassword from "./modules/users/ForgotPassword";
import Login from "./modules/users/Login";
import Signup from "./modules/users/Signup";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./context/PrivateRoute";
import ResetPassword from "./modules/users/ResetPassword";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Home />} />
          <Route path="service" element={<Service />} />
          <Route path="projects" element={<Projects />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="resetpassword" element={<ResetPassword />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route
          path="/dashboard/*"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
      <Toaster />
    </AuthProvider>
  );
};

export default App;
