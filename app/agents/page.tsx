import React from 'react'
import { FaCogs, FaBolt, FaSync, FaShieldAlt } from "react-icons/fa";

const Agents = () => {
  const features = [
    {
      icon: <FaCogs className='bg-gradient-to-r from-purple-600 to-blue-400 rounded-full p-2 shadow-lg' size={45} />,
      title: "Smart Automation",
      text: "Reduce manual effort with AI-powered workflows."
    },
    {
      icon: <FaBolt className='bg-gradient-to-r from-purple-600 to-blue-400 rounded-full p-2 shadow-lg' size={45} />,
      title: "Real-Time Decision Making",
      text: "Adaptive intelligence for dynamic solutions."
    },
    {
      icon: <FaSync className='bg-gradient-to-r from-purple-600 to-blue-400 rounded-full p-2 shadow-lg' size={45} />,
      title: "Seamless Integration",
      text: "Works effortlessly with existing systems."
    },
    {
      icon: <FaShieldAlt className='bg-gradient-to-r from-purple-600 to-blue-400 rounded-full p-2 shadow-lg' size={45} />,
      title: "Scalable & Secure",
      text: "Built for performance and reliability."
    },
  ];

  return (
    <section id="agents" className='bg-gradient-to-r from-[#081A2A] via-[#202752] to-[#2D1A47] text-white'>
      <div className='text-center max-w-6xl mx-auto px-6 py-10'>
        <h2 className='text-2xl md:text-4xl bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-300 font-semibold text-transparent bg-clip-text'>
          AI Agents: Smarter, Faster, Efficient
        </h2>
        <p className='text-base mt-4 text-gray-300 font-medium'>
          Boost productivity with AI-driven agents that automate tasks, optimize workflows, and enhance decision-making. 🚀
        </p>
      </div>
      <div className='bg-gradient-to-r from-[#0A192F] via-[#202752] to-[#2D1A47] py-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 py-6 px-5 gap-8 max-w-7xl mx-auto'>
          {features.map((data, index) => (
            <div
              key={index}
              className='p-6 bg-gray-900 bg-opacity-80 shadow-xl rounded-lg border border-transparent border-opacity-50 hover:border-purple-400 hover:scale-105 transition-transform duration-300 ease-in-out'
            >
              <div className='flex justify-center items-center text-4xl mb-2'>
                {data.icon}
              </div>
              <h3 className='text-base font-semibold text-purple-300'>{data.title}</h3>
              <p className='text-base text-gray-400 mt-2'>{data.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Agents;
