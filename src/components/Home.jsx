import React from "react";
import HeroImage from "../Assets/mp.jpg";


// import { Link } from "react-scroll";

const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-6xl font-bold text-white">
                        I'm a Software Developer
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl py-4 max-w-md">
                        I am a Btech undergraduate who love to build and desgin software.
                        Currently, I am working on web application using technologies like
                        React and Tailwind.
                    </p>


                </div>

                <div>
                    <img
                        src={HeroImage}
                        alt="my profile"
                        className="md:rounded-s-full ml-8 max-h-full md:max-h-screen w-4/5 md:w-full overflow-hidden"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;