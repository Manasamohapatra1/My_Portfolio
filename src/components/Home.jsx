import React from "react";
import HeroImage from "../Assets/profile3.jpg";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { IoIosArrowForward } from "react-icons/io";
// import { Link } from "react-scroll";

const Home = () => {
  return (
    <section className="w-full h-screen p-4 text-white">
      <div className="flex flex-wrap flex-row mt-40 items-center">
        <motion.div
          initial={{ opacity: 0, y: -180 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
          className=" p-4 w-[60%] m-auto"
        >
          <img
            src={HeroImage}
            alt="my profile"
            quality="95"
            priority={true}
            className="h-80 m-auto w-80 rounded-full object-cover border-[0.35rem]  border-white shadow-xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -180 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
          className=" p-4 w-[40%] m-auto"
        >
          <div className=" m-auto flex flex-col gap-4 md:gap-6 text-left lg:w-full 2xl:w-full mx-4 md:mx-6 xl:mx-0">
            <div className="flex items-center gap-1">
              {/* <Image unoptimized={true} alt='waving-hand' width={30} height={30} src={wavingHand} /> */}
              <p className="text-lg md:text-xl mt-2 md:mt-1.5">Hey</p>
            </div>
            <h1 className="text-4xl  md:text-6xl font-bold relative">
              I&apos;m Manasa
            </h1>
            <div className="flex flex-row items-start md:items-center gap-1.5">
              <h2 className="text-lg md:text-2xl">I am into</h2>
              <TypeAnimation
                className="text-violet-700"
                sequence={[
                  "Frontend Developer",
                  1000,
                  "Full Stack Developer",
                  1000,
                  // wrapperClassName: "text-violet-700 dark:text-violet-600 text-lg md:text-2xl font-medium",
                  // cursorClassName: "text-violet-700 dark:text-violet-600 text-lg md:text-2xl"
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300"></p>

            {/* <a href="https://sppuprep.tech" target="_blank" rel="noopener noreferrer" className="relative whitespace-nowrap before:absolute before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500 before:bg-violet-300 dark:before:bg-violet-600">
                        <span className="relative">SPPU Prep</span>
                    </a> */}

            <div
              className="w-fit text-sm md:text-base py-2 px-4 cursor-pointer flex items-center gap-1 rounded-md bg-violet-600 hover:bg-violet-700 dark:bg-violet-700 hover:dark:bg-violet-800 transition-colors group text-white"
              to={"about"}
              offset={-60}
              smooth={true}
              duration={500}
              isDynamic={true}
            >
              About Me
              <IoIosArrowForward className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
