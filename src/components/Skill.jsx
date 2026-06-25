import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiPandas, SiPostman, SiCplusplus, SiC, SiVisualstudiocode } from "react-icons/si";

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

const iconContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 12 }
  }
};

// Floating Tech Particles Component
const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = [...Array(15)].map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      rotate: Math.random() * 360,
      scale: Math.random() * 1.5 + 0.5,
      duration: Math.random() * 10 + 15,
      symbol: ["{ }", "</>", "[ ]", "()"][Math.floor(Math.random() * 4)]
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute text-yellow-500/10 dark:text-[#eaff00]/10 font-mono text-2xl font-bold"
          initial={{ x: p.x, y: p.y, rotate: p.rotate, scale: p.scale }}
          animate={{
            y: [p.y, p.y - 400],
            rotate: [p.rotate, p.rotate + 180],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {p.symbol}
        </motion.div>
      ))}
    </div>
  );
};

const SkillCategory = ({ title, skills, gridClass = "grid-cols-2" }) => (
  <motion.div
    variants={cardVariants}
    className="relative h-full bg-white/60 dark:bg-[#111827]/60 backdrop-blur-xl p-4 lg:p-5 rounded-3xl border border-gray-100 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)] group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(234,255,0,0.1)] hover:border-yellow-400/50 dark:hover:border-[#eaff00]/50 transition-all duration-500 overflow-hidden z-10 flex flex-col"
  >
    {/* Internal Card Glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

    <h3 className="relative text-sm md:text-base font-black text-[#0a0a0a] dark:text-[#ffffff] mb-4 lg:mb-5 flex items-center gap-2 z-10">
      <span className="w-6 h-[3px] bg-gradient-to-r from-yellow-400 to-yellow-600 dark:from-[#eaff00] dark:to-yellow-500 rounded-full"></span>
      {title}
    </h3>
    
    <motion.div 
      variants={iconContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`grid ${gridClass} gap-x-2 gap-y-4 relative z-10 mt-auto`}
    >
      {skills.map((skill, index) => (
        <motion.div key={index} variants={iconVariants} className="flex items-center gap-2 group/item relative">
          
          {/* The Motherboard Aura Glow */}
          <div className={`absolute -inset-2 ${skill.glowColor} rounded-full blur-xl opacity-0 group-hover/item:opacity-40 transition-opacity duration-500 pointer-events-none`}></div>
          
          <div className="relative w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-gray-50/80 dark:bg-[#0a0a0a]/80 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover/item:text-yellow-500 dark:group-hover/item:text-[#eaff00] group-hover/item:scale-110 group-hover/item:rotate-6 transition-all duration-300 shadow-sm z-10">
            <skill.icon className="text-lg lg:text-xl drop-shadow-sm" />
          </div>
          <span className="relative text-[10px] md:text-xs font-bold text-[#0a0a0a]/70 dark:text-[#ffffff]/70 group-hover/item:text-[#0a0a0a] dark:group-hover/item:text-[#ffffff] transition-colors z-10">
            {skill.name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
);

const Skill = () => {
  const frontendSkills = [
    { name: "React.js", icon: FaReact, glowColor: "bg-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, glowColor: "bg-white" },
    { name: "Tailwind", icon: SiTailwindcss, glowColor: "bg-sky-400" },
    { name: "JavaScript", icon: FaJs, glowColor: "bg-yellow-400" },
    { name: "HTML5", icon: FaHtml5, glowColor: "bg-orange-500" },
    { name: "CSS3", icon: FaCss3Alt, glowColor: "bg-blue-500" },
  ]; // 6 items = 3 cols x 2 rows

  const backendSkills = [
    { name: "Node.js", icon: FaNodeJs, glowColor: "bg-green-500" },
    { name: "Express", icon: SiExpress, glowColor: "bg-gray-400" },
    { name: "MongoDB", icon: SiMongodb, glowColor: "bg-green-600" },
    { name: "SQL", icon: FaDatabase, glowColor: "bg-blue-400" },
  ]; // 4 items = 2 cols x 2 rows

  const dataAndLanguages = [
    { name: "Python", icon: FaPython, glowColor: "bg-yellow-400" },
    { name: "Pandas", icon: SiPandas, glowColor: "bg-purple-500" },
    { name: "C++", icon: SiCplusplus, glowColor: "bg-blue-600" },
    { name: "C", icon: SiC, glowColor: "bg-blue-500" },
  ]; // 4 items = 2 cols x 2 rows

  const tools = [
    { name: "Git", icon: FaGitAlt, glowColor: "bg-orange-500" },
    { name: "GitHub", icon: FaGithub, glowColor: "bg-white" },
    { name: "VS Code", icon: SiVisualstudiocode, glowColor: "bg-blue-500" },
    { name: "Postman", icon: SiPostman, glowColor: "bg-orange-600" },
  ]; // 4 items = 2 cols x 2 rows

  return (
    <section name="skill" className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden pt-24 pb-8">
      
      {/* Background Ambience */}
      <div className="absolute top-[30%] left-[10%] w-[200px] h-[200px] bg-yellow-400/5 dark:bg-[#eaff00]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[5%] w-[150px] h-[150px] bg-yellow-400/5 dark:bg-[#eaff00]/5 rounded-full blur-[90px] pointer-events-none"></div>
      
      {/* Active Particle Field */}
      <FloatingParticles />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-16">
        
        {/* Left Side: Editorial Header */}
        <div className="w-full lg:w-1/3 flex flex-col justify-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-yellow-400 dark:bg-[#eaff00]"></div>
              <p className="text-yellow-600 dark:text-[#eaff00] font-mono text-xs tracking-[0.2em] uppercase font-bold">My Arsenal</p>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0a0a0a] dark:text-[#ffffff] tracking-tighter leading-[1.1] mb-6">
              TECHNICAL <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300 dark:from-[#eaff00] dark:to-white">SKILLS</span>
            </h2>
            
            <p className="text-sm md:text-base text-[#0a0a0a]/70 dark:text-[#ffffff]/70 font-medium leading-relaxed border-l-2 border-yellow-400/30 dark:border-[#eaff00]/30 pl-4">
              A comprehensive overview of my technical expertise, ranging from frontend architecture to backend systems, databases, and core programming languages. Built for scalability and performance.
            </p>

          </motion.div>
        </div>

        {/* Right Side: Perfectly Symmetric 2x2 Bento Box Layout */}
        <div className="w-full lg:w-2/3 flex flex-col justify-start mt-4 lg:mt-0">
          <motion.div 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 w-full"
          >
            <SkillCategory title="Frontend Architecture" skills={frontendSkills} gridClass="grid-cols-2 sm:grid-cols-3" />
            <SkillCategory title="Backend & Databases" skills={backendSkills} />
            <SkillCategory title="Data & Core Languages" skills={dataAndLanguages} />
            <SkillCategory title="Developer Tools" skills={tools} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
