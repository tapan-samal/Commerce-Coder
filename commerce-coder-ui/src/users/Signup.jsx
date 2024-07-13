import React from "react";
import "../assets/css/signup.scss";
import Img from "../assets/images/login.jpg";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="card-left">
          <h1>Signup</h1>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
           <Link to="/login"><button>Submit</button></Link> 
          </form>
        </div>
        <div className="card-right">
          <h1>Commerce Coder !!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            repellendus sit maiores consequuntur tempore aliquam?
          </p>
          <span>Don you have an account ?</span> <br />
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
