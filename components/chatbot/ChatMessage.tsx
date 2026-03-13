"use client";

import { motion } from "framer-motion";
import { Message } from "@/lib/api";
import { ReactElement } from "react";

interface ChatMessageProps {
  message: Message;
}

/**
 * Typing indicator with animated dots for AI response state
 */
function TypingIndicator(): ReactElement {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      <motion.span
        className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
      />
      <motion.span
        className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
      />
      <motion.span
        className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
      />
    </div>
  );
}

/**
 * ChatMessage component displays a single message bubble
 * Supports both user and assistant messages with distinct styling
 */
export default function ChatMessage({ message }: ChatMessageProps): ReactElement {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[80%] md:max-w-[70%] rounded-2xl px-4 py-3 shadow-sm ${
          isUser
            ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-br-md"
            : "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-md border border-gray-200 dark:border-gray-700"
        }`}
      >
        <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap break-words">
          {message.content}
        </p>
      </div>
    </motion.div>
  );
}

/**
 * TypingMessage component shows the typing indicator for AI
 */
export function TypingMessage(): ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex w-full justify-start"
    >
      <div className="max-w-[80%] md:max-w-[70%] rounded-2xl px-4 py-3 shadow-sm bg-white dark:bg-gray-800 rounded-bl-md border border-gray-200 dark:border-gray-700">
        <TypingIndicator />
      </div>
    </motion.div>
  );
}
