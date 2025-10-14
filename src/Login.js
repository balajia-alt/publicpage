import React, { useState } from "react";
import logo from "./assets/bs.jpeg";
import "./Login.css";
import WelcomeImg from "./assets/TeamWork.jpg";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // 👈 Import icons

function Login({ onLoginSuccess }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // 👁️ toggle state

  return (
    <>
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

          <form
            className="login-form"
            onSubmit={(e) => {
              e.preventDefault();
              if (onLoginSuccess) onLoginSuccess();
            }}
          >
            <label>Email / Mobile Number</label>
            <input type="email" placeholder="Enter your email or mobile" />

            <label>Password</label>
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
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
            <button type="submit">Login</button>
          </form>

          <p className="create-account">
            Don't have an account?{" "}
            <span onClick={() => navigate("/register")} className="link">
              Create an Account
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
