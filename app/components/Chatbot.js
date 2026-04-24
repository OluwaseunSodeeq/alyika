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

    const userMessage = input;
    setInput("");

    setMessages((prev) => [
      ...prev,
      { role: "user", content: userMessage },
      { role: "bot", content: "" },
    ]);

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: userMessage }),
    });

    const reader = res.body.getReader();
    const decoder = new TextDecoder();

    let botReply = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      botReply += chunk;

      // 🔥 Update last message live
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].content = botReply;
        return updated;
      });
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
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
  );
}
