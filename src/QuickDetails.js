import React, { useState } from "react";
import "./QuickDetails.css";
import Logo from "./assets/dhatvi.jpg";

const QuickDetails = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    alternatePhone: "",
    course: "",
    yearOfPassing: "",
    college: "",
    university: "",
    cgpa: "",
    employeeType: "Fresher",
    companyName: "",
    experienceYears: "",
    resume: null, // ✅ Add resume state
    skills:"",
  });

  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "email") {
      if (value && !value.endsWith("@gmail.com")) {
        setEmailError(
          "Please enter a valid Gmail address (e.g., example@gmail.com)"
        );
      } else {
        setEmailError("");
      }
    }

    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] }); // store the selected file
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailError) {
      alert("Please fix the email error before submitting.");
      return;
    }

    console.log("Form Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="quick-details-container">
      <div className="quick-details-container-header">
        <img src={Logo} alt="Logo" className="logo" />
        <div className="logo-text">
          <span className="dhatvi-text">DhaTvi</span>
          <div className="green-line"></div>
          <span className="business-text">BUSINESS SOLUTIONS PVT. LTD</span>
        </div>
      </div>

      <h2 className="quick-details-title">Basic Details</h2>

      <form className="details-form" onSubmit={handleSubmit}>
        {/* Full Name */}
        <label>Full name</label>
        <div className="name-row">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <label>Email ID *</label>
        <div className="email-row">
          <input
            type="email"
            name="email"
            placeholder="Enter your Gmail ID"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {emailError && <p className="email-error">{emailError}</p>}
        </div>

        {/* Phone */}
        <label>Phone Number *</label>
        <div className="phone-row">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="alternatePhone"
            placeholder="Alternate Number"
            value={formData.alternatePhone}
            onChange={handleChange}
          />
        </div>
        <label>Highest Qualification (B-Tech/Degree))</label>

        {/* Highest Qualification */}
        <div className="highest-qualification-course-row">
          <input
            type="text"
            name="course"
            placeholder="Course"
            value={formData.course}
            onChange={handleChange}
            required
          />
          <div className="year-of-passing">
          <select
            name="yearOfPassing"
            value={formData.yearOfPassing}
            onChange={handleChange}
            required
          >
            <option value="">Year of Passing</option>
            {Array.from({ length: 15 }, (_, i) => 2025 - i).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          </div>
        </div>

        {/* College + CGPA */}
        <div className="college-name">
          <input
            type="text"
            name="college"
            placeholder="College Name"
            value={formData.college}
            onChange={handleChange}
            required
          />
          </div>
          <div className="cgpa-row">
          <input
            type="text"
            name="cgpa"
            placeholder="CGPA"
            value={formData.cgpa}
            onChange={handleChange}
          />
        </div>


        {/* Employee Type */}
        <label>Employee Type</label>
        <div className="employee-type">
          <label>
            <input
              type="radio"
              name="employeeType"
              value="Fresher"
              checked={formData.employeeType === "Fresher"}
              onChange={handleChange}
            />
            Fresher
          </label>
          <label>
            <input
              type="radio"
              name="employeeType"
              value="Experience"
              checked={formData.employeeType === "Experience"}
              onChange={handleChange}
            />
            Experience
          </label>
        </div>
        {/* Add this after Employee Type / Experience section */}
{formData.employeeType === "Fresher" && (
  <div className="skills-section">
    <label>Skills *</label>
    <input
      type="text"
      name="skills"
      placeholder="Enter your skills (comma separated)"
      value={formData.skills || ""}
      onChange={handleChange}
      required
    />
  </div>
)}

{formData.employeeType === "Experience" && (
  <div className="skills-section">
    <label>Skills *</label>
    <input
      type="text"
      name="skills"
      placeholder="Enter your skills (comma separated)"
      value={formData.skills || ""}
      onChange={handleChange}
      required
    />
  </div>
)}


        {/* Experience Section */}
        {formData.employeeType === "Experience" && (
            <>
            
          <div className="experience-section">
            <label>Current Company Name</label>
            <input className="current-company-input"
              type="text"
              name="companyName"
              placeholder="Enter Current Company Name"
              value={formData.companyName}
              onChange={handleChange}
              required
            />

            <label>Experience</label>
            <div className="experience-years">
            <select
              name="experienceYears"
              value={formData.experienceYears}
              onChange={handleChange}
              required
            >
              <option value="">Select Experience</option>
              <option value="Less than 1 Year">Less than 1 Year</option>
              <option value="1 Year">1-2 Years</option>
              <option value="2 Years">2-3 Years</option>
              <option value="3 Years">3-4 Years</option>
              <option value="4 Years">4-5 Years</option>
              <option value="5+ Years">5+ Years</option>
            </select>
            </div>
           </div>
            </>
        )}

        {/* ✅ Resume Upload */}
        <div className="resume-upload">
          <label>Upload Resume *</label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit */}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default QuickDetails;
