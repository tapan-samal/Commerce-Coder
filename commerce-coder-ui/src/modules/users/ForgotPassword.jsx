import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const ForgotPassword = () => {

  const handleResetbtn = () => {
    toast.success("Link sent to registered email!")
  }
  return (
    <div className="forgot_password">
      <h1>Forgot Password</h1>
      <form className="form_data">
        <label>Enter Registered Email:</label>
        <input type="text" placeholder="Email..."/>
        <Link to="/resetpassword">
        <button type="submit" onClick={handleResetbtn}>Reset</button>
        </Link>
      </form>
    </div>
  );
};

export default ForgotPassword;
