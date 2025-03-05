import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);
  return isAuthenticated ? element : <Navigate to="login" replace />;
};

export default PrivateRoute;
