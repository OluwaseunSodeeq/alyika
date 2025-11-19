import React from "react";
import AboutHeroSection from "../components/AboutHeroSection";
import AboutCards from "../components/AboutCards";
import Wrapper from "../components/Wrapper";

export default function Page() {
  return (
    <Wrapper>
      <div className="md:px-[1.5rem] xl:px-[3.5rem]">
        <AboutHeroSection />
      </div>
      <AboutCards />
    </Wrapper>
  );
}
