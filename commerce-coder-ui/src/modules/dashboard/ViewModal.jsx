import "../../assets/css/dashboard.scss";
import { useSelector } from "react-redux";

const ViewModal = ({ id, setIsViewModal }) => {
  const {clients} = useSelector((state) => state.clientDetail);
  
  const selectedClient = clients.find((client) => client._id === id);

  if (!selectedClient) {
    return null;
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <h2 style={{ textDecoration: "underline" }}>View Client</h2>
        <h3>{selectedClient.fullname}</h3>
        <h4>Phone: {selectedClient.phone}</h4>
        <h4>PAN: {selectedClient.pan}</h4>
        <h4>Type: {selectedClient.itr}</h4>
        <h4>Status: {selectedClient.status}</h4>
        <h4>Creation: {new Date(selectedClient.createdAt).toLocaleDateString()}</h4>
        <h4>Ref: {selectedClient.createdBy.slice(18).toUpperCase()}</h4>
        <button className="btn btn-primary btn-sm my-3 fs-6" onClick={() => setIsViewModal(false)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ViewModal;