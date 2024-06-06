// src/components/NavBar.jsx
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
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
      className={`flex justify-between items-center w-full h-20 fixed z-20 ${
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
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
      <ul className="hidden md:flex">
        <Link to="/">
          <li className="px-4 cursor-pointer text-2xl capitalize font-medium hover:scale-105 duration-200">
            Home
          </li>
        </Link>
        <Link to="/about">
          <li className="px-4 cursor-pointer text-2xl capitalize font-medium hover:scale-105 duration-200">
            About
          </li>
        </Link>
        <Link to="/skill">
          <li className="px-4 cursor-pointer text-2xl capitalize font-medium hover:scale-105 duration-200">
            Skill
          </li>
        </Link>
        <Link to="/project">
          <li className="px-4 cursor-pointer text-2xl capitalize font-medium hover:scale-105 duration-200">
            Projects
          </li>
        </Link>
        <Link to="/contactme">
          <li className="px-4 cursor-pointer text-2xl capitalize font-medium hover:scale-105 duration-200">
            Contact
          </li>
        </Link>
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
          className={`flex flex-col items-center absolute top-20 left-0 w-full ${
            theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
          } md:hidden`}
        >
          <Link to="/" onClick={toggleMenu}>
            <li className="py-4 cursor-pointer text-2xl capitalize font-medium hover:scale-105 duration-200">
              Home
            </li>
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            <li className="py-4 cursor-pointer text-2xl capitalize font-medium hover:scale-105 duration-200">
              About
            </li>
          </Link>
          <Link to="/skill" onClick={toggleMenu}>
            <li className="py-4 cursor-pointer text-2xl capitalize font-medium hover:scale-105 duration-200">
              Skill
            </li>
          </Link>
          <Link to="/project" onClick={toggleMenu}>
            <li className="py-4 cursor-pointer text-2xl capitalize font-medium hover:scale-105 duration-200">
              Projects
            </li>
          </Link>
          <Link to="/contactme" onClick={toggleMenu}>
            <li className="py-4 cursor-pointer text-2xl capitalize font-medium hover:scale-105 duration-200">
              Contact
            </li>
          </Link>
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
