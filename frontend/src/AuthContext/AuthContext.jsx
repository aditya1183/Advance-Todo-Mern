import { createContext, useContext, useEffect, useState } from "react";

// Create Context
const AuthContext = createContext();

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the token exists in localStorage
    const token = localStorage.getItem("logintoken");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook to use Auth Context
export const useAuth = () => {
  return useContext(AuthContext);
};
