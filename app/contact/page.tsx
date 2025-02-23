'use client'
import React, { useState } from 'react'

type ContactForm = {
  Fname: string
  email: string
  message: string
}

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false)
  const [errorShow, setErrorShow] = useState(false)

  const [data, setData] = useState<ContactForm>({
    Fname: "",
    email: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    // Check if any field is empty
    if (!data.Fname.trim() || !data.email.trim() || !data.message.trim()) {
      setErrorShow(true)
      setMessageSent(false)
      return
    }

    // If all fields are filled, send the message
    setErrorShow(false)
    setMessageSent(true)

    setTimeout(() => {
      setMessageSent(false)
    }, 3000)

    // Clear the form
    setData({ Fname: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="bg-gradient-to-r from-[#081A2A] via-[#202752] to-[#2D1A47] text-white py-16 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className="mt-4 text-gray-300 text-lg">
          Have questions or want to work together? Send us a message!
        </p>
      </div>

      <form className="mt-10 max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <label htmlFor="Fname" className="block text-gray-300 font-medium mb-2">Full Name</label>
          <input
            type="text"
            name="Fname"
            value={data.Fname}
            onChange={handleChange}
            placeholder="John Doe"
            className={`w-full px-4 py-3 bg-gray-700 text-white rounded-lg border ${errorShow && !data.Fname.trim() ? "border-red-500" : "border-gray-600"} focus:outline-none focus:ring-2 focus:ring-purple-500`}
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={`w-full px-4 py-3 bg-gray-700 text-white rounded-lg border ${errorShow && !data.email.trim() ? "border-red-500" : "border-gray-600"} focus:outline-none focus:ring-2 focus:ring-purple-500`}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Your Message</label>
          <textarea
            name="message"
            value={data.message}
            rows={5}
            onChange={handleChange}
            placeholder="Write your message here..."
            className={`w-full px-4 py-3 bg-gray-700 text-white rounded-lg border ${errorShow && !data.message.trim() ? "border-red-500" : "border-gray-600"} focus:outline-none focus:ring-2 focus:ring-purple-500`}
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300"
        >
          Send Message
        </button>

        {messageSent && (
          <div className="mt-4 text-center text-green-400 font-medium">
            ✅ Your message has been sent successfully!
          </div>
        )}
        {errorShow && (
          <div className="mt-4 text-center text-red-400 font-medium">
            ❌ All fields are required!
          </div>
        )}
      </form>
    </section>
  )
}

export default Contact
