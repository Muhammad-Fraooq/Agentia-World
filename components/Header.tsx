'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaRobot, FaCogs, FaUserSecret, FaDollarSign, FaEnvelope } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
    const [open, setOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('') // Track the active section

    // Toggle menu
    const handleOpen = () => setOpen(!open)

    // Pages with links and icons
    const pages = [
        { id: 1, link: '/#technology', name: 'Technology', icon: <FaCogs /> },
        { id: 2, link: '/#agents', name: 'Agents', icon: <FaUserSecret /> },
        { id: 3, link: '/#pricing', name: 'Pricing', icon: <FaDollarSign /> },
        { id: 4, link: '/#contact', name: 'Contact', icon: <FaEnvelope /> },
    ]

    // Use IntersectionObserver to detect the active section
    useEffect(() => {
        const sections = document.querySelectorAll('section') // Select all sections
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id) // Set the active section ID
                    }
                })
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        )
        // Observe each section
        sections.forEach((section) => observer.observe(section))
        // Cleanup observer
        return () => {
            sections.forEach((section) => observer.unobserve(section))
        }
    }, [])

    return (
        <header className='fixed z-50 w-full top-0 left-0 bg-gradient-to-r from-[#081A2A] via-[#202752] to-[#2D1A47] text-white py-5 shadow-lg'>
            <nav className='flex justify-between items-center px-6'>
                {/* Logo with Icon */}
                <Link href={`/`}>
                    <div className="flex items-center text-xl font-semibold cursor-pointer gap-2">
                        <FaRobot size={28} />
                        Agentia <span className='text-purple-300'>World</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-6 items-center">
                    {pages.map((item) => {
                        const sectionId = item.link.split('#')[1] // Extract section ID from link
                        const isActive = activeSection === sectionId // Check if the section is active
                        return (
                            <Link
                                key={item.id}
                                href={item.link}
                                className={`flex items-center gap-2 text-lg transition-all ${
                                    isActive ? 'text-purple-300 font-semibold' : 'text-gray-100 hover:text-gray-300'
                                }`}
                            >
                                {item.icon} {item.name}
                            </Link>
                        )
                    })}
                    <div>
                        <Link
                            href={`/`}
                            className="px-6 py-3 bg-gradient-to-r from-purple-700 to-blue-500 text-white text-base hover:opacity-90 font-medium transition-transform shadow-sm rounded-lg"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={handleOpen} className='text-3xl'>
                        {open ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu with Framer Motion Animations */}
            <AnimatePresence>
                {open && (
                    <div
                        className={`md:hidden flex flex-col items-start bg-gradient-to-r from-[#081A2A] via-[#202752] to-[#2D1A47] text-white transition-transform duration-300 w-full absolute left-0 top-[4rem] py-6 px-6 ${open ? 'z-50' : 'z-[-1]'}`}
                    >
                        {pages.map((item, index) => {
                            const sectionId = item.link.split('#')[1] // Extract section ID from link
                            const isActive = activeSection === sectionId // Check if the section is active
                            return (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ delay: index * 0.1, duration: 0.3 }} // Delayed animation for each link
                                >
                                    <Link
                                        href={item.link}
                                        onClick={() => setOpen(false)} // Close menu on click
                                        className={`flex items-center gap-2 py-2 text-base transition-all w-full ${
                                            isActive ? 'text-purple-300 font-semibold' : 'text-gray-100 hover:text-gray-300'
                                        }`}
                                    >
                                        {item.icon} {item.name}
                                    </Link>
                                </motion.div>
                            )
                        })}

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ delay: pages.length * 0.1, duration: 0.3 }} // Extra delay for button
                            className='w-full flex flex-col'
                        >
                            <Link
                                href={`/`}
                                onClick={() => setOpen(false)} // Close menu on click
                                className="mt-2 w-full px-3 py-2.5 bg-gradient-to-r from-purple-700 to-blue-500 text-white hover:opacity-85 text-base transition-transform font-medium shadow-md rounded-lg text-center"
                            >
                                Get Started
                            </Link>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Header