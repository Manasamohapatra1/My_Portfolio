import React from "react";
import { motion } from "framer-motion";

const TimelineItem = ({ title, institution, grade, status, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10px" }}
    transition={{ duration: 0.5, delay }}
    className="relative pl-6 md:pl-8 pb-4 md:pb-6 group"
  >
    {/* Vertical Line */}
    <div className="absolute left-[9px] top-2 bottom-0 w-[2px] bg-gray-200 dark:bg-white/10 group-last:bg-transparent"></div>
    
    {/* Glowing Node */}
    <div className="absolute left-0 top-2 w-5 h-5 rounded-full border-[3px] border-white dark:border-[#0a0a0a] bg-gray-300 dark:bg-gray-600 group-hover:bg-yellow-400 dark:group-hover:bg-[#eaff00] group-hover:shadow-[0_0_10px_rgba(234,255,0,0.5)] transition-all duration-300 z-10"></div>
    
    {/* Glassmorphism Card */}
    <div className="bg-white/60 dark:bg-[#111827]/60 backdrop-blur-md p-4 rounded-xl border border-gray-100 dark:border-white/5 group-hover:border-yellow-400/30 dark:group-hover:border-[#eaff00]/30 transition-all duration-300 shadow-sm">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1.5 gap-1">
        <h3 className="text-base md:text-lg font-bold text-[#0a0a0a] dark:text-[#ffffff] leading-tight">{title}</h3>
        <span className="px-2 py-0.5 text-[9px] md:text-[10px] font-bold uppercase tracking-wider rounded-full bg-yellow-400/10 text-yellow-700 dark:bg-[#eaff00]/10 dark:text-[#eaff00]">
          {status}
        </span>
      </div>
      <p className="text-[#0a0a0a]/70 dark:text-[#ffffff]/70 font-medium mb-2 text-xs md:text-sm leading-snug">{institution}</p>
      <div className="inline-flex items-center px-2 py-1 rounded-md bg-gray-100 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/5 text-[10px] md:text-xs font-mono text-[#0a0a0a]/90 dark:text-[#ffffff]/70">
        Grade: <span className="font-bold text-yellow-600 dark:text-[#eaff00] ml-1">{grade}</span>
      </div>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <section name="about" className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden pt-28 pb-10">
      
      {/* Background Orbs */}
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-yellow-400/5 dark:bg-[#eaff00]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[5%] w-[200px] h-[200px] bg-yellow-400/5 dark:bg-[#eaff00]/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        
        {/* Left Column: Header, Bio & Skills */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-yellow-400 dark:bg-[#eaff00]"></div>
              <p className="text-yellow-600 dark:text-[#eaff00] font-mono text-xs tracking-[0.2em] uppercase font-bold">Get To Know Me</p>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0a0a0a] dark:text-[#ffffff] tracking-tighter leading-[1.1] mb-6">
              ABOUT MY <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300 dark:from-[#eaff00] dark:to-white">JOURNEY</span>
            </h2>

            <div className="text-sm md:text-base text-[#0a0a0a]/70 dark:text-[#ffffff]/70 font-medium leading-relaxed border-l-2 border-yellow-400/30 dark:border-[#eaff00]/30 pl-4">
              <p>
                A performance-driven full-stack developer specializing in scalable architectures with <strong className="text-yellow-600 dark:text-[#eaff00]">React, Node.js, and Express</strong>. Currently expanding expertise into Data Engineering with a strategic focus on <strong className="text-yellow-600 dark:text-[#eaff00]">SQL, Python, and Pandas</strong> to architect robust, data-intensive applications.
              </p>
            </div>

            {/* Core Focus Tech Pills */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10">
              <p className="text-[10px] md:text-xs font-mono text-[#0a0a0a]/50 dark:text-[#ffffff]/50 mb-3 uppercase tracking-widest">Current Focus</p>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Node.js', 'Express', 'Python', 'SQL', 'Pandas'].map((tech, index) => (
                  <span key={index} className="px-3 py-1.5 rounded-full text-xs font-medium bg-white dark:bg-[#111827] border border-[#0a0a0a]/10 dark:border-white/10 text-[#0a0a0a]/90 dark:text-[#ffffff]/90 hover:border-yellow-400 dark:hover:border-[#eaff00] hover:text-yellow-600 dark:hover:text-[#eaff00] transition-colors cursor-default shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Education Timeline */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="relative flex flex-col">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#0a0a0a] dark:text-[#ffffff]">
                Education
              </h3>
            </motion.div>
            
            <div className="mt-2">
              <TimelineItem 
                title="B.Tech in Electrical Engineering"
                institution="Veer Surendra Sai University of Technology"
                grade="7.6 CGPA"
                status="Completed"
                delay={0.1}
              />
              <TimelineItem 
                title="Intermediate (12th Grade)"
                institution="Tetrahedron Higher Secondary School"
                grade="92.4%"
                status="Completed"
                delay={0.2}
              />
              <TimelineItem 
                title="Matriculation (10th Grade)"
                institution="Sri Aurobindo Integral Education Centre"
                grade="91.3%"
                status="Completed"
                delay={0.3}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
