import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Menubar = () => {
  const handleAddNewClient = () => {};

  return (
    <div className="menubar">
      <div className="add_client">
        <Link to="add-client">
          <button onClick={handleAddNewClient}>Add New Client</button>
        </Link>
      </div>
      <div>
        <h2>Client Lists</h2>
      </div>
      <div className="search_bar">
        <input type="search" placeholder="Search..." />
      </div>
    </div>
  );
};

export default Menubar;
