import React, { useState } from "react";
import { IconMessage, IconSend, IconX } from "@tabler/icons-react";

interface ChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Chat: React.FC<ChatbotModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [inputText, setInputText] = useState("");

  const handleSendMessage = () => {
    if (inputText.trim()) {
      setMessages([...messages, { text: inputText, isUser: true }]);
      setInputText("");

      // Simulate a bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "I'm not functional yet!", isUser: false },
        ]);
      }, 1000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-xl max-h-[75vh] flex flex-col overflow-hidden z-50 mt-32">
        {/* Header */}
        <div className="bg-gradient-to-l from-green-500 to-cyan-600 text-white p-6 rounded-t-xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <IconMessage size={28} className="text-white" />
            <h2 className="text-2xl font-semibold">Chatbot</h2>
          </div>
          <button onClick={onClose} className="text-white hover:text-gray-200 transition-colors">
            <IconX size={20} className="text-white"/>
          </button>
        </div>

        <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.isUser ? "justify-end" : "justify-start"} mb-4`}
            >
              <div
                className={`max-w-[75%] p-4 rounded-xl ${
                  message.isUser
                    ? "bg-zinc-200 text-gray-800 shadow-sm"
                    : "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
                }`}
              >
                <p className="text-sm">{message.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-6 bg-white border-t border-gray-200">
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type a message..."
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <button
              onClick={handleSendMessage}
              className="bg-gradient-to-l from-green-400 to-cyan-500 text-white p-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              <IconSend size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;