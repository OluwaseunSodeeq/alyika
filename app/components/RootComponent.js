import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import ChatWidget from "./ChatWidget";

export default function RootComponent({ children }) {
  return (
    <section className="w-full mx-0 overflow-x-hidden">
      <section className="w-full relative ">
        <Header />
        <div>{children}</div>
        <ChatWidget />
        <Footer />
      </section>
    </section>
  );
}
