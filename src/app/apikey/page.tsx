"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const ApiKeyPage = () => {
  const [apiKey, setApiKey] = useState("");
  const router = useRouter();

  const handleSaveKey = () => {
    if (apiKey.trim()) {
      localStorage.setItem("openai_api_key", apiKey);
      alert("API key saved successfully!");
      setApiKey("");
      router.push("/"); // Redirect back to the home page after saving the key
    } else {
      alert("Please enter a valid API key.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-4">
        <h2 className="text-xl font-semibold text-center">
          Enter Your OpenAI API Key
        </h2>
        <input
          type="text"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Enter your OpenAI API key"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSaveKey}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Save API Key
        </button>
      </div>
    </div>
  );
};

export default ApiKeyPage;
