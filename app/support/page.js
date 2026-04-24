"use client";
import { useState } from "react";
// import { X, Copy, Check, Heart } from "lucide-react";
// import SupportSliders from "../components/SupportSliders";
import Link from "next/link";
import Button from "../components/Button";
import SupportSection from "../components/SupportSection";
import Wrapper from "../components/Wrapper";
import { RightGradientDashedFadeLine } from "../components/GradientLines";
import DonationCard from "../components/DonationCard";

export default function Page() {
  const [showDonation, setShowDonation] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("8105810398");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const btnBg = "#012f25";
  const textColor = "#FDCD31";
  return (
    <main>
      {/* <div className="w-full p-0 m-0 2xl:max-w-[1400px] md:mx-auto box-border">
        <SupportSliders />
      </div> */}
      <Wrapper>
        <SupportSection />
        <RightGradientDashedFadeLine />
        {/* FOOT TEXT */}
        <div className="text-center mt-5 lg:mt-8 mb-10 ">
          <p className="2xl:text-[40px] lg:text-[32px] md:text-[32px] text-black mb-3 text-center font-satoshi font-bold lg:px-60">
            Every gift big or small helps a student build something that could
            change their world.
          </p>
          <div className="font-montserrat flex font-medium gap-3 flex-col-reverse md:flex-row justify-center items-center lg:mt-5">
            <Button
              btnBg={btnBg}
              textColor={textColor}
              onClick={() => setShowDonation(true)}
            >
              Donate Now!
            </Button>

            <Link
              href="/contact"
              className="transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <button className="underline text-dark-green text-[14px] cursor-pointer ">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        {showDonation && (
          <DonationCard
            setShowDonation={setShowDonation}
            handleCopy={handleCopy}
            copied={copied}
          />
        )}
      </Wrapper>
    </main>
  );
}
