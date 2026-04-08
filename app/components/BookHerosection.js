"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { SquareButton } from "./SquareButton";
import DonationCard from "./DonationCard";
import StatsCards from "./BookStatsCards";

// TESTING PURPOSES ONLY

// Circular progress ring
function CircularProgress({ value, max, label, color = "#FDCD31" }) {
  const radius = 33;
  const stroke = 6;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const progress = (value / max) * circumference;

  return (
    <div className="flex flex-col items-center gap-[6px]">
      <div className="relative w-[76px] h-[76px] md:w-[84px] md:h-[84px] xl:w-[92px] xl:h-[92px]">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 72 72"
          className="-rotate-90"
        >
          <circle
            cx="36"
            cy="36"
            r={normalizedRadius}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth={stroke}
          />
          <circle
            cx="36"
            cy="36"
            r={normalizedRadius}
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeDasharray={`${progress} ${circumference}`}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[14px] md:text-[15px] font-extrabold text-gray-900 leading-none">
            {value}+
          </span>
        </div>
      </div>
      <p className="text-[9px] md:text-[10px] text-gray-500 text-center font-medium leading-tight max-w-[72px]">
        {label}
      </p>
    </div>
  );
}

// Gauge / semicircle progress
function GaugeProgress({ value, max, label }) {
  const r = 30;
  const stroke = 6;
  const nr = r - stroke / 2;
  const circumference = Math.PI * nr;
  const progress = (value / max) * circumference;
  const cx = 36;
  const cy = 36;

  return (
    <div className="flex flex-col items-center gap-[6px]">
      <div className="relative w-[76px] h-[46px] md:w-[84px] md:h-[50px] xl:w-[92px] xl:h-[54px]">
        <svg width="100%" height="100%" viewBox="0 0 72 42">
          {/* Track */}
          <path
            d={`M ${stroke / 2 + 2} 38 A ${nr} ${nr} 0 0 1 ${72 - stroke / 2 - 2} 38`}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth={stroke}
            strokeLinecap="round"
          />
          {/* Progress */}
          <path
            d={`M ${stroke / 2 + 2} 38 A ${nr} ${nr} 0 0 1 ${72 - stroke / 2 - 2} 38`}
            fill="none"
            stroke="#012F25"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={`${progress} ${circumference}`}
          />
        </svg>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          <span className="text-[14px] md:text-[15px] font-extrabold text-gray-900 leading-none">
            {value}+
          </span>
        </div>
      </div>
      <p className="text-[9px] md:text-[10px] text-gray-500 text-center font-medium leading-tight max-w-[72px]">
        {label}
      </p>
    </div>
  );
}

