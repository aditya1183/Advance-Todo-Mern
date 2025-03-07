import React from "react";
import {
  Routes,
  Route,
  BrowserRouter,
  Router,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import RootLayots from "./Layots/RootLayots";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import AllTasks from "./Pages/AllTasks";
import ProtectedRoute from "./AuthContext/ProtectedRoute";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayots />}>
      <Route
        index
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />{" "}
      <Route
        path="/alltasks"
        element={
          <ProtectedRoute>
            <AllTasks />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
