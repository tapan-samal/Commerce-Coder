import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/dashboard.scss";
import profile from "../../assets/images/tapan.jpeg";
import { AuthContext } from "../../context/AuthContext";
import { useDispatch } from "react-redux";
import { userLogout } from "../../features/userDetailSlice";

const ProfileModal = ({ isMenuOpen, setIsMenuOpen }) => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await dispatch(userLogout());
    setIsAuthenticated(false);
    navigate("/");
  };

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="profile-menu">
      <div className="sub-menu">
        <div className="user-info">
          <img src={profile} alt="profile" />
          <h5>Tapan Samal </h5>
        </div>

        <div className="submenu-item" onClick={handleToggleMenu}>
          <i className="fa fa-user img" aria-hidden="true"></i>
          <Link to="/dashboard/profile" className="submenu-link">
            <p>Profile </p>
            <span> &gt;</span>
          </Link>
        </div>
        <div className="submenu-item" onClick={handleToggleMenu}>
          <i className="fa fa-cog" aria-hidden="true"></i>
          <Link to="" className="submenu-link">
            <p>Setting & Privacy</p>
            <span>&gt;</span>
          </Link>
        </div>
        <div className="submenu-item" onClick={handleToggleMenu}>
          <i className="fa fa-question-circle" aria-hidden="true"></i>
          <Link to="" className="submenu-link">
            <p>Help & Support</p>
            <span>&gt;</span>
          </Link>
        </div>
        <div className="submenu-item" onClick={handleLogout}>
          <i className="fa fa-sign-out" aria-hidden="true"></i>
          <Link to="/" className="submenu-link">
            <p>Logout </p>
            <span>&gt;</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
