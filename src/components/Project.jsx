import React from "react";
import anime from "../Assets/anime.jpg";
import gallery from "../Assets/gallery.jpg";
import FoodApp from "../Assets/Food.png";

const Projects = () => {
    const portfolios = [
        {
            id: 1,
            src: anime,
            demoHref: "https://anime-saga.netlify.app", // Replace with your actual demo URL
            codeHref: "https://github.com/Manasamohapatra1/Anime-Web-App",
            child: (
                <p className="text-center  text-gray-300 text-sm p-3">A fully responsive anime-website using html,css and javascript.And the datas are fetched from jikan api. </p>
            ),
        },
        {
            id: 2,
            src: gallery,
            demoHref: "https://my-moment.netlify.app", // Replace with your actual demo URL
            codeHref: "https://github.com/Manasamohapatra1/mygallery.github.io",
            child: (
                <p className="text-center  text-gray-300 text-sm p-3">A gallery-website containing images captured by me using html and css only. </p>
            ),
        },
        {
            id: 3,
            src: FoodApp,
            demoHref: "https://github.com/Manasamohapatra1/foodApp", // Replace with your actual demo URL
            codeHref: "https://github.com/Manasamohapatra1/foodApp",
            child: (
                <p className="text-center text-gray-300 text-sm p-3">A android food app containing functional onboarding pages. Currently working on to make it fully functional. </p>
            ),
        },
    ];

    const handleDemoClick = (demoHref) => {
        // Open the demo URL in a new tab when the "Demo" button is clicked
        window.open(demoHref, "_blank");
    };
    const handleCodeClick = (codeHref) => {
        // Open the demo URL in a new tab when the "Demo" button is clicked
        window.open(codeHref, "_blank");
    };
    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl text-center  text-emerald-200 font-bold  border-b-4 border-gray-500">
                        Projects
                    </p>

                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src, child, demoHref, codeHref }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105"
                            />
                            <div className="flex items-center justify-center">
                                <button
                                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-cyan-300"
                                    onClick={() => handleDemoClick(demoHref)}
                                >
                                    Demo
                                </button>
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-cyan-300"
                                    onClick={() => handleCodeClick(codeHref)}>
                                    Code
                                </button>

                            </div>
                            {child}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
