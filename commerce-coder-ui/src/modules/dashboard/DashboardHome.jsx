import React from "react";
import Sidebar from "./Sidebar";
import Menubar from "./Menubar";
import ClientList from "./ClientList";

const DashboardHome = () => {
  return (
    <div className="db_container">
    
      <div className="main_section">
        <Menubar />
        <ClientList />
      </div>
    </div>
  );
};

export default DashboardHome;
