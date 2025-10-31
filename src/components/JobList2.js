import React from "react";
import { FaBriefcase, FaClock, FaMapMarkerAlt, FaWallet } from "react-icons/fa";
import "./JobList2.css";
import { type } from "@testing-library/user-event/dist/type";

const JobList = () => {
  const jobs = [
    {
      title: "Frontend Developer",
      experience: "Fresher",
      category: "Software IT",
      type: "Full time",
      salary: "Rs.400000 - Rs.420000",
      location: "Hyderabad",
    },
    {
      title: "Content Writing",
      experience: "2+ yrs Experience",
      category: "Media",
      type: "Part time",
      salary: "Rs.280000 - Rs.320000",
      location: "Bangalore",
    },
    {
      title: "Backend Developer",
      experience: "Fresher",
      category: "Software IT",
      type: "Full time",
      salary: "Rs.480000 - Rs.500000",
      location: "Hyderabad",
    },
    {
      title: "Web Developer",
      experience: "VonRueden - Weber Co",
      category: "Software IT",
      type: "Full time",
      salary: "Rs.420000 - Rs.480000",
      location: "Hyderabad",
    },
    {
      title: "Graphic Designer",
      experience: "1+ yrs Experience",
      category: "Design",
      type: "Part time",
      salary: "Rs.300000 - Rs.350000",
      location: "Hyderabad",
    }
  ];

  return (
    <div className="job-list">
      {jobs.map((job, index) => (
        <div key={index} className="job-card">
          <div className="job-header">
            <h3>{job.title}</h3>
            <p className="experience">{job.experience}</p>
          </div>

          <div className="job-info">
            <div className="info-item">
              <FaBriefcase className="icon" />
              <span>{job.category}</span>
            </div>
            <div className="info-item">
              <FaClock className="icon" />
              <span>{job.type}</span>
            </div>
            <div className="info-item">
              <FaWallet className="icon" />
              <span>{job.salary}</span>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <span>{job.location}</span>
            </div>
          </div>
          <div className="job-action">
            <button className="details-btn">Job Details</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobList;
