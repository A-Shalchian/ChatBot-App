"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Use Next.js router for navigation

interface Message {
  sender: "user" | "bot";
  text: string;
}

const ChatBox = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // Initialize the router

  const handleSend = async () => {
    const apiKey = localStorage.getItem("openai_api_key");
    if (!apiKey) {
      alert("No API key found. Please enter your API key.");
      router.push("/apikey"); // Redirect to the API key page if no API key is found
      return;
    }

    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input }]);
      setLoading(true);

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: input, apiKey }),
        });
        const data = await response.json();

        if (response.status === 401) {
          alert("Incorrect API key provided. Please update your API key.");
          router.push("/apikey"); // Redirect if the API key is incorrect
          return;
        }

        if (data.reply) {
          setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
        } else {
          setMessages((prev) => [
            ...prev,
            {
              sender: "bot",
              text: "Sorry, I did not receive a valid response.",
            },
          ]);
        }
      } catch (error) {
        console.error("Error:", error);
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Sorry, something went wrong." },
        ]);
      } finally {
        setLoading(false);
        setInput("");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6 space-y-4">
        <div className="h-96 overflow-y-auto border-b border-gray-300 p-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              } mb-2`}
            >
              <div
                className={`px-4 py-2 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-black"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start mb-2">
              <div className="px-4 py-2 rounded-lg bg-gray-300 text-black">
                Typing...
              </div>
            </div>
          )}
        </div>
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
