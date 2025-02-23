import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaRobot } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t bg-gradient-to-r from-[#081A2A] via-[#202752] to-[#2D1A47] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* 🌟 Company Info */}
        <div>
          <h2 className="text-2xl font-extrabold text-white flex items-center gap-2"><FaRobot size={28} />
            Agentia <span className='text-purple-300'>World</span></h2>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            AI-powered automation solutions that enhance customer experiences, improve efficiency, and drive business growth.
            Unlock the future of AI with Agentia World.
          </p>
        </div>

        {/* 📌 Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-purple-300 first-line:uppercase mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Technology", "Agents", "Pricing", "Contact",].map((item, index) => (
              <li key={index}>
                <Link href={item === "Home" ? "/" : `#${item.toLowerCase()}`} className="hover:text-purple-400 transition duration-300">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 🔥 Services */}
        <div>
          <h3 className="text-lg font-semibold text-purple-300 first-line:uppercase mb-3">Our Services</h3>
          <ul className="space-y-2">
            {["AI Chatbots", "Business Automation", "Data Analytics", "AI Consulting", "Custom AI Solutions"].map((service, index) => (
              <li key={index}>
                <Link href={`#${service.toLowerCase().replace(/\s/g, "-")}`} className="hover:text-purple-400 transition duration-300">
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 📞 Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-purple-300 first-line:uppercase mb-3">Contact Us</h3>
          <p className="text-sm text-gray-400">📧 Email: muhammad888xyz@gmail.com</p>
          <p className="text-sm text-gray-400 mt-1">📞 Phone: +92 334-7361-933</p>
        </div>
      </div>

      {/* 🌍 Newsletter & Social Media */}
      <div className="max-w-7xl mx-auto mt-10 px-6 flex flex-col md:flex-row justify-between items-center border-gray-700 pt-6">

        {/* ✉️ Newsletter Signup */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-lg font-semibold text-white mb-2">Subscribe to Our Newsletter</h3>
          <p className="text-sm text-gray-400">Stay updated with the latest AI innovations and news.</p>
          <div className="mt-3 flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md bg-gray-800 text-white focus:outline-none w-60"
            />
            <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 transition rounded-r-md text-white font-semibold">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-3 mt-4">
          <h3 className="text-lg font-semibold text-purple-300 first-line:uppercase">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="https://web.facebook.com/" target="_blank" className="hover:scale-110 transition duration-300">
              <FaFacebook className="text-2xl text-blue-400 hover:text-blue-500" />
            </Link>
            <Link href="https://www.linkedin.com/in/muhammad-farooq-developer/" target="_blank" className="hover:scale-110 transition duration-300">
              <FaLinkedin className="text-2xl text-blue-500 hover:text-blue-600" />
            </Link>
            <Link href="https://github.com/Muhammad-Fraooq" target="_blank" className="hover:scale-110 transition duration-300">
              <FaGithub className="text-2xl text-gray-400 hover:text-gray-300" />
            </Link>
          </div>
        </div>

      </div>

      {/* 📜 Copyright Section */}
      <div className="mt-8 pt-6 border-t text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Agentia World. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
