import React, { useRef } from 'react'
import HeroSection from './HeroSection'
import SearchSection from './SearchSection'
import AboutSection from './AboutSection'

import Navbar from './Navbar'
import Latestjobs from './Latestjobs'

const Home = () => {

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

      {/* Top Sections */}
      <HeroSection />
      <SearchSection />

      {/* About Section */}
      <div ref={aboutRef}>
        <AboutSection />
      </div>

      {/* Latest Jobs Section */}
      <div ref={jobsRef}>
        <Latestjobs subscribeRef={subscribeRef} />
      </div>
    </div>
  )
}

export default Home