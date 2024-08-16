import React, { useState, createContext, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "../../assets/css/dashboard.scss";
import AddNewClient from "./AddNewClient";
import ClientList from "./ClientList";
import Footer from "./Footer";
import Header from "./Header";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import UpdateClient from "./UpdateClient";
import { AuthContext } from "../../context/AuthContext";

const Dashboard = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const itrType = ["ITR-1", "ITR-2", "ITR-3", "ITR-4", "ITR-5"];
  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("darkMode", !isDarkMode);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        itrType,
        isDarkMode,
        setIsDarkMode,
        handleDarkMode,
      }}
    >
      <div className="db_container">
        <Sidebar />
        <div className="db_main">
          <Header />
          <Routes>
            <Route path="/" element={<ClientList />} />
            <Route path="newclient" element={<AddNewClient />} />
            <Route path="updateclient/:id" element={<UpdateClient />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </AuthContext.Provider>
  );
};

export default Dashboard;
