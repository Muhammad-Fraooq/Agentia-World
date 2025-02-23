import React from 'react'
import { FaBrain, FaCloud, FaNetworkWired, FaRobot } from 'react-icons/fa';

const Technology = () => {

  const technologies = [
    { icon: <FaBrain className='bg-gradient-to-r from-purple-600 to-blue-400 rounded-full p-2 shadow-lg' size={45} />, title: "Machine Learning", desc: "AI that continuously improves through data-driven learning." },
    { icon: <FaCloud className='bg-gradient-to-r from-purple-600 to-blue-400 rounded-full p-2 shadow-lg' size={45} />, title: "Cloud AI", desc: "Highly scalable AI models deployed in secure cloud environments." },
    { icon: <FaRobot className='bg-gradient-to-r from-purple-600 to-blue-400 rounded-full p-2 shadow-lg' size={45} />, title: "Autonomous Agents", desc: "AI-powered virtual assistants that streamline workflows." },
    { icon: <FaNetworkWired className='bg-gradient-to-r from-purple-600 to-blue-400 rounded-full p-2 shadow-lg' size={45} />, title: "Deep Learning", desc: "Neural networks that mimic human intelligence and decision-making." },
  ];

  return (
    <section id="technology" className='pt-6 bg-gradient-to-r from-[#081A2A] via-[#202752] to-[#2D1A47] text-white'>
      <div className='text-center max-w-6xl mx-auto px-6 pt-6'>
        <h2 className='text-2xl md:text-4xl font-semibold bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-300 bg-clip-text text-transparent'>
          Powering AI with advanced technology.
        </h2>
        <p className="mt-4 text-base text-gray-300 font-medium">
          Agentic AI harnesses cutting-edge AI to enable seamless automation and smart decision-making.
        </p>
      </div>

      <div className="bg-gradient-to-r from-[#0A192F] via-[#202752] to-[#2D1A47] py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 py-6 px-5 gap-8 max-w-7xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900 bg-opacity-80 text-center rounded-xl shadow-lg border border-transparent hover:border-purple-400 hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div className="flex justify-center items-center mb-4 text-4xl">{tech.icon}</div>
              <h3 className="text-xl font-semibold text-purple-300">{tech.title}</h3>
              <p className="text-gray-400 mt-2">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technology;
