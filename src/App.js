// src/App.js
import React, { useContext } from "react";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import SocialLinks from "./components/SocialLinks";
import Projects from "./components/Project";
import Skill from "./components/Skill";
import Contact from "./components/ContactMe";
import ThemeContext from "./theme/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen transition-colors duration-700 ${
        theme === "dark"
          ? "bg-[#0a0a0a] text-[#ffffff] selection:bg-[#eaff00]/30 selection:text-black"
          : "bg-[#ffffff] text-[#0a0a0a] selection:bg-[#eaff00]/40 selection:text-black"
      }`}
    >
      <NavBar />
      <SocialLinks />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skill">
        <Skill />
      </div>
      <div id="project">
        <Projects />
      </div>
      <div id="contactme">
        <Contact />
      </div>
    </div>
  );
}

export default App;
