import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white flex-wrap  object-contain"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl text-center  text-emerald-200 font-bold  border-b-4 border-gray-500">
                        About
                    </p>
                </div>

                <p className="text-xl mt-20">
                    I am Manasa Mohapatra, a Betech undergraduate in the department of Electrical Engineering. But I have a keen interest in software developement.
                    Currently I am learning DSA along with full stack web developement.I also have interest in app developement. In the future I want to explore different domains and grasp more
                    knowledge about it.

                </p>

                <br />
                <div className="pb-8">
                    <p className="text-3xl text-yellow-50 font-bold inline ">
                        Education:
                    </p>
                </div>

                <div class="container mt-4 mx-auto">
                    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div class="card m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
                            <div class="m-3">
                                <h2 class="text-lg  text-orange-300 mb-2">Matriculation</h2>
                                <p class="font-light font-mono text-sm text-gray-300 hover:text-gray-600 transition-all duration-200">Grade:91.3%<br />School:Sri Aurobindo Integral Education Centre</p>
                            </div>
                        </div>
                        <div class="card m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
                            <div class="m-3">
                                <h2 class="text-lg text-orange-300 mb-2">Intermidiate</h2>
                                <p class="font-light font-mono text-sm text-gray-300 hover:text-gray-600 transition-all duration-200">Grade:92.4%<br />School:Tetrahedron Higher Secondary School</p>
                            </div>
                        </div>
                        <div class="card m-2 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
                            <div class="m-3">
                                <h2 class="text-lg  text-orange-300 mb-2">Btech</h2>
                                <p class="font-light font-mono text-sm text-gray-300 hover:text-gray-600 transition-all duration-200">Grade:7.8(1st year)<br />College:Veer Surendra Sai University of Technology</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default About;