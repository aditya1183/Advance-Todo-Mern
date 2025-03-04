import React from "react";
import { RouterProvider, Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