function StatsSection() {
  return (
    <section className="w-full font-satoshi">
      <div className="flex flex-col md:flex-row w-full min-h-[380px] md:min-h-[460px] xl:min-h-[520px]">
        {/* ── LEFT: Full-bleed image panel ── */}
        <div className="relative w-full h-[240px] md:h-auto md:w-[44%] xl:w-[42%] overflow-hidden flex-shrink-0">
          {/* 
            Replace with your actual image src.
            The image should be a landscape/nature photograph.
          */}
          <Image
            src="/bookbig.png"
            alt="The Story Break"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 44vw"
          />

          {/* Gradient overlay — darker at bottom for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

          {/* Title — bottom left of image */}
          <div className="absolute bottom-5 left-5 md:bottom-7 md:left-6 xl:bottom-9 xl:left-8">
            <h2
              className="font-serif text-white leading-[1.05] font-bold drop-shadow-xl
              text-[26px] md:text-[28px] xl:text-[34px]"
            >
              THE
              <br />
              STORY
              <br />
              BREAK
            </h2>
          </div>
        </div>

        {/* ── RIGHT: Stats content panel ── */}
        <div className="relative w-full md:flex-1 bg-white flex flex-col">
          {/* Yellow accent stripe at very top */}
          <div className="w-full h-[5px] md:h-[6px] bg-[#FDCD31] flex-shrink-0" />

          <div className="flex flex-col flex-1 px-5 md:px-6 xl:px-9 py-5 md:py-6 xl:py-8 gap-4 md:gap-0 md:justify-between">
            {/* ── Quote / headline ── */}
            <p className="text-gray-900 font-bold text-[12px] md:text-[13px] xl:text-[14px] leading-snug max-w-[240px] xl:max-w-[280px]">
              &ldquo;Nana&aposs Story isn&apost Over. Let&aposs Build Her a
              Stronghold&ldquo;
            </p>

            {/* ── Hero number: 650+ ── */}
            <div>
              <div className="flex items-baseline gap-0">
                <span className="text-[58px] md:text-[64px] xl:text-[76px] font-black text-gray-900 leading-none tracking-tighter">
                  650+
                </span>
              </div>
              <p className="text-[10px] md:text-[11px] text-gray-400 font-medium mt-[2px] leading-tight max-w-[160px]">
                Families supported across our programmes
              </p>
              {/* Yellow underline accent */}
              <div className="w-10 h-[3px] bg-[#FDCD31] mt-3 rounded-full" />
            </div>

            {/* ── Small stat cards row ── */}
            <div className="flex items-end gap-5 md:gap-6 xl:gap-8">
              {/* Circular: 200+ */}
              <CircularProgress
                value={200}
                max={300}
                label="Young people reached"
                color="#FDCD31"
              />

              {/* Gauge: 95+ */}
              <GaugeProgress value={95} max={100} label="Satisfaction rate" />

              {/* Partner logos — bottom right */}
              <div className="ml-auto flex flex-col items-end gap-2 pb-1 self-end">
                {/* Replace these with actual partner logo Images */}
                <div className="flex items-center gap-1.5">
                  <div className="w-[18px] h-[18px] rounded bg-[#FDCD31] opacity-80" />
                  <span className="text-[8px] xl:text-[9px] text-gray-400 uppercase tracking-wider font-semibold">
                    Leaflink
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-[18px] h-[18px] rounded bg-[#012F25] opacity-70" />
                  <span className="text-[8px] xl:text-[9px] text-gray-400 uppercase tracking-wider font-semibold">
                    Growbase
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BookHerosection() {
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
    <div className="relative bg-dark-green">
      <div className="relative top-[-15px] left-0">
        <Image
          src="/stolenbig.png"
          alt="The Story Break"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto object-contain object-center rounded-lg"
        />
      </div>
      <div className="absolute xl:right-[5%] top-[130px] w-full xl:w-[430px] h-auto  font-satoshi">
        <h1 className="px-2 2xl:text-[45px] md:text-[40px] text-[20px] text-center font-bold  text-main-bg">
          “Nana’s Story isn’t Over. Let’s Build Her a Stronghold”
        </h1>
        <p className="xl:mt-5 text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[22px] text-main-bg text-right leading-relaxed">
          &quot;The Stolen Breath&quot; is a 99-page novel based on true
          happenings, centered around climate education and resilience that
          chronicles the struggle of 11-year-old Nana to save her
          flood-threatened school in Itowolo. To provide the story the happy
          ending it needs, we are raising ₦1,500,000 to fund eco-resilient
          classroom renovation projects at Community Primary School, Itowolo.
        </p>
        <div className="flex flex-row-reverse xl:flex-row gap-4  px-4 xl:mt-5 items-center">
          <div onClick={() => setShowDonation(true)}>
            <SquareButton btnBg={btnBg} textColor={textColor}>
              DONATE TO THE PROJECT
            </SquareButton>
          </div>
          <Link href="https://selar.com/thestolenbreath" target="_blank">
            <button className="underline text-light-green text-[14px] cursor-pointer ">
              Buy An E-Copy
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-[5%]">
        {/* <BookStatsCards /> */}
        <StatsCards />
      </div>

      {showDonation && (
        <DonationCard
          setShowDonation={setShowDonation}
          copied={copied}
          handleCopy={handleCopy}
        />
      )}

      {/* <div className="w-full mx-auto text-main-bg text-5xl text-center py-12 border-4 ">
        <h1>What are u looking for?</h1>
        <h1>Be calming down oooo 😆🤣😁</h1>
      </div> */}
    </div>
  );
}
