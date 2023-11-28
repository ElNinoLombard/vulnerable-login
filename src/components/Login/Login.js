import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage(`Hello ${data.name}! You've logged in successfully.`);
        setErrorMessage("");
      } else {
        setErrorMessage("Invalid Username or Password");
        setSuccessMessage("");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error has occurred");
      setSuccessMessage("");
    }
  };

  return (
    <div className="form-container">
      <div className="notifications-wrapper">
        {errorMessage && <div className="notification error">{errorMessage}</div>}
        {successMessage && <div className="notification success">{successMessage}</div>}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="input-box">
            <label>
              <b>Username</b>
            </label>
            <input
              className="input"
              type="text"
              placeholder="Enter Username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-box">
            <label>
              <b>Password</b>
            </label>
            <input
              className="input"
              type="password"
              placeholder="Enter Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <button className="submit-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
