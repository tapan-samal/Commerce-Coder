import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateClient } from "../../features/clientDetailSlice";
import { AuthContext } from "../../context/AuthContext";

const UpdateClient = () => {
  const status = ["Created", "In-Progress", "Completed", "Unaware"];
  const [formData, setFormData] = useState({});
  const { id } = useParams();
  const { itrType } = useContext(AuthContext);
  const dispatch = useDispatch();
  const { clients } = useSelector((state) => state.clientDetail);
  const navigate = useNavigate();

  useEffect(() => {
    const selectedClient = clients.find((client) => client._id === id);
    if (selectedClient) {
      setFormData({...selectedClient});
    }
  }, [id, clients]);

  const handleInputData = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  
  const handleSubmitClick = (event) => {
    event.preventDefault();
    dispatch(updateClient(formData));
    
    navigate("/dashboard");
  };

  return (
    <div className="update_client">
      <h1>Update Client</h1>
      <form className="client_form" onSubmit={handleSubmitClick}>
        <div className="client_input">
          <label>Full Name:</label> <br />
          <input
            type="text"
            name="fullname"
            value={formData.fullname || ""}
            onChange={handleInputData}
            placeholder="Full Name..."
          />
        </div>
        <div className="client_input">
          <label>Phone Number:</label> <br />
          <input
            type="tel"
            name="phone"
            value={formData.phone || ""}
            onChange={handleInputData}
            placeholder="Phone Number..."
          />
        </div>
        <div className="client_input">
          <label>PAN Number:</label> <br />
          <input
            type="text"
            name="pan"
            value={formData.pan || ""}
            onChange={handleInputData}
            placeholder="PAN Number..."
          />
        </div>
        <div className="client_input">
          <label>ITR Type:</label> <br />
          <select name="itr" value={formData.itr || ""} onChange={handleInputData}>
            {itrType.map((itr) => (
              <option key={itr} value={itr}>
                {itr}
              </option>
            ))}
          </select>
        </div>
        <div className="client_input">
          <label>Filing Status:</label> <br />
          <select
            name="status"
            value={formData.status || ""}
            onChange={handleInputData}
          >
            {status.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div className="client_input">
          <button type="submit">Submit</button>
          <Link to="/dashboard">
            <button type="button" className="back_btn">
              Back
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UpdateClient;
