import React from "react";
import html from "../Assets/html5.png";
import css from "../Assets/css.png";
import javascript from "../Assets/js.png";
import cplus from "../Assets/cplus.png";
import c from "../Assets/c.png";
import reactjs from "../Assets/react.png";
import bootstrap from "../Assets/bootsrap.png";
import tailwind from "../Assets/tailwind.png";
import kotlin from "../Assets/kotlin.png";
import next from "../Assets/next.png";
import mui from "../Assets/mui.png";
import node from "../Assets/node.png";
import { motion } from "framer-motion";

const Skill = () => {
  const skill = [
    {
      id: 1,
      src: cplus,
      title: "C++",
      style: "shadow-blue-800",
    },
    {
      id: 2,
      src: c,
      title: "C",
      style: "shadow-cyan-700",
    },
    {
      id: 3,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: reactjs,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: bootstrap,
      title: "Bootsrap",
      style: "shadow-violet-500",
    },
    {
      id: 8,
      src: html,
      title: "Html",
      style: "shadow-pink-600",
    },
    {
      id: 9,
      src: kotlin,
      title: "Kotlin",
      style: "shadow-orange-400",
    },
    { id: 10, src: next, title: "Next", style: "shadow-black" },
    { id: 11, src: node, title: "Node", style: "shadow-green-700" },
    { id: 12, src: mui, title: "Mui", style: "shadow-blue-500" },
  ];

  return (
    <div name="skill" className="w-full h-full ">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <motion.p
            initial={{ opacity: 0, y: -180 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
            className="text-4xl md:text-5xl mt-[6.5rem] text-center font-bold"
          >
            Skill
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
            className=" text-base md:text-lg font-medium mt-8"
          >
            Proficient in C, C++, HTML, and CSS, I have a solid foundation in
            software development. My expertise extends to front-end
            technologies, including React, Next.js, Tailwind CSS, and MUI,
            allowing me to create dynamic and responsive user interfaces.
          </motion.p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skill.map(({ id, src, title, style }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
              className={` font-semibold shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
