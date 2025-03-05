import React from "react";
import { Link, Outlet } from "react-router-dom";

const RootLayots = () => {
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
            <Link>Logout</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default RootLayots;
