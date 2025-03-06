import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoForm from "../Components/TodoForm";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext/AuthContext";
import toast from "react-hot-toast";
const Login = () => {
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { setIsAuthenticated, isAuthenticated } = useAuth();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, []);
  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/v1/auth/login", login, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response.data);
      localStorage.setItem("logintoken", response.data.token);
      setIsAuthenticated(true);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Login </h1>
      <form onSubmit={handlesubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={login.email}
          onChange={(e) => {
            setlogin({ ...login, email: e.target.value });
          }}
        />
        <input
          type="password"
          value={login.password}
          onChange={(e) => {
            setlogin({ ...login, password: e.target.value });
          }}
        />
        <button>Login</button>
      </form>
      <h1>{login.email}</h1>
    </div>
  );
};

export default Login;
