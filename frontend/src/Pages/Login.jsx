import React, { useState } from "react";

const Login = () => {
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });

  const handlesubmit = (e) => {
    e.preventDefault();
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
