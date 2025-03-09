import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";
import baseUrl from "../config/utils";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post(`${baseUrl}/auth/login`, {
        email,
        password,
      });

      const data = res.data;

      // Debugging: Check the response
      console.log("Response data:", data);

      if (data.error) {
        setError(data.error);
      } else {
        // Store token in localStorage and navigate to home
        localStorage.setItem("token", data.token);

        // Debugging: Check if token is stored correctly
        console.log("Token stored:", localStorage.getItem("token"));

        // Navigate to home page
        console.log("Navigating to home...");
        navigate("/home");
      }
    } catch (error) {
      // Catch any unexpected errors
      console.error("Login failed:", error);
      setError("An unexpected error occurred.");
    }
  };

  return (
    <div className="wrapper">
      <h1>Login</h1>
      <p id="error-message" style={{ color: "red" }}>
        {error}
      </p>
      <form id="form" onSubmit={handleLogin}>
        <div>
          <label htmlFor="email-input">
            <span>@</span>
          </label>
          <input
            type="email"
            name="email"
            id="email-input"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password-input">
          <span>Password</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={24}
              viewBox="0 0 24 24"
              width={24}
            >
              <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm240-200q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Z" />
            </svg>
          </label>
          <input
            type="password"
            name="password"
            id="password-input"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        New here? <Link to="/signup">Create an Account</Link>
      </p>
    </div>
  );
};

export default Login;
