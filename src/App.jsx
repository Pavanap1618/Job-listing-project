/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Jobslist from "./components/Jobslist";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Final from "./components/Final";

import Footer from "./components/Footer";



const App = () => {
  return (
    <Router>
     
      <Routes>
      <Route path="/" element={<Final />} />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/hero" element={<HeroSection />} />
      <Route path="/jobs" element={<Jobslist />} />
      {/* <Route path="/jobform" element={<JobForm />} /> */}
      <Route path="/foot" element={<Footer />} />

      
       
      </Routes>
    </Router>
  );
};

export default App;
