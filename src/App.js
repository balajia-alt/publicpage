import React, { useRef } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import SearchSection from "./SearchSection";
import AboutSection from "./AboutSection";
import Latestjobs from "./Latestjobs";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import QuickDetails from "./QuickDetails";
import PersonIndex from "./components/PersonIndex";
import "./App.css";
import Job from "./Job";
import JobDetail from "./components/JobDetail";
import Contact from "./components/Contact";
// import JobList2 from "./components/JobList2";
import SavedJobList from "./SavedJobList";
import AppliedJobList from "./AppliedJobList";



// Layout component to conditionally show Navbar
function Layout({ children, aboutRef, jobsRef, subscribeRef }) {
  const location = useLocation();

  // Paths where Navbar should NOT appear
  const hideNavbarPaths = ["/login", "/register"];

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && (
        <Navbar
          scrollToAbout={() => aboutRef.current?.scrollIntoView({ behavior: "smooth" })}
          scrollToJobs={() => jobsRef.current?.scrollIntoView({ behavior: "smooth" })}
          scrollToSubscribe={() => subscribeRef.current?.scrollIntoView({ behavior: "smooth" })}
        />
      )}
      {children}
    </>
  );
}

function App() {
  const aboutRef = useRef(null);
  const jobsRef = useRef(null);
  const subscribeRef = useRef(null);

  return (
    <BrowserRouter>
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <Layout aboutRef={aboutRef} jobsRef={jobsRef} subscribeRef={subscribeRef}>
              <>
                <HeroSection />
                <SearchSection />
                <div ref={aboutRef}>
                  <AboutSection />
                </div>
                <div ref={jobsRef}>
                  <Latestjobs subscribeRef={subscribeRef} />
                </div>
                  <div>
     
    </div>
              </>
            </Layout>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/quickdetails" element={<QuickDetails />} />
        <Route path="/apply" element={<PersonIndex />} />
        <Route path="/jobs" element={<Job/>} />
        <Route path="/job/:id" element={<JobDetail/>} />
        <Route path="/contact" element={<Contact/>} />
        {/* <Route path="/joblist2"element={<JobList2/>} /> */}
        <Route path="/savedjoblist" element={<SavedJobList/>} />
        <Route path="/appliedjoblist" element={<AppliedJobList/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
