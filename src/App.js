// src/App.js
import React, { useContext } from "react";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import SocialLinks from "./components/SocialLinks";
import Projects from "./components/Project";
import Skill from "./components/Skill";
import Contact from "./components/ContactMe";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ThemeContext from "./theme/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar /> <Home />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <NavBar /> <About />
        </>
      ),
    },
    {
      path: "/project",
      element: (
        <>
          <NavBar /> <Projects />
        </>
      ),
    },
    {
      path: "/skill",
      element: (
        <>
          <NavBar />
          <Skill />
        </>
      ),
    },
    {
      path: "/contactme",
      element: (
        <>
          <NavBar />
          <Contact />
        </>
      ),
    },
  ]);

  return (
    <div
      className={`min-h-screen ${
        theme === "dark"
          ? "bg-gradient-to-t from-[#1c3a5f] to-[#011940] text-white "
          : "bg-gradient-to-t from-[#edf3f3] to-[#badeb1] text-black "
      }`}
    >
      <SocialLinks />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
