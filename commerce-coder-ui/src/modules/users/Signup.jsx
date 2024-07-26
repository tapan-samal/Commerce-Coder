import React, { useState } from "react";
import "../../assets/css/users.scss";
import Img from "../../assets/images/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/auth/signup", {
        userName,
        email,
        password,
      })
      .then((response) => {
        console.log("Response: ", response);
        if (response.data.status) {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  return (
    <div className="register">
      <div className="card">
        <div className="card-left">
          <h1>Signup</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
