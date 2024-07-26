import React from "react";
import "../../assets/css/dashboard.scss";

const Footer = () => {
  return (
    <footer className="db_footer">
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
    </footer>
  );
};

export default Footer;
