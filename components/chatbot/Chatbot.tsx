"use client";

import { useState, useRef, useEffect, ReactElement } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageSquare, FiAlertCircle, FiRefreshCw } from "react-icons/fi";
import ChatMessage, { TypingMessage } from "./ChatMessage";
import ChatInput from "./ChatInput";
import { Message, sendChatMessage } from "@/lib/api";

interface ChatbotProps {
  /** Optional initial greeting message */
  welcomeMessage?: string;
}

/**
 * Main Chatbot component
 * Manages chat state, API communication, and renders the chat interface
 */
export default function Chatbot({
  welcomeMessage = "Hello! I'm Agentia AI Assistant. How can I help you today?",
}: ChatbotProps): ReactElement {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: welcomeMessage },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message
  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (userMessage: string): Promise<void> => {
    // Add user message to chat
    const newUserMessage: Message = { role: "user", content: userMessage };
    setMessages((prev) => [...prev, newUserMessage]);
    setIsLoading(true);
    setError(null);

    try {
      // Get chat history excluding the welcome message for API
      const history = messages.slice(1);
      
      const reply = await sendChatMessage({
        message: userMessage,
        history,
      });

      // Add AI response to chat
      const aiMessage: Message = { role: "assistant", content: reply };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to get response";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = (): void => {
    setError(null);
  };

  const handleClearChat = (): void => {
    setMessages([{ role: "assistant", content: welcomeMessage }]);
    setError(null);
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm"
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl">
            <FiMessageSquare className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Agentia AI Assistant
            </h1>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Online
              </span>
            </div>
          </div>
        </div>
        <button
          onClick={handleClearChat}
          className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
          aria-label="Clear chat"
        >
          <FiRefreshCw className="w-4 h-4" />
          <span className="hidden sm:inline">Clear</span>
        </button>
      </motion.div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        <AnimatePresence>
          {messages.map((message, index) => (
            <ChatMessage key={`${message.role}-${index}`} message={message} />
          ))}
        </AnimatePresence>

        {/* Typing indicator */}
        {isLoading && <TypingMessage />}

        {/* Error message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center justify-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl"
          >
            <FiAlertCircle className="w-5 h-5 text-red-500" />
            <span className="text-sm text-red-700 dark:text-red-400">
              {error}
            </span>
            <button
              onClick={handleRetry}
              className="ml-2 px-3 py-1 text-sm bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/40 transition-colors"
            >
              Retry
            </button>
          </motion.div>
        )}

        {/* Empty state spacer for auto-scroll */}
        <div ref={messagesEndRef} className="h-4" />
      </div>

      {/* Input Area */}
      <div className="px-4 py-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
      </div>
    </div>
  );
}
