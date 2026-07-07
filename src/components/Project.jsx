import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import anime from "../Assets/anime.jpg";
import gallery from "../Assets/gallery.jpg";
import FoodApp from "../Assets/Food.png";
import PortfolioImg from "../Assets/portfolio.png";

// High-End Animation Variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

const Projects = () => {
  const projectList = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80", // Formula 1 Racing & High Speed Telemetry
      badge: "01 // DATA PIPELINE",
      title: "ApexPipe – F1 Telemetry ETL Pipeline",
      description: "A containerized ETL data pipeline via Apache Airflow and FastF1 to extract high-frequency API telemetry, storing historical racing data in a serverless Neon PostgreSQL warehouse. Features an idempotent architecture & Plotly Streamlit analytics.",
      techStack: ["Apache Airflow", "FastF1", "Neon SQL", "Streamlit", "Docker", "Python"],
      demoHref: "https://apexpipe.streamlit.app/",
      codeHref: "https://github.com/Manasamohapatra1/f1-telemetry-pipeline",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80", // Modern Project Management & Team Collaboration
      badge: "02 // FULL STACK WEB APP",
      title: "Simplified Jira – Project & Task Manager",
      description: "A full-stack project management tool for managing projects, tasks, and team collaborations with role-based access control. Features isolated project-user mapping, user roles, and GitHub-triggered CI/CD deployments on Vercel & Railway.",
      techStack: ["React.js", "Node.js", "Express", "PostgreSQL", "RBAC", "Vercel", "Railway"],
      demoHref: "https://simplified-jira.vercel.app/",
      codeHref: "https://github.com/Manasamohapatra1/simplified-jira",
    },
    {
      id: 3,
      src: PortfolioImg,
      badge: "03 // FRONTEND ARCHITECTURE",
      title: "Developer Portfolio Showcase",
      description: "A high-end, animated personal portfolio with glassmorphism, spring physics, dynamic scroll detection, and editorial design systems built for maximum visual impact and smooth user interactions.",
      techStack: ["React.js", "Tailwind CSS", "Framer Motion", "UI/UX"],
      demoHref: "http://my-portfolio-f01a6zkl8-manasamohapatra1.vercel.app",
      codeHref: "https://github.com/Manasamohapatra1/My_Portfolio",
    },
    {
      id: 4,
      src: anime,
      badge: "04 // REAL-TIME WEB APP",
      title: "Anime Saga Database",
      description: "A fully responsive anime discovery platform utilizing the Jikan REST API for real-time fetching, dynamic search, and detailed character/episode breakdowns with smooth asynchronous rendering.",
      techStack: ["HTML5", "CSS3", "JavaScript", "REST API"],
      demoHref: "https://anime-saga.netlify.app",
      codeHref: "https://github.com/Manasamohapatra1/Anime-Web-App",
    },
    {
      id: 5,
      src: gallery,
      badge: "05 // UI/UX DESIGN",
      title: "My Moments Photo Gallery",
      description: "A visually immersive, responsive photo gallery focusing on modern CSS Grid architectures, seamless hover animations, and clean minimalist editorial aesthetics.",
      techStack: ["HTML5", "CSS3", "Responsive Grid"],
      demoHref: "https://my-moments.netlify.app",
      codeHref: "https://github.com/Manasamohapatra1/mygallery.github.io",
    },
    {
      id: 6,
      src: FoodApp,
      badge: "06 // MOBILE APPLICATION",
      title: "Food Delivery Android App",
      description: "A native Android application featuring intuitive user onboarding flows, custom UI architecture, and robust menu/cart navigation engineered with Java and XML.",
      techStack: ["Java", "Android Studio", "XML", "Mobile UI"],
      demoHref: "https://github.com/Manasamohapatra1/foodApp",
      codeHref: "https://github.com/Manasamohapatra1/foodApp",
    },
  ];

  return (
    <section name="project" className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden pt-24 pb-16">

      {/* Background Ambience */}
      <div className="absolute top-[15%] right-[10%] w-[350px] h-[350px] bg-yellow-400/5 dark:bg-[#eaff00]/5 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[15%] left-[5%] w-[300px] h-[300px] bg-yellow-400/5 dark:bg-[#eaff00]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 dark:border-white/10 pb-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-[2px] bg-yellow-500 dark:bg-[#eaff00]"></div>
              <p className="text-yellow-600 dark:text-[#eaff00] font-mono text-xs tracking-[0.2em] uppercase font-bold">My Work</p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0a0a0a] dark:text-[#ffffff] tracking-tighter leading-[1.1]">
              FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300 dark:from-[#eaff00] dark:to-white">PROJECTS</span>
            </h2>
          </div>
        </motion.div>

        {/* Compact 3-Column Bento Grid with Thematic Photography */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projectList.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative rounded-2xl overflow-hidden bg-white/80 dark:bg-[#111827]/70 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-md hover:shadow-xl flex flex-col justify-between hover:border-yellow-500/50 dark:hover:border-[#eaff00]/50 transition-all duration-300"
            >
              {/* Top: Thematic Project Photograph */}
              <div className="relative h-44 md:h-48 w-full overflow-hidden border-b border-gray-200 dark:border-white/10 bg-gray-900">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-60 dark:opacity-80"></div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-0.5 bg-black/70 backdrop-blur-md border border-white/10 rounded-full z-20">
                  <span className="text-[9px] font-mono font-bold tracking-widest text-yellow-400 dark:text-[#eaff00] uppercase">
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Bottom: Compact Editorial Content */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-base md:text-lg font-black text-[#0a0a0a] dark:text-white tracking-tight group-hover:text-yellow-600 dark:group-hover:text-[#eaff00] transition-colors mb-2 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 font-normal leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-yellow-700 dark:text-[#eaff00] bg-yellow-400/10 dark:bg-[#eaff00]/10 rounded border border-yellow-500/20 dark:border-[#eaff00]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Compact Action Toolbar */}
                  <div className="flex items-center gap-2 pt-3 border-t border-gray-200 dark:border-white/10">
                    <a
                      href={project.demoHref}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-yellow-400 dark:bg-[#eaff00] hover:bg-yellow-500 dark:hover:bg-white text-black font-black text-[11px] uppercase tracking-wider rounded-lg transition-all shadow-[0_0_12px_rgba(234,255,0,0.15)] hover:scale-[1.02]"
                    >
                      <FaExternalLinkAlt size={10} /> Live Demo
                    </a>
                    <a
                      href={project.codeHref}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-[#0a0a0a] dark:text-white border border-gray-300 dark:border-white/15 font-bold text-[11px] uppercase tracking-wider rounded-lg transition-all hover:scale-[1.02]"
                    >
                      <FaGithub size={12} /> Source
                    </a>
                  </div>
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
