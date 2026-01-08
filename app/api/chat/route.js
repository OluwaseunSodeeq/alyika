import { NextResponse } from "next/server";

export async function POST(req) {
  const { message } = await req.json();

  // Later: AI logic goes here
  //   return NextResponse.json({
  //     reply: "This is where the AI-generated environmental response will appear.",
  //   });
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: userMessage }),
  });

  const data = await res.json();

  setMessages((prev) => [
    ...prev.slice(0, -1),
    { role: "bot", content: data.reply },
  ]);
}
