"use client";
import useOpenContext from "../contexts/useOpenContext";
import HerosecLeftCard from "./HerosecLeftCard";
import HerosecRightCard from "./HerosecRightCard";
import Wrapper from "./Wrapper";

export default function HeroScetion() {
  const { mobile } = useOpenContext();
  return (
    <div className="relative z-0 top-[-2]">
      <Wrapper bg={mobile ? "#ffffff" : "#012F25"}>
        <div className=" w-full h-auto flex flex-col md:flex-row md:justify-center xl:gap-[1.3rem]  mt-0 mb-3 xl:mt-3 rounded-b-[2rem]">
          <HerosecLeftCard />
          <HerosecRightCard />
        </div>
      </Wrapper>
    </div>
  );
}
