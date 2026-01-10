const linkedinPost1 = `
LinkedIn Post (ready to copy)

🌍 Introducing Alyika — an environmental education chatbot built with purpose.

Alyika helps students and curious minds understand:
• real weather conditions
• climate change
• environmental sustainability

We combined:
✔ real weather data
✔ responsible AI
✔ strict topic boundaries
✔ student-friendly explanations

Alyika isn’t about predicting the future —
it’s about understanding the world we live in today.

Built with Next.js, Tailwind CSS, OpenWeather API, and OpenAI.

🌱 Learning starts with curiosity.`;

const documentationOtline = `
Alyika Chatbot – Developer Documentation (Outline) inside read.md file
1.Overview

Alyika is an educational chatbot focused on environment, climate, and weather.
2.🔹 Tech Stack

Next.js (App Router)

Tailwind CSS

OpenWeather API

OpenAI API

Recharts (for visuals)

In-memory caching

3. Architecture
User → Chat UI
     → Weather API (cached)
     → AI Explanation API (rate-limited)

4🔹 Key Features

Weather caching (10 min)

AI-powered explanations

Strict topic guardrails

Rate-limited AI routes

Auto-location detection

Educational follow-ups

5.🔹 Folder Structure
app/
 ├─ api/
 │   ├─ weather/
 │   ├─ explain-weather/
 │   └─ environment/
lib/
 ├─ weatherCache.js
 ├─ rateLimit.js
 ├─ openai.js
 └─ aiPrompt.js
 components/
 └─ ChatUI.jsx

6.🔹 Environment Variables
 OPENWEATHER_API_KEY=
 OPENAI_API_KEY=

 7🔹 Design Philosophy

Education over prediction

Safety over scope creep

Clarity over complexity

FINALE : 🏆 What you’ve achieved (be proud)

You’ve built:

a focused AI product

with real-world data

educational value

responsible AI usage

and clear documentation

This is portfolio-grade, fellowship-grade, and startup-grade work
`;
