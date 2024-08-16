import React, { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import Menubar from "./Menubar";
import { useDispatch, useSelector } from "react-redux";
import { deleteClient, displayClient } from "../../features/clientDetailSlice";
import "../../assets/css/dashboard.scss";
import loader from "../../assets/images/loader.gif";
import { searchDebounce } from "../../utils/debounce";
import ViewModal from "./ViewModal";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const ClientList = () => {
  const dispatch = useDispatch();
  const { clients, loading, error, searchName = "" } = useSelector(
    (state) => state.clientDetail
  );

  const [searchedClient, setSearchedClient] = useState([]);
  const [isViewModal, setIsViewModal] = useState(false);
  const [id, setId] = useState(null);
  const {isDarkMode} = useContext(AuthContext);

  useEffect(() => {
    dispatch(displayClient());
  }, [dispatch]);

  useEffect(() => {
    setSearchedClient(clients);
  }, [clients]);

  const colDefs = useMemo(
    () => [
      {
        headerName: "Serial",
        field: "serial",
        width: 77,
        valueGetter: (params) => params.node.rowIndex + 1,
      },
      { headerName: "Full Name", field: "fullname", width: 244 },
      { headerName: "Phone Number", field: "phone", width: 188 },
      { headerName: "PAN Card", field: "pan", width: 177 },
      { headerName: "ITR Type", field: "itr", width: 122 },
      { headerName: "Status", field: "status", width: 122 },
      {
        headerName: "Actions",
        field: "actions",
        width: 166,
        cellRenderer: (params) => (
          <div>
            <button
              onClick={() => [setId(params.data._id), setIsViewModal(true)]}
              className="action_btn view_btn"
            >
              👁‍🗨
            </button>
            <Link to={`/dashboard/updateclient/${params.data._id}`}>
              <button className="action_btn edit_btn">✏️</button>
            </Link>
            <button
              onClick={() => dispatch(deleteClient(params.data._id))}
              className="action_btn delete_btn"
            >
              🗑️
            </button>
          </div>
        ),
      },
    ],
    [dispatch]
  );

  const handleSearch = useCallback(
    searchDebounce((searchTerm) => {
      const filtered = clients.filter((client) =>
        client.fullname.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchedClient(filtered);
    }, 500),
    [clients]
  );

  useEffect(() => {
    handleSearch(searchName);
  }, [handleSearch, searchName]);

  if (loading) {
    return (
      <div className="loader-container">
        <img src={loader} alt="Loading..." width={150} className="loader-gif" />
      </div>
    );
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  return isViewModal ? (
    <ViewModal id={id} setIsViewModal={setIsViewModal} />
  ) : (
    <div className="client_list">
      <Menubar />
      <div className="client_data">
        <div className={`ag-theme-quartz ${isDarkMode ? "dark_mode" : ""}`} style={{ height: 399 }}>
          <AgGridReact
            rowData={searchedClient}
            columnDefs={colDefs}
            pagination={true}
            paginationPageSize={7}
          />
        </div>
      </div>
    </div>
  );
};

export default ClientList;
