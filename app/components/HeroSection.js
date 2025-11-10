"use client";
import useOpenContext from "../contexts/useOpenContext";
import HerosecLeftCard from "./HerosecLeftCard";
import HerosecRightCard from "./HerosecRightCard";
import Wrapper from "./Wrapper";

export default function HeroScetion() {
  const { mobile } = useOpenContext();
  return (
    <Wrapper bg={mobile ? "#ffffff" : "#012F25"}>
      <div className="w-full flex gap-[3rem] md:gap-[1.3rem] flex-col md:flex-row md:justify-center mt-0 mb-3 xl:py-3 ">
        <HerosecLeftCard />
        <HerosecRightCard />
      </div>
    </Wrapper>
  );
}
