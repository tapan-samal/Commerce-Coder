import React, { useState } from "react";
import "../../assets/css/users.scss";
import LogImg from "../../assets/images/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/auth/login", {
        email,
        password,
      })
      .then((resonse) => {
        if (Response.data.status) {
          navigate("/dashboard");
        }
        console.log("Res: ", resonse);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
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
          <span>Don't you have an account ?</span> <br />
          <Link to="/signup">
            <button>Register Here</button>
          </Link>
          <img src={LogImg} alt="Connecting People" />
        </div>
        <div className="card-right">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
          <div>
            <Link to="/forgotpassword">Forgot Password</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
