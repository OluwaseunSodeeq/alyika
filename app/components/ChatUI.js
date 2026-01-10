"use client";
import { useState, useEffect, useRef } from "react";
import { isEnvironmentRelated } from "../../lib/isEnvironmentRelated";
import { isWeatherQuery } from "../../lib/isWeatherQuery";

export default function ChatUI() {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content: "Welcome 👋 What would you like to ask me today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [userCity, setUserCity] = useState(null);

  const messagesEndRef = useRef(null);

  // 🌍 Get user's default location
  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(async (pos) => {
      try {
        const res = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&localityLanguage=en`
        );
        const data = await res.json();
        setUserCity(data.city || data.locality);
      } catch {
        setUserCity(null);
      }
    });
  }, []);

  // 🔽 Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput("");

    // 1️⃣ Show user message
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);

    // ===============================
    // 🌤️ WEATHER QUESTIONS
    // ===============================
    if (isWeatherQuery(userMessage)) {
      setIsTyping(true);

      const cityMatch = userMessage.match(/in\s+([a-zA-Z\s]+)/i);
      const city = cityMatch?.[1]?.trim() || userCity || "Lagos";

      try {
        // 1️⃣ Fetch weather
        const res = await fetch("/api/weather", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ city }),
        });

        const weatherData = await res.json();

        if (weatherData.error) {
          setIsTyping(false);
          setMessages((prev) => [
            ...prev,
            {
              role: "bot",
              content: "I couldn't find weather data for that location.",
            },
          ]);
          return;
        }

        // 2️⃣ Show weather summary
        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            content: `🌤️ Here's the current weather in ${weatherData.location}:
            It's about ${weatherData.temperature}°C with ${weatherData.condition}.
            Humidity is ${weatherData.humidity}% and wind speed is ${weatherData.wind} m/s.`,
          },
        ]);

        // 3️⃣ Ask AI to explain weather
        const explainRes = await fetch("/api/ai", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "explain-weather",
            payload: weatherData,
          }),
        });

        const explainData = await explainRes.json();

        setIsTyping(false);

        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            content: `🌱 ${explainData.response}`,
            // content: `🌱 Why this matters:\n${explainData.response}`,
          },
        ]);
      } catch {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            content: "Something went wrong fetching the weather.",
          },
        ]);
      }

      return;
    }

    // ===============================
    // 🌱 ENVIRONMENT QUESTIONS
    // ===============================
    if (isEnvironmentRelated(userMessage)) {
      setIsTyping(true);

      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "environment",
          payload: userMessage,
        }),
      });

      const data = await res.json();

      setIsTyping(false);

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: data.response,
        },
      ]);

      return;
    }

    // ===============================
    // 🚫 OUTSIDE SCOPE
    // ===============================
    setMessages((prev) => [
      ...prev,
      {
        role: "bot",
        content:
          "🌍 I was built to help with environmental, climate, and weather-related questions only.",
      },
    ]);
  };

  return (
    <>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[80%] px-4 py-2 rounded-xl text-sm leading-relaxed ${
              msg.role === "user"
                ? "ml-auto bg-[#012f25] text-white rounded-br-none"
                : "bg-white text-gray-800 rounded-bl-none shadow"
            }`}
          >
            {msg.content}
          </div>
        ))}

        {isTyping && (
          <div className="text-sm text-gray-400 animate-pulse">
            Alyika is typing…
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 border-t flex gap-2 bg-white">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 rounded-full border outline-none focus:ring-2 focus:ring-[#012f25]"
        />
        <button
          onClick={sendMessage}
          className="px-5 rounded-full bg-[#012f25] text-white hover:opacity-90"
        >
          Send
        </button>
      </div>
    </>
  );
}

// ===============STEP TWO================

// "use client";
// import { useState, useEffect, useRef } from "react";
// import { isEnvironmentRelated } from "../../lib/isEnvironmentRelated";
// import { isWeatherQuery } from "../../lib/isWeatherQuery";

// export default function ChatUI() {
//   const [messages, setMessages] = useState([
//     // { role: "bot", content: "Hi 👋 How can I help you today?" },
//     {
//       role: "bot",
//       content: "Welcome, 👋 What would you like to ask me today?",
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const [userCity, setUserCity] = useState(null);

//   const messagesEndRef = useRef(null);

//   //   getting user default loacvtion
//   useEffect(() => {
//     if (!navigator.geolocation) return;

//     navigator.geolocation.getCurrentPosition(async (pos) => {
//       const res = await fetch(
//         `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&localityLanguage=en`
//       );

//       const data = await res.json();
//       setUserCity(data.city || data.locality);
//     });
//   }, []);

//   // ✅ Auto-scroll
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMessage = input;

//     // 1️⃣ Always show user message
//     setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
//     setInput("");

//     // 2️⃣ WEATHER QUESTIONS
//     if (isWeatherQuery(userMessage)) {
//       setIsTyping(true);

//       const cityMatch = userMessage.match(/in\s+([a-zA-Z\s]+)/i);
//       const city = cityMatch?.[1].trim() || userCity || "Lagos";

//       try {
//         const res = await fetch("/api/weather", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ city }),
//         });

//         const data = await res.json();
//         setIsTyping(false);

