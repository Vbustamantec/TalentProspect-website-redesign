import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./containers/HeroSection/HeroSection";
import "./App.scss";
import About from "./containers/About/About";
import Companies from "./containers/Companies/Companies";
import Conocenos from "./containers/Conocenos/Conocenos";

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <HeroSection />
        <About />
        <Companies />
        <Conocenos />
      </div>
    </>
  );
};

export default App;
