import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import Experience from "../../pages/Experience";
import Skills from "../../pages/Skills";
import Portfolio from "../../pages/Portfolio";
import Contact from "../../pages/Contact";

function WebRoutes() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default WebRoutes;
