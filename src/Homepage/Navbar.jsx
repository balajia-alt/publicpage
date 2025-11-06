import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import Logo from "../assets/dhatvi.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdOutlinePhotoCamera } from "react-icons/md";

const Navbar = ({ scrollToAbout, scrollToJobs, scrollToSubscribe }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [appliedJobsCount, setAppliedJobsCount] = useState(0);
  const [savedJobsCount, setSavedJobsCount] = useState(0);
  const [profilePic, setProfilePic] = useState(null);
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState("");

  const dropdownRef = useRef(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  // Load user data
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    const email = localStorage.getItem("userEmail");
    const name = localStorage.getItem("userName") || "User";
    const pic = localStorage.getItem("profilePic");
    const appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

    if (loggedIn === "true") {
      setIsLoggedIn(true);
      setUserEmail(email || "");
      setUserName(name);
      setProfilePic(pic);
    }

    setAppliedJobsCount(appliedJobs.length);
    setSavedJobsCount(savedJobs.length);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    localStorage.removeItem("profilePic");
    setIsLoggedIn(false);
    navigate("/");
  };

  // Handle photo upload
 const handleFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result;
      setProfilePic(base64);
      localStorage.setItem("profilePic", base64);
      setDropdownOpen(false);
      setTimeout(() => setDropdownOpen(true), 100);
    };
    reader.readAsDataURL(file);
  }
};


  // Handle name edit
  const handleEditClick = () => {
    setIsEditingName(true);
    setTempName(userName);
  };

  const handleNameSave = () => {
    if (tempName.trim() !== "") {
      setUserName(tempName);
      localStorage.setItem("userName", tempName);
    }
    setIsEditingName(false);
  };

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
        <li>
          <Link to={"/jobs"}>Careers</Link>
        </li>
        <li onClick={scrollToAbout}>What we do</li>
        <li onClick={scrollToSubscribe}>Join Talent Network</li>

        <li ref={dropdownRef}>
          {!isLoggedIn ? (
            <button className="login-btn-nav" onClick={() => navigate("/login")}>
              Login →
            </button>
          ) : (
            <div
              className="profile-dropdown"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <FaUserCircle size={25} className="profile-icon" />
             

              {dropdownOpen && (
                <div className="dropdown-menu modern-profile-dropdown">
                  
                  <div className="profile-header">
                    <div className="profile-pic-container">
                      {profilePic ? (
                        <img
                          src={profilePic}
                          alt="Profile"
                          className="profile-pic-img"
                        />
                      ) : (
                        <FaUserCircle className="profile-pic" />
                      )}
                      <div
                        className="camera-icon"
                        onClick={() => fileInputRef.current.click()}
                      >
                        <MdOutlinePhotoCamera />
                      </div>
                      <input
                        type="file"
                        ref={fileInputRef}
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                      />
                    </div>

                    <div className="profile-info">
                      <div className="profile-name-section">
                        {isEditingName ? (
                          <>
                            <input
                              type="text"
                              value={tempName}
                              onChange={(e) => setTempName(e.target.value)}
                              onBlur={handleNameSave}
                              onKeyDown={(e) => e.key === "Enter" && handleNameSave()}
                              autoFocus
                              className="edit-name-input"
                            />
                          </>
                        ) : (
                          <>
                            <span className="profile-name-text">{userName}</span>
                            <FiEdit
                              className="edit-icon"
                              onClick={() => {
                                setDropdownOpen(false);
                                navigate("/quickdetails");  
                              }}
                            />
                          </>
                        )}
                      </div>
                      <p className="profile-email">{userEmail}</p>
                    </div>
                  </div>

                  {/* Job Stats */}
                  <div className="job-stats">
                    <div
                      className="job-box"
                      onClick={() => navigate("/appliedjoblist")}
                    >
                      <span className="job-number">{appliedJobsCount}</span>
                      <span className="job-label">Applied Jobs</span>
                    </div>
                    <div
                      className="job-box"
                      onClick={() => navigate("/savedjoblist")}
                    >
                      <span className="job-number">{savedJobsCount}</span>
                      <span className="job-label">Saved Jobs</span>
                    </div>
                  </div>

                  <button className="logout-btn" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


