import React, { useState } from "react";
import loader from "../../assets/images/loader.gif";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AddNewClient = () => {
  const clientData = {
    name: "",
    phone: "",
    pan: "",
    dob: "",
    itr: "",
    status: "",
  };
  const [formData, setFormData] = useState({ clientData });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputData = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmitClick = (event) => {
    event.preventDefault();
    setIsLoading(true);
    navigate("/dashboard");
  };
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Add User</h2>
      {isLoading && <img src={loader} alt="profile" className="loader-gif" />}
      {!isLoading && (
        <form className="add-form" onSubmit={handleSubmitClick}>
          <div>
            <label>Full Name:</label> <br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputData}
            />
          </div>
          <div>
            <label> Phone Number: </label>
            <br />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputData}
            />
          </div>
          <div>
            <label> PAN Number: </label> <br />
            <input
              type="text"
              name="pan"
              value={formData.pan}
              onChange={handleInputData}
            />
          </div>
          <div>
            <label> Date of Birth: </label> <br />
            <input
              type="text"
              name="dob"
              value={formData.dob}
              onChange={handleInputData}
            />
          </div>
          <div>
            <label> Status: </label> <br />
            <input
              name="status"
              type="text"
              value={formData.status}
              onChange={handleInputData}
            />
          </div>
          <div>
            <label> ITR Type: </label> <br />
            <input
              type="text"
              name="itr"
              value={formData.itr}
              onChange={handleInputData}
            />
          </div>
          <div className="submit_btn">
            <Link to="/dashboard">
              <button
                type="submit"
              >
                Submit
              </button>
            </Link>
            <Link to="/dashboard">
              <button type="submit" className="back_btn">
                Back
              </button>
            </Link>
          </div>
        </form>
      )}
      ;
    </div>
  );
};

export default AddNewClient;
