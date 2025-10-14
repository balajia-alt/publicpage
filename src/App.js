import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Login from "./Login";
import Register from "./Register";
// import SetPassword from "./SetPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/setpassword" element={<SetPassword />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
