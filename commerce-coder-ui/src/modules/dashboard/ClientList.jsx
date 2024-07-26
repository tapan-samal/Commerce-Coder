import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const ClientList = () => {
  const [clientData, setClientData] = useState([]);
  const [colDefs, setColDefs] = useState([
    // { field: "Serial", width: "77px" },
    { field: "Full Name", width: "275px" },
    { field: "Phone Number", width: "222px" },
    { field: "PAN Card", width: "188px" },
    { field: "Date of Birth", width: "166px" },
    { field: "Password", width: "170px" },
    { field: "ITR Type", width: "99px" },
    { field: "Actions", width: "166px" },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://6596cf026bb4ec36ca036150.mockapi.io/commerce-coder";
      const response = await fetch(url);
      const result = await response.json();
      setClientData(result);
      console.log(result);
    };
    fetchData();
  }, []);

  return (
    <div className="client_list">
      <div className="ag-theme-quartz" style={{ height: 399 }}>
        <AgGridReact
          rowData={clientData}
          columnDefs={colDefs}
          pagination={true}
          paginationPageSize={6}
        />
      </div>
    </div>
  );
};

export default ClientList;
