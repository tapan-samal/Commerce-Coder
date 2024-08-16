import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { createClient } from "../../features/clientDetailSlice";

const AddNewClient = () => {
  const initialClientData = {
    fullname: "",
    phone: "",
    pan: "",
    itr: "",
  };

  const [formData, setFormData] = useState(initialClientData);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.clientDetail);
  const navigate = useNavigate();
  const { itrType } = useContext(AuthContext);

  const handleInputData = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmitClick = async (event) => {
    event.preventDefault();
    try {
      const response = await dispatch(createClient(formData));
      if (createClient.fulfilled.match(response)) {
        setFormData(initialClientData);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="create_client">
      <h1>Add New Client</h1>
      <form className="client_form" onSubmit={handleSubmitClick}>
        <div className="client_input">
          <label>Full Name:</label> <br />
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleInputData}
            placeholder="Full Name..."
          />
        </div>
        <div className="client_input">
          <label>Phone Number:</label> <br />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputData}
            placeholder="Phone Number..."
          />
        </div>
        <div className="client_input">
          <label>PAN Number:</label> <br />
          <input
            type="text"
            name="pan"
            value={formData.pan}
            onChange={handleInputData}
            placeholder="PAN Number..."
          />
        </div>
        <div className="client_input">
          <label>ITR Type:</label> <br />
          <select name="itr" value={formData.itr} onChange={handleInputData}>
            <option value="" disabled>
              Select ITR...
            </option>
            {itrType.map((itr) => (
              <option key={itr} value={itr}>
                {itr}
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

export default AddNewClient;
