import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ResetPassword = () => {

  const handleResetbtn = () => {
    toast.success("Password reset successfully!");
  };

  return (
    <div className="reset_password">
      <h1>Reset Password</h1>
      <form className="reset_form">
        <div className="form_data">
          <label>New Password:</label>
          <input type="text" />
        </div>
        <div className="form_data">
          <label>Confirm Password:</label>
          <input type="text" />
        </div>
        <Link to="/login">
          <button type="submit" onClick={handleResetbtn}>
            Reset
          </button>
        </Link>
      </form>
    </div>
  );
};

export default ResetPassword;
