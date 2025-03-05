import React from "react";
import { RouterProvider, Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import RootLayots from "../Layots/RootLayots";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import AllTasks from "./Pages/AllTasks";
import PrivateRoute from "./AuthContext/privateRoute";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayots />}>
          <Route element={<PrivateRoute />}>
            <Route index element={<Home />} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/alltasks" element={<AllTasks />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
