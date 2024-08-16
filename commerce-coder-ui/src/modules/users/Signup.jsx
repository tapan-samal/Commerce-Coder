import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/users.scss";
import Img from "../../assets/images/login.jpg";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL_USER } from "../../utils/constant";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const {isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post(
        `${BASE_URL_USER}/signup`,
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Clicked", formData);

      setFormData({
        username: "",
        email: "",
        phone: "",
        password: "",
      });
      setIsAuthenticated(true);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred.");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="register">
      <div className="card">
        <div className="card-left">
          <h1>Signup</h1>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="card-right">
          <h1>Commerce Coder !!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            repellendus sit maiores consequuntur tempore aliquam?
          </p>
          <span>Don't you have an account?</span> <br />
          <Link to="/login">
            <button>Login Here</button>
          </Link>
          <img src={Img} alt="Connecting People" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
