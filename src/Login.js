import React, { useState } from "react";
import logo from "./assets/dhatvi.jpg";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import WelcomeImg from "./assets/team.jpg";

function Login({ onLoginSuccess }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState("");

  // Validate email or 10-digit mobile
  const validateInput = (value) => {
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const isMobile = /^\d{10}$/.test(value);

    if (value === "") {
      setError("");
    } else if (isEmail || isMobile) {
      setError("");
    } else {
      setError("Please enter a valid 10-digit mobile number or email.");
    }

    setUserInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Final validation
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInput);
    const isMobile = /^\d{10}$/.test(userInput);

    if (!isEmail && !isMobile) {
      setError("Enter a valid email or 10-digit mobile number.");
      return;
    }

    if (onLoginSuccess) onLoginSuccess();
    navigate("/");
  };

  return (
    <div className="container">
      <div className="left">
        <div className="header">
          <img src={logo} alt="DhaTvi Logo" className="logo-img" />
          <h1>
            Login to <br />
            <span className="highlight">Unlock Opportunities</span>
          </h1>
        </div>
        <img src={WelcomeImg} alt="Welcome" className="welcomeimg" />
      </div>

      <div className="right">
        <h1>DhaTvi Business Solutions</h1>
        <p className="sub-text">Driving Technology Delivering Trust</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <label>Email / Mobile Number</label>
          <input
            type="text"
            placeholder="Enter your email or mobile"
            value={userInput}
            onChange={(e) => validateInput(e.target.value)}
            required
          />
          {error && <p className="error-msg">{error}</p>}

          <label>Password</label>
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              required
            />
            <span
              className="view-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="forgot">
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" disabled={!!error}>
            Login
          </button>
        </form>

        <p className="create-account">
          Don't have an account?{" "}
          <span onClick={() => navigate("/register")} className="link">
            Create an Account
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
