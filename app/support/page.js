"use client";
import { useState } from "react";
import { X, Copy, Check, Heart } from "lucide-react";
import Link from "next/link";
import Button from "../components/Button";
import SupportSection from "../components/SupportSection";
import SupportSliders from "../components/SupportSliders";
import Wrapper from "../components/Wrapper";
import { RightGradientDashedFadeLine } from "../components/GradientLines";

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
      <div className="w-full p-0 m-0 2xl:max-w-[1400px] md:mx-auto box-border">
        <SupportSliders />
      </div>
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
            <button
              onClick={() => setShowDonation(true)}
              className="underline text-dark-green text-[14px] cursor-pointer "
            >
              Support
            </button>
          </div>
        </div>
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
      </Wrapper>
    </main>
  );
}
