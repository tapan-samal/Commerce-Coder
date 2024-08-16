import React, { useContext, useEffect, useState } from "react";
import "../../assets/css/dashboard.scss";
import profile from "../../assets/images/tapan.jpeg";
import ProfileModal from "./ProfileModal";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, handleDarkMode } = useContext(AuthContext);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark_mode");
    } else {
      document.body.classList.remove("dark_mode");
    }
  }, [isDarkMode]);

  return (
    <div>
      <nav className="header">
        <div className="db_title">
          {/* <i className="fa-solid fa-table-columns"></i> */}
          <h2>Dashboard</h2>
        </div>
        <div className="header_right">
          <div onClick={handleDarkMode} className="dark_mode">
            <i
              className={isDarkMode ? "fa-solid fa-sun" : "fa-regular fa-moon"}
            ></i>
          </div>
          <div className="profile">
            <img
              src={profile}
              width={200}
              alt="profile"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
        {isMenuOpen && (
          <ProfileModal isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        )}
      </nav>
    </div>
  );
};

export default Header;
