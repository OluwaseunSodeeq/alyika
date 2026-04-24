import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import ChatWidget from "./ChatWidget";
// Questions
// What’s the weather in Lagos?
// tell me about ozone Layer
// What is pollution?
// What is exclipse of the sun?
// what are the names of artemis 2.0 crew members?

export default function RootComponent({ children }) {
  return (
    <section className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />

      <main className="flex-1 relative">{children}</main>

      <Footer />

      <ChatWidget />
    </section>
  );
}
