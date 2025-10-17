import React, { useState } from "react";
import "./Latestjobs.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from "./assets/dhatvi.jpg";

const jobs = [
  { title: "Sr. Web Developer", description: "Responsible for developing and maintaining dynamic web applications. Requires strong skills in JavaScript, React, and backend APIs." },
  { title: "Software Trainee", description: "Learn and assist in software development tasks. A great opportunity for freshers to gain hands-on experience with modern technologies." },
  { title: "Project Manager", description: "Lead project teams, plan deliverables, and ensure timely project completion. Excellent communication and leadership skills required." },
  { title: "UI/UX Designer", description: "Design intuitive and engaging interfaces for web and mobile applications. Must have experience with Figma, Adobe XD, or similar tools." },
  { title: "FrontEnd React Developer", description: "Develop responsive web interfaces using React.js, Tailwind, and REST APIs. Prior experience in front-end optimization is a plus." },
  { title: "Frontdesk", description: "Responsible for managing front desk operations and providing excellent customer support and office assistance." },
];

function Latestjobs({ subscribeRef }) {
  const [selectedJob, setSelectedJob] = useState(null);
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleOpen = (job) => setSelectedJob(job);
  const handleClose = () => setSelectedJob(null);

  const handleSubscribe = () => {
    if (email.trim() === "") {
      alert("Please enter your email before subscribing!");
      return;
    }
    setShowPopup(true);
    setEmail("");

    // Auto close popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <>
      <section className="latest-jobs">
        <h2 className="latest-jobs__title">Latest Jobs</h2>
        <h3 className="latest-jobs__subtitle">A Rewarding Career Awaits For You !</h3>

        <div className="latest-jobs__list">
          {jobs.map((job) => (
            <button key={job.title} className="latest-jobs__button" onClick={() => handleOpen(job)}>
              {job.title}
              <span className="latest-jobs__plus">+</span>
            </button>
          ))}
        </div>

        <section className="hero">
          <div className="hero__overlay">
            <div className="hero__content">
              <h1 className="hero__title">Let’s Make the Most Unique Ideas Together</h1>
              <button className="hero__cta">Apply Now →</button>
            </div>
          </div>
        </section>
      </section>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedJob.title}</h2>
            <p>{selectedJob.description}</p>
            <button className="apply-btn">Apply Now →</button>
            <button className="close-btn" onClick={handleClose}>✖</button>
          </div>
        </div>
      )}

      {/* Newsletter Section with ref */}
      <footer className="footer-subscribe" ref={subscribeRef}>
        <div className="footer-subscribe__newsletter">
          <h2 className="footer-subscribe__title">Subscribe Newsletters</h2>
          <div className="footer-subscribe__form-wrapper">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="footer-subscribe__input"
              placeholder="Enter your email"
            />
            <button className="footer-subscribe__button" onClick={handleSubscribe}>
              Subscribe Now
            </button>
          </div>
        </div>

        <div className="footer">
          <div className="footer-subscribe__links">
            <a href="/about">About us</a>
            <a href="/discover">Discover</a>
            <a href="/explore">Explore</a>
          </div>

          <div className="social-links">
            <a href="https://facebook.com/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className="footerlast">
          <div className="footer-subscribe__bottom">
            <p>© 2025 Dhavti Business Solutions. All rights reserved.</p>
            <img src={Logo} alt="logo" className="logo" />
            <div className="footer-subscribe__legal">
              <a href="/terms">Terms of Service</a>
              <span> | </span>
              <a href="/privacy">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Subscription Confirmation Popup */}
{/* Top Toast Notification */}
{showPopup && (
  <div className="toast-notification success top">
    🎉 You have been successfully subscribed to <strong>DhaTvi Business Solutions!</strong>
  </div>
)}


    </>
  );
}

export default Latestjobs;
