import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function RootComponent({ children }) {
  return (
    <section className="w-full">
      <section className="w-full  ">
        <Header />
        <div>{children}</div>
        <Footer />
      </section>
    </section>
  );
}
