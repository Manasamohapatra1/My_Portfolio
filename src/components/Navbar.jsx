import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-scroll";
import ThemeContext from "../theme/ThemeContext";
import HeroImage from "../Assets/my-logo.png";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Add shadow when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "skill", title: "Skill" },
    { id: "project", title: "Projects" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 pt-4 md:pt-6 pointer-events-none">
      {/* The Floating Pill */}
      <div
        className={`max-w-5xl mx-auto flex justify-between items-center h-16 px-6 rounded-full pointer-events-auto transition-all duration-500 ${
          scrolled ? "shadow-[0_10px_40px_rgb(0,0,0,0.3)]" : ""
        } ${
          theme === "light"
            ? "bg-white/95 backdrop-blur-2xl border border-gray-300 text-[#0a0a0a] shadow-lg"
            : "bg-white/10 backdrop-blur-3xl border border-white/20 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]"
        }`}
      >
        {/* Logo */}
        <div className="flex-shrink-0 cursor-pointer">
          <Link to="home" smooth={true} duration={600} offset={0}>
            <img
              className={`h-8 transition-transform duration-300 hover:scale-105 ${
                theme === "light" ? "filter invert" : ""
              }`}
              src={HeroImage}
              alt="Logo"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-2 lg:gap-4">
          {navLinks.map(({ id, title }) => (
            <li key={id}>
              <Link
                to={id}
                spy={true}
                activeClass={theme === "light" ? "text-yellow-600 font-black scale-105 bg-yellow-400/20 drop-shadow-sm" : "text-[#eaff00] font-black scale-105 bg-[#eaff00]/15 drop-shadow-[0_0_8px_rgba(234,255,0,0.5)] shadow-[inset_0_0_10px_rgba(234,255,0,0.1)]"}
                smooth={true}
                duration={600}
                offset={0}
                className="cursor-pointer flex items-center justify-center px-4 py-2 rounded-full text-[10px] lg:text-xs uppercase tracking-[0.2em] font-bold text-gray-800 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-[#eaff00] hover:bg-yellow-400/10 dark:hover:bg-[#eaff00]/10 hover:scale-105 transition-all duration-300"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions (Theme Toggle & Mobile Menu) */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 ${
              theme === "light" ? "hover:bg-gray-200" : "hover:bg-white/10"
            }`}
          >
            {theme === "light" ? (
              <FiSun className="text-lg text-black" />
            ) : (
              <FiMoon className="text-lg text-[#eaff00]" />
            )}
          </button>

          <button
            onClick={toggleMenu}
            className={`md:hidden flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 ${
              theme === "light" ? "hover:bg-gray-200" : "hover:bg-white/10"
            }`}
          >
            {isOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-24 left-4 right-4 md:hidden rounded-3xl overflow-hidden pointer-events-auto border ${
              theme === "light"
                ? "bg-white/95 backdrop-blur-2xl border-gray-200 shadow-2xl"
                : "bg-[#111827]/95 backdrop-blur-2xl border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.5)]"
            }`}
          >
            <ul className="flex flex-col items-center py-6 gap-6">
              {navLinks.map(({ id, title }) => (
                <li key={id}>
                  <Link
                    to={id}
                    onClick={toggleMenu}
                    smooth={true}
                    duration={600}
                    offset={0}
                    className="cursor-pointer inline-block text-sm uppercase tracking-[0.2em] font-black text-gray-500 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-[#eaff00] hover:scale-110 transition-all duration-300"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
