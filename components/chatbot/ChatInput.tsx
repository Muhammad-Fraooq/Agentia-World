"use client";

import { useState, KeyboardEvent, ChangeEvent, ReactElement } from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled: boolean;
}

/**
 * ChatInput component provides the text input and send button
 * Supports Enter to send, Shift+Enter for new line
 */
export default function ChatInput({
  onSendMessage,
  disabled,
}: ChatInputProps): ReactElement {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setInputValue(e.target.value);
  };

  const handleSend = (): void => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue && !disabled) {
      onSendMessage(trimmedValue);
      setInputValue("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative flex items-end gap-2 p-2 bg-white dark:bg-gray-800 rounded-2xl border border-gray-300 dark:border-gray-600 shadow-lg focus-within:border-blue-500 dark:focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all duration-200"
      >
        <textarea
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          disabled={disabled}
          rows={1}
          className="flex-1 resize-none bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 px-3 py-3 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed max-h-32 min-h-[48px]"
          style={{
            height: "auto",
            minHeight: "48px",
          }}
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = "auto";
            target.style.height = `${Math.min(target.scrollHeight, 128)}px`;
          }}
        />
        <motion.button
          onClick={handleSend}
          disabled={disabled || !inputValue.trim()}
          whileHover={{ scale: disabled || !inputValue.trim() ? 1 : 1.05 }}
          whileTap={{ scale: disabled || !inputValue.trim() ? 1 : 0.95 }}
          className={`p-3 rounded-xl transition-all duration-200 ${
            disabled || !inputValue.trim()
              ? "bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md"
          }`}
          aria-label="Send message"
        >
          <FiSend className="w-5 h-5" />
        </motion.button>
      </motion.div>
      <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
        Press Enter to send, Shift+Enter for new line
      </p>
    </div>
  );
}
