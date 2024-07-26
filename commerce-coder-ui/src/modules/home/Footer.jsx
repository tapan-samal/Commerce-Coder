import React from "react";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import "../../assets/css/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="col1">
        <img src={logo} alt="logo" />
        <p>
          India’s No 1 Web development and Tax Consultancy Company. <br />
          Provide unique and high quality websites with best Tax advisory.
        </p>
      </div>
      <div className="col2">
        <div className="navlinks">
          <NavLink to="/service" activeclassname="active-link">
            Service
          </NavLink>
          <NavLink to="/projects" activeclassname="active-link">
            Projects
          </NavLink>
          <NavLink to="/portfolio" activeclassname="active-link">
            Portfolio
          </NavLink>
          <NavLink to="/contact" activeclassname="active-link">
            Contact Us
          </NavLink>
        </div>
      </div>
      <div className="col3">
        <div className="icon">
          <i className="fa-solid fa-envelope"></i>
          <i className="fa-brands fa-square-facebook"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-square-github"></i>
          <i className="fa-brands fa-square-twitter"></i>
        </div>
        <div className="copyright">
          Commerce Coder || Copyright © 2024, All Right Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
