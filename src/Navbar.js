import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import Logo from "./assets/dhatvi.jpg";

 import { useNavigate } from "react-router-dom";

const Navbar = ({ scrollToAbout, scrollToJobs, scrollToSubscribe }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        <li onClick={scrollToAbout}>What we do</li>
        <li onClick={scrollToJobs}>Careers</li>
        <li onClick={scrollToSubscribe}>Join Talent Network</li>
        <li>


      <button className="login-btn" onClick={() => navigate("/login")}>
        Login →
        </button>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;
