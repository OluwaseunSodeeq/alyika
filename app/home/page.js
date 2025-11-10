// "use client";
import React from "react";
import Wrapper from "../components/Wrapper";
import WhatWeDoSection from "../components/WhatWeDoSection";
import TestimonialSection from "../components/TestimonialSection";
import HowWeWorkSection from "../components/HowWeWorkSection";
import Partners from "../components/Partners";
import HeroScetion from "../components/HeroSection";

export default function Page() {
  return (
    <section>
      <HeroScetion />
      <Wrapper bg={"#ffffff"}>
        <WhatWeDoSection />
        <TestimonialSection />
        <HowWeWorkSection />
        <Partners />
      </Wrapper>
    </section>
  );
}
