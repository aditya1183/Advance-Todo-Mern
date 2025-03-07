import React, { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, setIsAuthenticated, userdetails, setuserdetails } =
    useAuth();
  const [loading, setLoading] = useState(true); // Track loading state
  const token = localStorage.getItem("logintoken");

  useEffect(() => {
    const fetchUserDetails = async () => {
      console.log("aditya");
      if (!token) {
        setIsAuthenticated(false);
        navigate("/login");
        return;
      }
      if (!isAuthenticated) {
        navigate("/login");
      }

      try {
        const response = await axios.get("/api/v1/userprofile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 200) {
          setuserdetails(response.data);
          setIsAuthenticated(true);
        } else {
          throw new Error("Invalid Token");
        }
      } catch (error) {
        setIsAuthenticated(false);
        localStorage.removeItem("logintoken");
        toast.error("Session Expired. Please Login Again.");
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [token, setIsAuthenticated, setuserdetails, navigate]);

  if (loading) return <p>Loading...</p>; // Show loading state until auth is checked
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
