// src/components/NavBar.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../theme/ThemeContext";
import HeroImage from "../Assets/my-logo.png";
import { FiMoon, FiSun } from "react-icons/fi";

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-20">
      <div>
        <img className="object-scale-down h-16 w-56" src={HeroImage} alt="" />
      </div>

      <ul className="hidden md:flex">
        <Link to="/">
          <li className="px-4 cursor-pointer text-2xl capitalize font-medium text-gray-500 hover:scale-105 duration-200">
            Home
          </li>
        </Link>
        <Link to="/about">
          <li className="px-4 cursor-pointer text-2xl capitalize font-medium text-gray-500 hover:scale-105 duration-200">
            About
          </li>
        </Link>
        <Link to="/skill">
          <li className="px-4 cursor-pointer text-2xl capitalize font-medium text-gray-500 hover:scale-105 duration-200">
            Skill
          </li>
        </Link>
        <Link to="/project">
          <li className="px-4 cursor-pointer text-2xl capitalize font-medium text-gray-500 hover:scale-105 duration-200">
            Projects
          </li>
        </Link>
        <Link to="/contactme">
          <li className="px-4 cursor-pointer text-2xl capitalize font-medium text-gray-500 hover:scale-105 duration-200">
            Contact
          </li>
        </Link>
      </ul>

      <button
        onClick={toggleTheme}
        className="text-2xl px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
      >
        {theme === "light" ? (
          <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
        ) : (
          <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
        )}
      </button>
    </div>
  );
};

export default NavBar;
