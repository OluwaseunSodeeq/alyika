"use client";
import useOpenContext from "../contexts/useOpenContext";
import HerosecLeftCard from "./HerosecLeftCard";
import HerosecRightCard from "./HerosecRightCard";
import Wrapper from "./Wrapper";

export default function HeroScetion() {
  const { mobile } = useOpenContext();
  return (
    <Wrapper bg={mobile ? "#ffffff" : "#012F25"}>
      <div className="relative w-full h-auto flex flex-col md:flex-row md:justify-center md:gap-[1.3rem]  mt-0 mb-3 xl:mt-3 rounded-b-[2rem]">
        <HerosecLeftCard />
        <HerosecRightCard />
      </div>
    </Wrapper>
  );
}
