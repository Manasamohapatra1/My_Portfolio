import React from "react";
import Contactme from "../Assets/contact.png";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-full p-4">
      <div className="flex flex-col p-4 justify-between max-w-screen-lg mx-auto h-full">
        <motion.p
          initial={{ opacity: 0, y: -180 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
          className="text-4xl text-center mt-[6rem]   font-bold "
        >
          Contact
        </motion.p>
        {/* <p className="py-6">Submit the form below to get in touch with me</p> */}

        <div className="md:flex md:justify-between  md:mt-[4rem]">
          <motion.img
            initial={{ opacity: 0, x: -180 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
            src={Contactme}
            alt="contact"
          ></motion.img>
          <motion.form
            initial={{ opacity: 0, x: 180 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
            action="https://getform.io/f/460c4e2e-ea53-4745-a6a5-a355d18d3b28"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2  border-2 rounded-md focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2  border-2 rounded-md focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="8"
              className="p-2  border-2 rounded-md focus:outline-none"
            ></textarea>

            <button className="bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Submit
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
