import React from "react";
import logo from "../../assets/images/logo.png";
import { NavLink} from "react-router-dom";
import "../../assets/css/navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="nav-links">
          <NavLink to="/" activeclassname="active-link"> Home</NavLink>
          <NavLink to="/service" activeclassname="active-link">Service</NavLink>
          <NavLink to="/projects" activeclassname="active-link">Projects</NavLink>
          <NavLink to="/portfolio" activeclassname="active-link">Portfolio</NavLink>
          <NavLink to="/about" activeclassname="active-link">About Us</NavLink>
          <NavLink to="/contact" activeclassname="active-link">Contact Us</NavLink>
        </div>
        <div>
          <NavLink to="/login" className="profile">
            <button>Login</button>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
