// src/components/NavBar.jsx
import React, { useContext, useState } from "react";
// Removed Link import
import ThemeContext from "../theme/ThemeContext";
import HeroImage from "../Assets/my-logo.png";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex justify-between items-center w-full h-20 fixed top-0 z-50 transition-colors duration-700 ${
        theme === "light" 
          ? "bg-[#ffffff]/80 backdrop-blur-lg text-[#0a0a0a] shadow-sm" 
          : "bg-[#0a0a0a]/80 backdrop-blur-lg text-[#ffffff] border-b border-white/5"
      }`}
    >
      <div className="ml-8">
        <img
          className={`object-scale-down h-8 md:h-16 ${
            theme === "light" ? "filter invert" : ""
          }`}
          src={HeroImage}
          alt="Logo"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex md:font-bold">
        <a href="#home">
          <li className="px-4 cursor-pointer text-2xl capitalize font-semibold hover:scale-105 duration-200">
            Home
          </li>
        </a>
        <a href="#about">
          <li className="px-4 cursor-pointer text-2xl capitalize font-semibold hover:scale-105 duration-200">
            About
          </li>
        </a>
        <a href="#skill">
          <li className="px-4 cursor-pointer text-2xl capitalize font-semibold hover:scale-105 duration-200">
            Skill
          </li>
        </a>
        <a href="#project">
          <li className="px-4 cursor-pointer text-2xl capitalize font-semibold hover:scale-105 duration-200">
            Projects
          </li>
        </a>
        <a href="#contactme">
          <li className="px-4 cursor-pointer text-2xl capitalize font-semibold hover:scale-105 duration-200">
            Contact
          </li>
        </a>
      </ul>

      {/* Theme Toggle Button for Mobile */}

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center mr-8">
        <button onClick={toggleMenu} className="text-2xl cursor-pointer">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Theme Toggle Button for Desktop */}
      <button
        onClick={toggleTheme}
        className="hidden md:block text-2xl px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 mr-8"
      >
        {theme === "light" ? (
          <FiSun className="hover:text-gray-50 text-xl" />
        ) : (
          <FiMoon className="dark:text-ternary-light dark:hover:text-primary-light text-xl" />
        )}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul
          className={`flex flex-col items-center absolute top-20 left-0 w-full transition-colors duration-700 ${
            theme === "light" 
              ? "bg-[#ffffff]/95 backdrop-blur-xl text-[#0a0a0a]" 
              : "bg-[#0a0a0a]/95 backdrop-blur-xl text-[#ffffff]"
          } md:hidden`}
        >
          <a href="#home" onClick={toggleMenu}>
            <li className="py-4 cursor-pointer text-2xl capitalize font-medium hover:scale-105 duration-200">
              Home
            </li>
          </a>
          <a href="#about" onClick={toggleMenu}>
            <li className="py-4 cursor-pointer text-2xl capitalize font-medium hover:scale-105 duration-200">
              About
            </li>
          </a>
          <a href="#skill" onClick={toggleMenu}>
            <li className="py-4 cursor-pointer text-2xl capitalize font-medium hover:scale-105 duration-200">
              Skill
            </li>
          </a>
          <a href="#project" onClick={toggleMenu}>
            <li className="py-4 cursor-pointer text-2xl capitalize font-medium hover:scale-105 duration-200">
              Projects
            </li>
          </a>
          <a href="#contactme" onClick={toggleMenu}>
            <li className="py-4 cursor-pointer text-2xl capitalize font-medium hover:scale-105 duration-200">
              Contact
            </li>
          </a>
          <button
            onClick={() => {
              toggleTheme();
              toggleMenu();
            }}
            className="py-4 text-2xl cursor-pointer capitalize font-medium hover:scale-105 duration-200"
          >
            {theme === "light" ? (
              <FiSun className="hover:text-gray-50 text-xl" />
            ) : (
              <FiMoon className="dark:text-ternary-light dark:hover:text-primary-light text-xl" />
            )}
          </button>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
