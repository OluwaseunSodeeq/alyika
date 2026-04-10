import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import ChatWidget from "./ChatWidget";

export default function RootComponent({ children }) {
  return (
    // <section className="w-full mx-0 overflow-x-hidden">
    //   <section className="w-full relative ">
    //     <Header />
    //     <div className="w-full relative z-10">{children}</div>
    //     <ChatWidget />
    //     <Footer />
    //   </section>
    // </section>
    <section className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />

      <main className="flex-1 relative">{children}</main>

      <Footer />

      <ChatWidget />
    </section>
  );
}
