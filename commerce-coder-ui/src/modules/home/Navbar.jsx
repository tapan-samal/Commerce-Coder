import React from "react";
import logo from "../../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import "../../assets/css/navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
          <NavLink to="/service" className={({ isActive }) => isActive ? "active-link" : ""}>Service</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "active-link" : ""}>Projects</NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => isActive ? "active-link" : ""}>Portfolio</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About Us</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact Us</NavLink>
        </div>
        <div>
          <Link to="/login" className="profile">
            <button>Login</button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
