import React from "react";
import Login from "../components/Login";
import { login } from "../springApi";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    try {
      // Call the login function to authenticate with the backend
      const user = await login(credentials);
      console.log(credentials);

      // Optionally, store user information in the app state or context
      console.log("User logged in:", user);

      // Use navigate function to redirect to '/terrainNonValide'
      navigate("/terrainNonValide");
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div>
      <Login onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
