import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./containers/HeroSection/HeroSection";
import About from "./containers/About/About";
import Companies from "./containers/Companies/Companies";
import Conocenos from "./containers/Conocenos/Conocenos";
import Contact from "./containers/Contact/Contact";
import "./App.scss";
import Footer from "./containers/Footer/Footer";

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <HeroSection />
        <About />
        <Companies />
        <Conocenos />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
