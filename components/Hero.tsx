import React from "react";
import { FaDotCircle } from "react-icons/fa";
import { FaRobot } from "react-icons/fa6";
import TypeWriter from "./TypeWriter";


const Hero = () => {
  return (
    <section className="hero relative h-screen text-white p-8 sm:p-16">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-[-1] min-w-full min-h-full"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/ai.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className="hero-content absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-t from-black/50 via-transparent to-black/50 text-center px-4 sm:px-8">

        <div className="bg-gray-800 text-white p-3 mb-4 rounded-lg shadow-md flex items-center gap-2 w-fit">
          <FaDotCircle className="text-purple-400 text-sm md:text-base" />
          <p className="text-base md:text-lg font-semibold text-purple-400 ">AI Agents Automation</p>
        </div>

        <h1 className="text-3xl sm:text-7xl font-extrabold py-6 mb-5 drop-shadow-lg bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent md:w-[800px] w-[350px]">
          AI Agents for the Future
        </h1>

        {/* Persistent Description Box */}
        <div className="bg-gray-900 bg-opacity-80 mb-6 flex items-center rounded-lg shadow-lg p-4 sm:p-5 gap-3 border border-gray-700 w-full max-w-[350px] sm:max-w-[500px] md:max-w-[600px]">

          {/* Robot Icon */}
          <FaRobot
            className="text-white bg-gradient-to-r from-purple-600 to-blue-400 rounded-full shadow-lg p-2"
            size={40}
          />

          {/* Typewriter Text Box */}
          <p className="flex-grow font-medium bg-gray-800 text-gray-200 rounded-lg shadow-md p-2 sm:p-3 text-sm sm:text-base">
           <TypeWriter/>
          </p>
        </div>


        <button className="px-6 py-3 bg-gradient-to-r from-purple-700 to-blue-500 text-white text-base hover:opacity-95 font-medium transition-transform shadow-sm rounded-lg">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero
