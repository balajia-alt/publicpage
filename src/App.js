import React, { useRef } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import SearchSection from "./SearchSection";
import AboutSection from "./AboutSection";
import Latestjobs from "./Latestjobs";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuickDetails  from "./QuickDetails";
import PersonIndex from "./components/PersonIndex";


function App() {
  // Refs for scrolling
  const aboutRef = useRef(null);
  const jobsRef = useRef(null);
  const subscribeRef = useRef(null);

  const scrollToAbout = () => aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToJobs = () => jobsRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToSubscribe = () => subscribeRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div>
       <Navbar
        scrollToAbout={scrollToAbout}
        scrollToJobs={scrollToJobs}
        scrollToSubscribe={scrollToSubscribe}
      />

      
      <HeroSection />
      <SearchSection />

     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/apply" element={<PersonIndex/>}/>
     </Routes>
     </BrowserRouter>
     
      <div ref={aboutRef}>
        <AboutSection />
      </div>

    
      <div ref={jobsRef}>
        <Latestjobs subscribeRef={subscribeRef} />
      </div> 

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/quickdetails" element={<QuickDetails />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
