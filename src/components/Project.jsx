import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import anime from "../Assets/anime.jpg";
import gallery from "../Assets/gallery.jpg";
import FoodApp from "../Assets/Food.png";
import Timer from "../Assets/trial.jpg";
import Portfolio from "../Assets/portfolio.png";
import calculator from "../Assets/calulator-hand-760.jpg";

// High-End Animation Variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 20 }
  }
};

const Projects = () => {
  const projectList = [
    {
      id: 1,
      src: anime,
      title: "Anime Saga",
      description: "A fully responsive anime database utilizing the Jikan API for real-time fetching.",
      techStack: ["HTML5", "CSS3", "JavaScript", "API"],
      demoHref: "https://anime-saga.netlify.app",
      codeHref: "https://github.com/Manasamohapatra1/Anime-Web-App",
    },
    {
      id: 2,
      src: gallery,
      title: "My Moments",
      description: "A visually immersive photo gallery focusing on CSS Grid and responsive UI design.",
      techStack: ["HTML5", "CSS3"],
      demoHref: "https://my-moments.netlify.app",
      codeHref: "https://github.com/Manasamohapatra1/mygallery.github.io",
    },
    {
      id: 3,
      src: FoodApp,
      title: "Food Delivery App",
      description: "An Android application featuring functional onboarding flows and UI architecture.",
      techStack: ["Java", "Android Studio"],
      demoHref: "https://github.com/Manasamohapatra1/foodApp",
      codeHref: "https://github.com/Manasamohapatra1/foodApp",
    },
    {
      id: 4,
      src: Timer,
      title: "Pro Timer",
      description: "A precision stopwatch and timer application built with pure vanilla JavaScript.",
      techStack: ["JavaScript", "HTML5", "CSS3"],
      demoHref: "https://manasamohapatra1.github.io/timer.github.io/",
      codeHref: "https://github.com/Manasamohapatra1/timer.github.io",
    },
    {
      id: 5,
      src: Portfolio,
      title: "Developer Portfolio",
      description: "A high-end, animated personal portfolio with glassmorphism and spring physics.",
      techStack: ["React.js", "Tailwind", "Framer Motion"],
      demoHref: "http://my-portfolio-f01a6zkl8-manasamohapatra1.vercel.app",
      codeHref: "https://github.com/Manasamohapatra1/My_Portfolio",
    },
    {
      id: 6,
      src: calculator,
      title: "Smart Calculator",
      description: "A sleek, responsive calculator app with real-time expression evaluation.",
      techStack: ["JavaScript", "CSS3"],
      demoHref: "https://manasamohapatra1.github.io/calculator/",
      codeHref: "https://github.com/Manasamohapatra1/calculator",
    },
  ];

  return (
    <section name="project" className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden py-28">
      
      {/* Background Ambience */}
      <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] bg-yellow-400/5 dark:bg-[#eaff00]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] bg-yellow-400/5 dark:bg-[#eaff00]/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header (Aligned with Skill/About) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-16"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-[2px] bg-yellow-400 dark:bg-[#eaff00]"></div>
            <p className="text-yellow-600 dark:text-[#eaff00] font-mono text-xs tracking-[0.2em] uppercase font-bold">My Work</p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0a0a0a] dark:text-[#ffffff] tracking-tighter leading-[1.1] mb-6">
            FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300 dark:from-[#eaff00] dark:to-white">PROJECTS</span>
          </h2>
        </motion.div>

        {/* Cinematic Grid */}
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
        >
          {projectList.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative h-[220px] md:h-[260px] lg:h-[280px] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-[#111827] cursor-pointer"
            >
              {/* Project Image (Grayscale by default to match Dark Tech Theme) */}
              <img
                src={project.src}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 grayscale-[0.8] opacity-40 group-hover:grayscale-0 group-hover:opacity-100"
              />
              
              {/* Dark Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Border Glow Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-400/50 dark:group-hover:border-[#eaff00]/50 rounded-3xl transition-colors duration-500 z-20 pointer-events-none"></div>

              {/* Default State (Always visible title) */}
              <div className="absolute bottom-0 left-0 w-full p-4 md:p-5 transition-transform duration-500 group-hover:-translate-y-4">
                <h3 className="text-white font-black text-lg md:text-xl tracking-wide drop-shadow-md">{project.title}</h3>
              </div>

              {/* Reveal Content (Slides up on hover) */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5 z-10 translate-y-[100%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out pb-10 md:pb-12">
                <p className="text-white/80 text-[11px] md:text-xs font-medium leading-relaxed mb-3 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="px-2 py-0.5 text-[9px] md:text-[10px] uppercase tracking-wider font-bold text-yellow-400 dark:text-[#eaff00] bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <a 
                    href={project.demoHref} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-1.5 md:py-2 bg-yellow-400 dark:bg-[#eaff00] hover:bg-yellow-500 dark:hover:bg-white text-black font-bold text-[10px] md:text-xs rounded-lg md:rounded-xl transition-colors shadow-[0_0_15px_rgba(234,255,0,0.3)]"
                  >
                    <FaExternalLinkAlt size={10} /> Live Demo
                  </a>
                  <a 
                    href={project.codeHref} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-1.5 md:py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-bold text-[10px] md:text-xs rounded-lg md:rounded-xl transition-colors"
                  >
                    <FaGithub size={12} /> Source
                  </a>
                </div>
              </div>
              
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
