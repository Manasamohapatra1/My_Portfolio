import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  const links = [
    {
      id: 1,
      child: <FaLinkedin size={24} />,
      href: "https://www.linkedin.com/in/manasa-mohapatra-576123248/",
      label: "LinkedIn"
    },
    {
      id: 2,
      child: <FaGithub size={24} />,
      href: "https://github.com/Manasamohapatra1",
      label: "GitHub"
    },
    {
      id: 3,
      child: <HiOutlineMail size={24} />,
      href: "mailto:mohapatramanasa1@gmail.com",
      label: "Email"
    },
    {
      id: 4,
      child: <FaInstagram size={24} />,
      href: "https://www.instagram.com/manasa_mohapatra_/l",
      label: "Instagram"
    },
  ];

  return (
    <footer className="w-full py-8 border-t border-gray-200 dark:border-white/10 bg-white/5 dark:bg-[#0a0a0a]/50 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] md:text-xs font-black text-gray-400 dark:text-gray-500 tracking-[0.2em] uppercase">
          © {new Date().getFullYear()} Manasa Mohapatra
        </p>
        
        <ul className="flex items-center gap-8">
          {links.map(({ id, child, href, label }) => (
            <li key={id} className="group relative cursor-pointer text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-[#eaff00] hover:scale-110 transition-all duration-300">
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
