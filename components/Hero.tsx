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
      <div className="hero-content absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-t from-black/50 via-transparent to-black/50 text-center gap-3 px-4 sm:px-8">

        {/* Tagline */}
        <div className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md flex items-center gap-3 w-fit">
          <FaDotCircle className="text-purple-400 text-base md:text-lg" />
          <p className="text-sm md:text-base font-semibold text-purple-300">AI-Powered Automation</p>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-7xl font-extrabold leading-tight py-4 sm:py-6 mb-3 sm:mb-5 drop-shadow-lg bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent max-w-[450px] md:max-w-[800px] ">
          Intelligent AI Agents for Your Business
        </h1>

        {/* Persistent Description Box */}
        <div className="bg-gray-900 bg-opacity-80 mb-6 flex items-center rounded-lg shadow-lg p-4 sm:p-5 gap-3 sm:gap-4 border border-gray-700 w-full max-w-[350px] sm:max-w-[500px] md:max-w-[600px]">
          {/* Robot Icon */}
          <FaRobot
            className="text-white bg-gradient-to-r from-purple-600 to-blue-400 rounded-full shadow-lg p-2 "
            size={40} // Base size for mobile
            style={{ width: "40px", height: "40px" }} // Ensures consistent size
          />

          {/* Typewriter Text Box */}
          <p className="flex-grow font-medium bg-gray-800 text-gray-200 rounded-lg shadow-md p-2 sm:p-3 text-sm sm:text-base">
            <TypeWriter />
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex py-5 gap-4">
          {/* Get Started Button */}
          <button className="bg-gradient-to-r from-purple-700 to-blue-500  hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Get Started
          </button>

          {/* Learn More Button */}
          <button className="bg-transparent border border-purple-600bg-gradient-to-r from-purple-700 to-blue-500  hover:bg-purple-600 hover:text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero
