import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div name="about" className="w-full h-full flex-wrap  object-contain">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: -180 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
          className="mt-[6.5rem]"
        >
          <p className="text-4xl md:text-5xl text-center font-bold ">About</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
          className=" text-base md:text-lg font-semibold mt-8"
        >
          Hello! I'm Manasa Mohapatra, an Electrical Engineering undergraduate
          with a strong interest in software development. I specialize in
          front-end technologies, including Next.js, React, and Tailwind CSS,
          and have a foundational understanding of Android development. My goal
          is to become a full-stack web developer, leveraging my technical
          skills and engineering background to build efficient and user-centric
          web applications.
        </motion.p>

        <br />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
          className="md:mt-6"
        >
          <p className=" text-2xl md:text-3xl text-orange-500  font-bold inline ">
            Education:
          </p>
        </motion.div>

        <div class="container mt-6 mx-auto z-0">
          <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 z-0">
            <motion.div
              initial={{ opacity: 0, x: -180 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
              class=" bg-slate-400 card m-2 cursor-pointer border border-gray-500 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200"
            >
              <div class="m-3">
                <h2 class="text-lg font-semibold text-orange-700 mb-2">
                  Matriculation
                </h2>
                <p class="font-light font-mono text-sm  hover:text-blue-950 transition-all duration-200">
                  Grade:91.3%
                  <br />
                  School:Sri Aurobindo Integral Education Centre
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
              class="  bg-slate-400 card m-2 cursor-pointer border border-gray-500 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200"
            >
              <div class="m-3">
                <h2 class="text-lg text-orange-700 font-semibold mb-2">
                  Intermediate
                </h2>
                <p class="font-light font-mono text-sm hover:text-blue-950 transition-all duration-200">
                  Grade:92.4%
                  <br />
                  School:Tetrahedron Higher Secondary School
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 180 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
              class="  bg-slate-400 card m-2 cursor-pointer border border-gray-500 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200"
            >
              <div class="m-3">
                <h2 class="text-lg  text-orange-700 font-semibold mb-2">
                  B.tech
                </h2>
                <p class="font-light font-mono text-sm hover:text-blue-950 transition-all duration-200">
                  Grade:7.6(2nd year)
                  <br />
                  College:Veer Surendra Sai University of Technology
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
