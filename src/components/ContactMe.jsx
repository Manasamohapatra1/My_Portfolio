import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section name="contact" className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden pt-24 pb-8">
      
      {/* Background Ambience */}
      <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] bg-yellow-400/5 dark:bg-[#eaff00]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] right-[5%] w-[250px] h-[250px] bg-yellow-400/5 dark:bg-[#eaff00]/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-stretch">
        
        {/* Left Column: Header & Info */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-yellow-400 dark:bg-[#eaff00]"></div>
              <p className="text-yellow-600 dark:text-[#eaff00] font-mono text-xs tracking-[0.2em] uppercase font-bold">Reach Out</p>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0a0a0a] dark:text-[#ffffff] tracking-tighter leading-[1.1] mb-6">
              LET'S <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-300 dark:from-[#eaff00] dark:to-white">CONNECT</span>
            </h2>

            <p className="text-sm md:text-base text-[#0a0a0a]/70 dark:text-[#ffffff]/70 font-medium leading-relaxed border-l-2 border-yellow-400/30 dark:border-[#eaff00]/30 pl-4 mb-10">
              Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
            </p>

            {/* Contact Badges */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-[#111827] shadow-sm border border-gray-100 dark:border-white/5 flex items-center justify-center text-[#0a0a0a] dark:text-white group-hover:bg-yellow-400 dark:group-hover:bg-[#eaff00] group-hover:text-black transition-colors duration-300">
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Email</p>
                  <p className="text-sm font-bold text-[#0a0a0a] dark:text-white">mohapatramanasa1@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-[#111827] shadow-sm border border-gray-100 dark:border-white/5 flex items-center justify-center text-[#0a0a0a] dark:text-white group-hover:bg-yellow-400 dark:group-hover:bg-[#eaff00] group-hover:text-black transition-colors duration-300">
                  <FaMapMarkerAlt size={18} />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Location</p>
                  <p className="text-sm font-bold text-[#0a0a0a] dark:text-white">Odisha, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Glassmorphism Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/60 dark:bg-[#111827]/60 backdrop-blur-xl p-6 lg:p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-full max-w-lg mx-auto relative"
          >
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent dark:from-[#eaff00]/5 rounded-3xl pointer-events-none"></div>

            <form
              action="https://getform.io/f/460c4e2e-ea53-4745-a6a5-a355d18d3b28"
              method="POST"
              className="relative z-10 flex flex-col gap-4"
            >
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] md:text-xs font-bold text-[#0a0a0a]/80 dark:text-[#ffffff]/80 uppercase tracking-wider">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full bg-gray-50/50 dark:bg-[#0a0a0a]/50 text-[#0a0a0a] dark:text-white p-3 md:p-3.5 text-xs md:text-sm rounded-xl border border-gray-200 dark:border-white/10 focus:outline-none focus:border-yellow-400 dark:focus:border-[#eaff00] focus:ring-1 focus:ring-yellow-400 dark:focus:ring-[#eaff00] transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600"
                />
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] md:text-xs font-bold text-[#0a0a0a]/80 dark:text-[#ffffff]/80 uppercase tracking-wider">Your Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full bg-gray-50/50 dark:bg-[#0a0a0a]/50 text-[#0a0a0a] dark:text-white p-3 md:p-3.5 text-xs md:text-sm rounded-xl border border-gray-200 dark:border-white/10 focus:outline-none focus:border-yellow-400 dark:focus:border-[#eaff00] focus:ring-1 focus:ring-yellow-400 dark:focus:ring-[#eaff00] transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] md:text-xs font-bold text-[#0a0a0a]/80 dark:text-[#ffffff]/80 uppercase tracking-wider">Your Message</label>
                <textarea
                  name="message"
                  placeholder="Let's build something amazing together..."
                  rows="4"
                  required
                  className="w-full bg-gray-50/50 dark:bg-[#0a0a0a]/50 text-[#0a0a0a] dark:text-white p-3 md:p-3.5 text-xs md:text-sm rounded-xl border border-gray-200 dark:border-white/10 focus:outline-none focus:border-yellow-400 dark:focus:border-[#eaff00] focus:ring-1 focus:ring-yellow-400 dark:focus:ring-[#eaff00] transition-all resize-none placeholder:text-gray-400 dark:placeholder:text-gray-600"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="group relative flex items-center justify-center gap-3 w-full py-3 mt-1 bg-gradient-to-r from-yellow-500 to-yellow-400 dark:from-[#eaff00] dark:to-yellow-500 text-[#0a0a0a] font-black text-[10px] md:text-xs uppercase tracking-widest rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 shadow-[0_0_20px_rgba(234,255,0,0.3)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
                <FaPaperPlane size={14} className="relative z-10 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                <span className="relative z-10">Send Message</span>
              </button>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
