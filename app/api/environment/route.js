// import { NextResponse } from "next/server";
// import { SYSTEM_PROMPT } from "../../../lib/aiPrompt";
// import { openai } from "../../../lib/openai";
// import { rateLimit } from "../../../lib/rateLimit";

// export async function POST(req) {
//   const ip = req.headers.get("x-forwarded-for") || "unknown";

//   if (!rateLimit(ip)) {
//     return NextResponse.json(
//       { error: "Too many requests. Please slow down 😊" },
//       { status: 429 }
//     );
//   }

//   const { question } = await req.json();

//   if (!question) {
//     return NextResponse.json(
//       { error: "Question is required" },
//       { status: 400 }
//     );
//   }

//   try {
//     const completion = await openai.chat.completions.create({
//       model: "gpt-4o-mini",
//       temperature: 0.4,
//       max_tokens: 300,
//       messages: [
//         { role: "system", content: SYSTEM_PROMPT },
//         {
//           role: "user",
//           content: question,
//         },
//       ],
//     });

//     return NextResponse.json({
//       answer: completion.choices[0].message.content,
//     });
//   } catch (error) {
//     return NextResponse.json(
//       {
//         answer:
//           "I’m having trouble answering that right now. Please try again shortly 🌱",
//       },
//       { status: 200 }
//     );
//   }
// }

// export async function POST(req) {
//   const { question } = await req.json();

//     const prompt = `
//   You are Alyika, an environmental education assistant.
//   Only answer questions about the environment, climate change, and sustainability.
//   Explain in a friendly, engaging way suitable for students.

//   Question: ${question}
//   `;

//   // TEMP placeholder — replace with OpenAI later
//   const response =
//     "Climate change is mainly caused by human activities such as burning fossil fuels, deforestation, and industrial processes. These release greenhouse gases that trap heat in the atmosphere, leading to global warming.";

//   return NextResponse.json({ answer: response });
// }
