import React, { useContext } from "react";
import HeroImage from "../Assets/portfolio_nobg.png";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { IoIosArrowRoundForward } from "react-icons/io";
import ThemeContext from "../theme/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  const fadeUp = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.2, ease: [0.2, 0.65, 0.3, 0.9] } }
  };

  const slowReveal = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: "easeOut", delay: 0.3 } }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-24">
      
      {/* Dynamic Background Orbs - Neon Yellow & Zinc */}
      <motion.div 
        animate={{ 
          x: [0, 30, -20, 0], 
          y: [0, -40, 20, 0],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-yellow-400/20 dark:bg-[#eaff00]/15 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
      />
      <motion.div 
        animate={{ 
          x: [0, -40, 20, 0], 
          y: [0, 30, -30, 0],
          scale: [1, 0.9, 1.1, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] bg-zinc-400/20 dark:bg-zinc-600/30 rounded-full blur-[100px] mix-blend-screen pointer-events-none"
      />

      {/* Ultra-Modern Dot Matrix Background with subtle drift */}
      <motion.div 
        animate={{ backgroundPositionY: ["0px", "40px"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-20"
        style={{
          backgroundImage: `radial-gradient(${theme === 'dark' ? '#ffffff' : '#0a0a0a'} 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      >
        {/* Radial gradient mask to fade out the dots towards the edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ffffff]/80 to-[#ffffff] dark:from-transparent dark:via-[#0a0a0a]/80 dark:to-[#0a0a0a]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff] via-transparent to-[#ffffff] dark:from-[#0a0a0a] dark:via-transparent dark:to-[#0a0a0a]"></div>
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16">
        
        {/* Left: Typography & Intro */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="w-full md:w-[55%] flex flex-col items-start text-left mt-8 md:mt-0"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#0a0a0a]/10 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-yellow-400 dark:bg-[#eaff00] animate-pulse"></span>
            <p className="text-xs md:text-sm font-semibold tracking-widest uppercase text-[#0a0a0a]/80 dark:text-[#ffffff]/80">
              Available for work
            </p>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-[#0a0a0a] dark:text-[#ffffff]">
            Hello, I'm <br />
            <motion.span 
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 dark:from-[#facc15] dark:via-[#fef08a] dark:to-[#facc15]"
              style={{ backgroundSize: "200% auto" }}
            >
              MANASA
            </motion.span>
          </motion.h1>

          <motion.div variants={fadeUp} className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0a0a0a]/80 dark:text-[#ffffff]/80 mb-8">
            <span className="mr-3">I specialize in</span>
            <TypeAnimation
              sequence={[
                "Software Engineering",
                2000,
                "Data Engineering",
                2000,
                "Frontend Development",
                2000,
                "Full-Stack Architecture",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#eaff00]"
            />
          </motion.div>

          <motion.p variants={fadeUp} className="text-base md:text-lg lg:text-xl font-normal text-[#0a0a0a]/70 dark:text-[#ffffff]/70 leading-relaxed max-w-lg mb-10">
            A passionate Software Developer crafting seamless digital experiences. While my core expertise lies in frontend and full-stack development, I am actively expanding my skill set into the world of Data Engineering.
          </motion.p>

          <motion.div variants={fadeUp} className="flex items-center gap-6">
            <a
              href="#project"
              className="group relative px-8 py-4 bg-[#0a0a0a] dark:bg-white text-white dark:text-[#0a0a0a] font-bold text-sm md:text-base rounded-full overflow-hidden shadow-lg hover:shadow-yellow-400/25 transition-all duration-300"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-400 to-yellow-500 dark:from-yellow-400 dark:to-[#eaff00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-2 group-hover:text-[#ffffff] dark:group-hover:text-[#0a0a0a] transition-colors duration-300">
                View Projects <IoIosArrowRoundForward className="text-2xl group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </a>
            
            <a
              href="#contactme"
              className="text-sm md:text-base font-bold text-[#0a0a0a]/80 dark:text-[#ffffff]/80 hover:text-yellow-600 dark:hover:text-[#eaff00] transition-colors"
            >
              Let's Talk
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Clean Editorial Image */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={slowReveal}
          className="w-full md:w-[45%] flex justify-center relative h-[45vh] md:h-[75vh]"
        >
          {/* Subtle glow behind the portrait itself */}
          <motion.div 
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-yellow-400/10 dark:bg-[#eaff00]/10 rounded-full blur-[80px] z-0"
          />
          
          <motion.img
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            src={HeroImage}
            alt="Manasa"
            className="w-full h-full object-contain md:object-cover object-bottom drop-shadow-2xl transition-transform duration-1000 z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
