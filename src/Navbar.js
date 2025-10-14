import React from "react";
import "./Navbar.css";
import Logo from "./assets/dhatvi.jpg";
import { useNavigate } from "react-router-dom"; // ✅ import navigate hook

const Navbar = () => {
  const navigate = useNavigate(); // ✅ initialize navigation

  return (
    <nav className="navbar">
  <div className="logo">
  <img src={Logo} alt="DhaTvi Logo" className="logo-img" />
  <div className="logo-text">
    <span className="dhativi-text">DhaTvi</span>
    <div className="green-line"></div>
    <span className="business-text">BUSINESS SOLUTIONS PVT. LTD</span>
  </div>
</div>

      <ul className="nav-links">
        <li onClick={() => navigate("/whatwedo")}>What we do</li>
        <li onClick={() => navigate("/careers")}>Careers ▾</li>
        <li onClick={() => navigate("/talentnetwork")}>Join Talent Network</li>
      </ul>

      <button className="login-btn" onClick={() => navigate("/login")}>
        Login →
      </button>
    </nav>
  );
};

export default Navbar;
