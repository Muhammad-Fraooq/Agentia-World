"use client";

import { useState, ReactElement } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageSquare, FiX } from "react-icons/fi";
import Chatbot from "./Chatbot";

/**
 * FloatingChatbotButton component
 * Displays a floating action button that opens/closes the chatbot
 */
export default function FloatingChatbotButton(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        onClick={toggleChat}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <FiX className="w-6 h-6" />
        ) : (
          <FiMessageSquare className="w-6 h-6" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            style={{ maxHeight: "600px", height: "calc(100vh - 180px)" }}
          >
            <Chatbot welcomeMessage="Welcome to Agentia World! I'm your AI assistant. How can I assist you today?" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
