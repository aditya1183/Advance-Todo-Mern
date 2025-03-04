import React from "react";
import { RouterProvider, Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
