import axios from "axios";
import React, { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/dashboard.scss";
import logo from "../../assets/images/logo.png";
import { AuthContext } from "../../context/AuthContext";
import { useDispatch } from "react-redux";
import { userLogout } from "../../features/userDetailSlice";

const Sidebar = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await dispatch(userLogout());
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="sidebar_item">
        <Link to="newclient">
          <button>
            <i className="fa-solid fa-plus" />
            <span className="content">Add New</span>
          </button>
        </Link>
      </div>

      <div className="sidebar_item">
        <Link to="">
          <button>
            <i className="fa-solid fa-list" />
            <span className="content">Client List</span>
          </button>
        </Link>
      </div>

      <div className="sidebar_item">
        <Link to="profile">
          <button>
            <i className="fa-solid fa-user" />
            <span className="content">Profile</span>
          </button>
        </Link>
      </div>

      <div className="sidebar_item">
        <button onClick={handleLogout}>
          <i className="fa-solid fa-right-from-bracket" />
          <span className="content">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
