import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayUser } from "../../features/userDetailSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.userDetail);

  useEffect(() => {
    dispatch(displayUser());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    toast.error(error); 
  }

  return (
    <div className="user_detail">
      <h1>User Details</h1>
      {users.length > 0 ? (
        users.map((data) => (
          <div key={data._id} className="user_data">
            <h2>{data.username}</h2>
            <h3>Email: {data.email}</h3>
            <h3>Phone: {data.phone}</h3>
            <h3>ID: {data._id.slice(18).toUpperCase()}</h3>
            <h3>Creation: {new Date(data.createdAt).toLocaleDateString()}</h3>
          </div>
        ))
      ) : (
        <h3>Unable to access User data!</h3>
      )}

      <div className="user_btn">
        <button type="submit">Update</button>
        <button type="submit" className="back_btn">
          Change Password
        </button>
        <Link to="/dashboard">
        <button type="button">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
