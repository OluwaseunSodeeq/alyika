"use client";
import React, { useState } from "react";
import Button from "./Button";
import DonationCard from "./DonationCard";
import Link from "next/link";

export default function GalleryMiniFooter() {
  const [showDonation, setShowDonation] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("8105810398");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const btnBg = "#012f25";
  const textColor = "#ffffff";
  return (
    <div className=" w-full 2xl:max-w-[1400px] lg:px-[2.7rem] bg-yellow  mb-10">
      <div className=" flex gap-4 lg:gap-6  items-center justify-center py-4 px-2 ">
        <p className="hidden lg:block font-satoshi font-bold lg:text-[24px] text-black">
          We update this regularly because our Dreamers never stop dreaming.
        </p>
        <div className="font-montserrat flex font-medium gap-3 flex-col-reverse md:flex-row justify-center items-center">
          <Link
            href="https://whatsapp.com/channel/0029Vb7i8Px3rZZUJUPnh146"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button btnBg={btnBg} textColor={textColor}>
              Join our community
            </Button>
          </Link>

          <button
            onClick={() => setShowDonation(true)}
            className="underline text-dark-green text-[14px] cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 "
          >
            Support a Project
          </button>
        </div>

        {showDonation && (
          <DonationCard
            setShowDonation={setShowDonation}
            handleCopy={handleCopy}
            copied={copied}
          />
        )}
      </div>
    </div>
  );
}
