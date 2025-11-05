"use client";

import { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;
    console.log("User input:", input);

    // const userMessage = { text: input, sender: "user" };
    // setMessages((prev) => [...prev, userMessage]);
    // setInput("");

    // // Placeholder for API integration
    // const botReply = await fetchBotReply(input);

    // setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
  };

  const fetchBotReply = async (userText) => {
    // Replace this with real API call
    return "I'm just a demo bot, but I'm listening!";
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    //    <div className=" w-full flex justify-center items-center border">
    <div className="fixed bottom-4   bg-white w-[90%] md:w-[40%] mx-auto h-[87%] shadow-xl rounded-lg flex flex-col border-2">
      <div className="bg-blue-600 text-white p-3 font-semibold text-center rounded-t-lg">
        Chatbot
      </div>
      <div className="flex-1 p-3 overflow-y-auto space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-[75%] px-4 py-2 rounded-lg text-sm ${
              msg.sender === "user"
                ? "bg-blue-100 self-end ml-auto"
                : "bg-gray-100 self-start mr-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <div className="flex border-t p-2">
        <input
          className="flex-1 border rounded-lg px-3 py-1 text-sm outline-none"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          className="ml-2 bg-blue-600 text-white px-4 py-1 rounded-lg text-sm"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
    // </div>
  );
}
