import React, { useState } from "react";

const Signup = () => {
  const [register, setregister] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(register);
  };
  return (
    <div>
      <h1>Create Account</h1>
      <form onSubmit={handlesubmit}>
        <label htmlFor="firstname">Firstname</label>
        <input
          type="text"
          id="firstname"
          placeholder="Enter Firstname"
          value={register.firstname}
          onChange={(e) => {
            setregister({ ...register, firstname: e.target.value });
          }}
        />
        <label htmlFor="lastname">Lastname</label>
        <input
          type="text"
          id="lastname"
          placeholder="Enter Lastname"
          value={register.lastname}
          onChange={(e) => {
            setregister({ ...register, lastname: e.target.value });
          }}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter Email"
          value={register.email}
          onChange={(e) => {
            setregister({ ...register, email: e.target.value });
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter Password"
          value={register.password}
          onChange={(e) => {
            setregister({ ...register, password: e.target.value });
          }}
        />

        <input
          type="password"
          id="password"
          placeholder="confirm Password"
          value={register.confirmpassword}
          onChange={(e) => {
            setregister({ ...register, confirmpassword: e.target.value });
          }}
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Signup;