//         if (data.error) {
//           setMessages((prev) => [
//             ...prev,
//             {
//               role: "bot",
//               content: "I couldn't find weather data for that location.",
//             },
//           ]);
//         } else {
//           setMessages((prev) => [
//             ...prev,
//             {
//               role: "bot",
//               content: `🌤️ Here's the current weather in ${data.location}:
//                 It's about ${data.temperature}°C with ${data.condition}.
//                 Humidity is around ${data.humidity}%, and wind speed is ${data.wind} m/s.`,
//             },
//           ]);
//           setIsTyping(true);
//           // 2️⃣ Ask AI to explain the weather
//           const explainRes = await fetch("/api/explain-weather", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//               weather: {
//                 location: data.location,
//                 temperature: data.temperature,
//                 condition: data.condition,
//                 humidity: data.humidity,
//                 wind: data.wind,
//               },
//             }),
//           });

//           const explainData = await explainRes.json();
//           setIsTyping(false);
//           // 3️⃣ Show explanation
//           setMessages((prev) => [
//             ...prev,
//             {
//               role: "bot",
//               content: `🌱 Why this matters:\n${explainData.explanation}`,
//             },
//           ]);
//         }
//       } catch {
//         setIsTyping(false);
//         setMessages((prev) => [
//           ...prev,
//           {
//             role: "bot",
//             content: "Something went wrong fetching the weather.",
//           },
//         ]);
//       }
//       return;
//     }

//     // 3️⃣ ENVIRONMENT (non-weather)
//     if (isEnvironmentRelated(userMessage)) {
//       setIsTyping(true);

//       const res = await fetch("/api/environment", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ question: userMessage }),
//       });

//       const data = await res.json();
//       setIsTyping(false);

//       setMessages((prev) => [
//         ...prev,
//         {
//           role: "bot",
//           content: `🌱 ${data.answer}`,
//         },
//       ]);

//       return;
//     }

//     // 4️⃣ OUTSIDE SCOPE
//     setMessages((prev) => [
//       ...prev,
//       {
//         role: "bot",
//         content:
//           "🌍 I was built to help with environmental, climate, and weather-related questions only.",
//       },
//     ]);
//   };

//   return (
//     <>
//       {/* Messages */}
//       <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
//         {messages.map((msg, i) => (
//           <div
//             key={i}
//             className={`max-w-[80%] px-4 py-2 rounded-xl text-sm leading-relaxed ${
//               msg.role === "user"
//                 ? "ml-auto bg-[#012f25] text-white rounded-br-none"
//                 : "bg-white text-gray-800 rounded-bl-none shadow"
//             }`}
//           >
//             {msg.content}
//           </div>
//         ))}

//         {isTyping && (
//           <div className="text-sm text-gray-400 animate-pulse">
//             Alyika is typing…
//           </div>
//         )}

//         <div ref={messagesEndRef} />
//       </div>

//       {/* Input */}
//       <div className="p-3 border-t flex gap-2 bg-white">
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//           placeholder="Type your message..."
//           className="
//             flex-1
//             px-4 py-2
//             rounded-full
//             border
//             outline-none
//             focus:ring-2
//             focus:ring-[#012f25]
//           "
//         />
//         <button
//           onClick={sendMessage}
//           className="
//             px-5
//             rounded-full
//             bg-[#012f25]
//             text-white
//             hover:opacity-90
//           "
//         >
//           Send
//         </button>
//       </div>
//     </>
//   );
// }

// ===============STEP ONE================
// "use client";
// import { useState, useEffect, useRef } from "react";
// import { isEnvironmentRelated } from "../../lib/isEnvironmentRelated";

// export default function ChatUI() {
//   const [messages, setMessages] = useState([
//     { role: "bot", content: "Hi 👋 How can I help you today?" },
//   ]);
//   const [input, setInput] = useState("");
//   const [isTyping, setIsTyping] = useState(false);

//   const messagesEndRef = useRef(null);

//   // ✅ Auto-scroll
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMessage = input;

//     setMessages((prev) => [...prev, { role: "user", content: userMessage }]);

//     setInput("");

//     // ❌ Outside scope
//     if (!isEnvironmentRelated(userMessage)) {
//       setMessages((prev) => [
//         ...prev,
//         {
//           role: "bot",
//           content:
//             "🌱 I’m designed to answer questions about the environment, climate, and weather only.",
//         },
//       ]);
//       return;
//     }

//     // ⏳ Typing indicator
//     setIsTyping(true);

//     // TEMP response (replace later with API)
//     setTimeout(() => {
//       setIsTyping(false);
//       setMessages((prev) => [
//         ...prev,
//         {
//           role: "bot",
//           content:
//             "Climate change affects weather patterns by increasing temperature extremes and altering rainfall patterns.",
//         },
//       ]);
//     }, 1200);
//   };

//   return (
//     <>
//       {/* Messages */}
//       <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
//         {messages.map((msg, i) => (
//           <div
//             key={i}
//             className={`max-w-[80%] px-4 py-2 rounded-xl text-sm leading-relaxed ${
//               msg.role === "user"
//                 ? "ml-auto bg-[#012f25] text-white rounded-br-none"
//                 : "bg-white text-gray-800 rounded-bl-none shadow"
//             }`}
//           >
//             {msg.content}
//           </div>
//         ))}

//         {isTyping && (
//           <div className="text-sm text-gray-400 animate-pulse">
//             Alyika is typing…
//           </div>
//         )}

//         <div ref={messagesEndRef} />
//       </div>

//       {/* Input */}
//       <div className="p-3 border-t flex gap-2 bg-white">
//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//           placeholder="Type your message..."
//           className="
//             flex-1
//             px-4 py-2
//             rounded-full
//             border
//             outline-none
//             focus:ring-2
//             focus:ring-[#012f25]
//           "
//         />
//         <button
//           onClick={sendMessage}
//           className="
//             px-5
//             rounded-full
//             bg-[#012f25]
//             text-white
//             hover:opacity-90
//           "
//         >
//           Send
//         </button>
//       </div>
//     </>
//   );
// }
