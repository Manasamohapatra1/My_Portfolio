import React from "react";
import HeroImage from "../Assets/profile1.jpg";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { IoIosArrowForward } from "react-icons/io";
import wavingHand from "../Assets/waving-hand.gif";
import { Link } from "react-router-dom";
// import { Link } from "react-scroll";

const Home = () => {
  return (
    <section className="w-full h-full p-4">
      <div className="flex-wrap flex  md:flex-row  mt-[3.8rem] md:mt-40 items-center">
        <motion.div
          initial={{ opacity: 0, y: -180 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
          className=" p-4 w-[100%] md:w-[55%] m-auto"
        >
          <img
            src={HeroImage}
            alt="my profile"
            quality="95"
            priority={true}
            className="h-40 m-auto w-40  md:w-80 md:h-80  rounded-full object-cover border-[0.35rem]  border-white shadow-xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1.2, delay: 0.4 }}
          className=" p-4 w-[100%] lg:w-[45%] m-auto "
        >
          <div className="m-auto flex flex-col gap-5 md:gap-6 text-left lg:w-full 2xl:w-full mx-4 md:mx-6 xl:mx-0">
            <div className="flex items-center gap-1">
              <img
                unoptimized={true}
                alt="waving-hand"
                width={35}
                height={35}
                src={wavingHand}
              />
              <p className="text-xl font-medium md:text-xl mt-2 md:mt-1.5">
                Hey
              </p>
            </div>
            <h1 className=" text-4xl  md:text-6xl font-extrabold relative">
              I&apos;m Manasa
            </h1>
            <div className="flex flex-row items-start md:items-center gap-1">
              <h2 className="text-sm font-bold md:text-2xl">I am into</h2>
              <TypeAnimation
                className="text-violet-700  text-sm md:text-2xl font-bold "
                sequence={[
                  "Frontend developement",
                  1000,
                  "Full-Stack Developement",
                  1000,
                  "App Developement",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <h3 className="text-sm lg:text-base font-semibold md:text-base">
              I'm a passionate and dedicated front-end web developer with a
              knack for creating dynamic, user-friendly websites and
              applications. I thrive in collaborative environments, constantly
              staying updated with the latest industry trends and technologies
              to deliver cutting-edge solutions. Let's build something amazing
              together!
            </h3>
            <Link
              to="/about"
              className="w-fit text-sm font-semibold md:text-base py-2 px-4 cursor-pointer flex items-center gap-1 rounded-md bg-violet-600 hover:bg-violet-700 dark:bg-violet-700 hover:dark:bg-violet-800 transition-colors group text-white"
              offset={-60}
              smooth={true}
              duration={500}
              isDynamic={true}
            >
              About Me
              <IoIosArrowForward className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
