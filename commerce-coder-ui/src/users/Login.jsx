import React from "react";
import "../assets/css/login.scss";
import LogImg from "../assets/images/login.jpg";
import { Link } from "react-router-dom";

const Login = () => {
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
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <Link to="/dashboard">
            <button>Login</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
