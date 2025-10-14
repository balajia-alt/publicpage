import React from 'react'
import HeroSection from './HeroSection'
import SearchSection from './SearchSection'
import AboutSection from './AboutSection'
import Careers from './Latestjobs'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
        <Navbar />
         <HeroSection />
      <SearchSection />
      <AboutSection/>
      <Careers/>
    </div>
  )
}

export default Home