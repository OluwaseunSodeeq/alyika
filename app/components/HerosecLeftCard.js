import Image from "next/image";
import React, { useState } from "react";
import { X, Copy, Check, Heart } from "lucide-react";
import Button from "./Button";
import Link from "next/link";
import {
  LeftGradientDashedFadeLine,
  RightGradientDashedFadeLine,
} from "./GradientLines";

export default function HerosecLeftCard() {
  const [showDonation, setShowDonation] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("8105810398");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const btnBg = "#fdcd31";
  const textColor = "#012f25";

  return (
    <div className="relative w-full 2xl:max-w-[36rem] xl:w-[33rem] xl:h-[40rem] md:h-[40rem] md:w-[45%] bg-dark-green text-main-bg pt-[4.2rem] md:pt-[3rem] xl:pt-[7rem] px-[1rem]  xl:px-[3.5rem] pb-0 xl:pb-[2rem] md:rounded-[1.2rem]">
      <h1 className="font-satoshi text-[48px] md:text-[40px] text-main-bg mb-4 md:font-medium leading-[1] lg:text-nowrap">
        <span className=""> Building Green </span>
        <span className="text-[84px] lg:text-[40px] text-yellow md:text-main-bg md:text-[48px] xl:[40px] font-bold md:font-medium">
          Dreams
        </span>
      </h1>
      <div className=" w-full text-[32px] xl:text-4xl text-main-bg font-light mb-4 p-0 text-nowrap">
        <div className=" flex gap-x-1 mt-[1rem] md:mt-0 ">
          <div className="border-b-2 flex gap-x-[10px] pb-1 ">
            <Image src="/white-arrows.svg" alt="arrow" width={32} height={32} />
            <span className="mr-1 lg:pb-2"> From</span>
          </div>

          <p className="lg:pb-3">the Ground Up</p>
        </div>
      </div>
      <div className="font-satoshi mt-4.5 md:mt-0">
        <h4 className="font-bold hidden md:block">Hi there. </h4>
        <p className="hidden md:block text-base text-main-bg font-light leading-6 italic">
          We’re a group of young Nigerians who’ve been knee-deep (literally) in
          flooded streets, trying to figure out how to stop climate change from
          wrecking our homes, schools, and futures.
        </p>
        <p className="text-base  text-main-bg font-light leading-6 mt-6 italic ">
          Project Climeset is a climate literacy organization that uses
          storytelling and technology to advance climate education, build
          resilience, and reduce climate apathy.
        </p>
      </div>

      <div className="font-montserrat flex font-medium gap-4 items-center mt-[2.5rem]  xl:mt-[1.2rem] pb-6 md:pb-0 pt-2 md:pt-0">
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSeSDq9c0lHfmWGWAnK5oHID6UgZAZQzosnWMfHCJc-ItjV5AA/viewform?usp=header"
          target="_blank"
        >
          <Button btnBg={btnBg} textColor={textColor}>
            Get Involved
          </Button>
        </Link>

        <button
          onClick={() => setShowDonation(true)}
          className="underline text-light-green text-[14px] cursor-pointer "
        >
          Support a Project
        </button>
      </div>

      <div className="w-full transition  md:hidden mt-2.5">
        <RightGradientDashedFadeLine />
      </div>
      {/* ✅ Backdrop lives here — direct child of outermost div, renders last */}
      {showDonation && (
        <div
          onClick={() => setShowDonation(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 flex items-center justify-center px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white z-50 rounded-2xl shadow-2xl w-full max-w-sm p-6 animate-fade-in"
          >
            <button
              onClick={() => setShowDonation(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center mb-5">
              <div className="bg-green-50 p-3 rounded-full mb-3">
                <Heart className="w-6 h-6 text-green-600 fill-green-200" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 font-montserrat">
                Make a Donation
              </h3>
              <p className="text-sm text-gray-500 mt-1 font-satoshi">
                Your support helps us make a difference
              </p>
            </div>

            <div className="border-t border-gray-100 mb-5" />

            <div className="bg-gray-50 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 font-satoshi uppercase tracking-wide">
                    Account Number
                  </p>
                  <p className="text-xl font-bold text-gray-900 font-montserrat tracking-widest mt-0.5">
                    8105810398
                  </p>
                </div>
                <button
                  onClick={handleCopy}
                  className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg font-medium transition-all duration-200 ${
                    copied
                      ? "bg-green-100 text-green-600"
                      : "bg-white border border-gray-200 text-gray-500 hover:border-green-400 hover:text-green-600"
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copy
                    </>
                  )}
                </button>
              </div>

              <div className="border-t border-gray-200" />

              <div>
                <p className="text-xs text-gray-400 font-satoshi uppercase tracking-wide">
                  Bank
                </p>
                <p className="text-base font-semibold text-gray-800 font-satoshi mt-0.5">
                  Palmpay
                </p>
              </div>

              <div className="border-t border-gray-200" />

              <div>
                <p className="text-xs text-gray-400 font-satoshi uppercase tracking-wide">
                  Account Name
                </p>
                <p className="text-base font-semibold text-gray-800 font-satoshi mt-0.5">
                  Abeedah Alabi
                </p>
              </div>
            </div>

            <p className="text-center text-xs text-gray-400 font-satoshi mt-4">
              Click anywhere outside to close
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
