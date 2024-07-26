import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import profile from "../../assets/images/tapan.jpeg";
import "../../assets/css/dashboard.scss";

const Header = () => {
  const handleDarkMode = () => {};
  return (
    <div>
      <nav className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="client">
          <h2>Dashboard</h2>
        </div>

        <div className="header_right">
          <div onClick={handleDarkMode} className="dark_mode">
            <i class="fa-regular fa-moon"></i>
          </div>
          <Link to="/login" className="profile">
            <img src={profile} width={200} alt="profile" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
