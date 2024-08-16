import axios from "axios";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/users.scss";
import LogImg from "../../assets/images/login.jpg";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL_USER } from "../../utils/constant";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${BASE_URL_USER}/login`,
        { email, password },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      setEmail("");
      setPassword("");
      setIsAuthenticated(true);
      navigate("/dashboard");
      toast.success(response.data.message || "Login successfully!");
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="card-left">
          <h1>Commerce Coder !!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            repellendus sit maiores consequuntur tempore aliquam?
          </p>
          <span>Don't you have an account?</span> <br />
          <Link to="/signup">
            <button>Register Here</button>
          </Link>
          <img src={LogImg} alt="Connecting People" />
        </div>
        <div className="card-right">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="email">E-Mail:</label>
              <input
                type="text"
                id="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Login</button>
          </form>
          <div>
            <Link to="/forgotpassword">Forgot Password?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
