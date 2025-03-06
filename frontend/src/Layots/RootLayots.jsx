import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../AuthContext/AuthContext";
const RootLayots = () => {
  const { setIsAuthenticated, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const handlelogoutuser = () => {
    console.log("aditya aditya");
    const token = localStorage.getItem("logintoken");
    if (!token) {
      return;
    } else {
      toast.success("Logout Sucessfully");

      localStorage.removeItem("logintoken");
      setIsAuthenticated(!isAuthenticated);
      navigate("/");
    }
  };
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/alltasks">All Tasks</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/login">Sign_In</Link>
          </li>
          <li>
            <Link to="/register">Sign_Up</Link>
          </li>
          <li>
            <Link onClick={handlelogoutuser}>Logout</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default RootLayots;
