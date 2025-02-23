'use client'
import React from 'react'
import { Typewriter } from "react-simple-typewriter";

const TypeWriter = () => {
  return (
    <Typewriter
    words={[
      "Revolutionize Your Business with AI-Driven Agents",
      "Enhance Efficiency & Productivity with AI Solutions",
      "Empower Your Business with Smart Automation Tools",
      "Unlock Limitless Potential with AI-Powered Innovation",
    ]}
    loop={true}
    cursor
    cursorStyle="|"
    typeSpeed={60}
    deleteSpeed={30}
    delaySpeed={2000}
  />
  )
}

export default TypeWriter