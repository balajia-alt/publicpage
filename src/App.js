
import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import SearchSection from "./SearchSection";
import "./App.css";
import AboutSection from "./AboutSection";
import Latestjobs from "./Latestjobs";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";


function App() {
  return (
    <div>
      
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
