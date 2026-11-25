import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Popup from './pages/Popup/popup'
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Projects from "./pages/Projects/Projects";
import WhyUs from "./pages/WhyUs/WhyUs";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Helicopter from "./components/Helicopter/Helicopter";
import ScrollToTop from "./components/ScrollTOTop/ScrollTOTop";
import Preloader from "./components/Preloader/Preloader";
const App = () => {
  return (
    <BrowserRouter>
    <Preloader/>
   
      <ScrollToTop />

      <Navbar />
 <Popup/>
      <Helicopter />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;