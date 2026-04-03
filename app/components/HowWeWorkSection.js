"use client";
import React, { useState } from "react";
import { X, Copy, Check, Heart } from "lucide-react";
import HowWeWorkCard from "./HowWeWorkCard";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

export default function HowWeWorkSection() {
  const [showDonation, setShowDonation] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("8105810398");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const howWeWorkArray = [
    {
      heading: "GDFT",
      text: "Building digital skills and solutions that help young people use and create tech for climate action.",
      link: "/projects/gdft",
    },
    {
      heading: "GDS",
      text: "Building awareness through stories of climate resilience, told in ways everyone can understand.",
      link: "/projects/gds",
    },
    {
      heading: "GDC",
      text: "Building digital campaigns and community actions that spread awareness and inspire change.",
      link: "/projects/gdc",
    },
  ];

  return (
    // ✅ removed overflow-hidden from here — it was trapping the fixed backdrop
    <div className="px-[1rem] xl:px-[3.5rem] bg-dark-green relative">
      <div className="flex flex-col md:flex-row md:justify-between xl:px-4 pb-3 pt-[3rem] md:pt-[5rem]">
        <div className="font-satoshi text-main-bg text-[25px] xl:text-4xl">
          <h4 className="font-bold">Wanna see how we work?</h4>
          <span className="font-light block">Our projects are sectioned </span>
          <span className="font-light">into the following:</span>
        </div>

        {/* ✅ Buttons only — no backdrop here */}
        <div className="flex gap-x-6 items-center mt-[3.4rem] md:mt-[5.4rem] relative z-20">
          <Link href="/projects" className="inline-block">
            <Button btnBg="#ffffff" textColor="#012f25">
              See Our Projects
            </Button>
          </Link>
          <button
            onClick={() => setShowDonation(true)}
            className="italic underline cursor-pointer font-montserrat text-[11px] font-medium text-main-bg mt-3.5"
          >
            Support Us
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center pt-[4.6rem] xl:pt-[5.6rem] pb-[5rem] xl:pb-[9rem] gap-6">
        {howWeWorkArray.map((item, i) => (
          <HowWeWorkCard key={i} index={i} item={item} />
        ))}
      </div>

      <div className="absolute opacity-100 w-[24rem] md:w-[34rem] h-[22rem] md:h-[32rem] top-[1rem] xl:top-[6rem] right-[-6rem] rotate-[34deg] pointer-events-none z-0">
        <Image src="/logo-bg.png" alt="logo" fill className="object-contain" />
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
