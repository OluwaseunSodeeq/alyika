"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { SquareButton } from "./SquareButton";
import DonationCard from "./DonationCard";
import StatsCards from "./BookStatsCards";
import GrowthCard from "./GrowthCard";

export default function BookHerosection() {
  const [copied, setCopied] = useState(false);
  const [showDonation, setShowDonation] = useState(false);

  const sectionRef = useRef(null);
  const [raised, setRaised] = useState(0);
  const [sold, setSold] = useState(0);
  const [soldCopies, setSoldCopies] = useState(0);
  const [soldvalueInPercent, setSoldValueInPercent] = useState(0);
  const soldPercent = 37;
  const raisedTarget = 563000;
  const soldCopiesPercent = 225;

  const goalAmount = 1500000;
  const goalCopies = 600;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          let progress = 0;

          const animate = () => {
            if (progress <= 100) {
              setRaised(Math.floor((raisedTarget * progress) / 100));
              setSold(Math.floor((soldPercent * progress) / 100));
              setSoldCopies(Math.floor((soldCopiesPercent * progress) / 100));
              setSoldValueInPercent(Math.floor((soldPercent * progress) / 100));

              progress += 2;
              requestAnimationFrame(animate);
            }
          };

          animate();

          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const raisedPercentage = (raised / 1500000) * 100;

  // const soldCopies = 225;
  // const raisedPercentage = 37;

  // =============
  const handleCopy = () => {
    navigator.clipboard.writeText("8105810398");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const btnBg = "#fdcd31";
  const textColor = "#012f25";

  return (
    <div className="relative bg-dark-green min-h-screen pb-5 md:pb-[80px] lg:pb-[100px]">
      {/* Hero Image */}
      <div className="relative top-[-15px]">
        <Image
          src="/stolenbig.png"
          alt="The Story Break"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto object-contain object-center"
        />
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="relative w-full flex justify-end mt-[-250px] md:mt-[-760px] xl:mt-[-1300px] px-4">
        <div className="w-full md:w-[380px] lg:w-[430px] flex flex-col gap-10">
          {/* TEXT BLOCK */}
          <div className="relative font-satoshi">
            <h1 className="w-full pl-[200px] md:pl-[50px] lg:px-3 text-[20px] md:text-[40px] 2xl:text-[45px] text-center font-bold text-main-bg">
              “Nana’s Story isn’t Over. Let’s Build Her a Stronghold”
            </h1>

            <div className="mt-6 md:mt-10">
              <p className="text-sm md:text-[16px] xl:text-[18px] 2xl:text-[22px] text-main-bg text-right leading-relaxed pl-2 pr-2">
                &quot;The Stolen Breath&quot; is a 99-page novel based on true
                happenings, centered around climate education and resilience
                that chronicles the struggle of 11-year-old Nana to save her
                flood-threatened school in Itowolo. To provide the story the
                happy ending it needs, we are raising ₦1,500,000 to fund
                eco-resilient classroom renovation projects at Community Primary
                School, Itowolo.
              </p>

              <div className="flex flex-col-reverse md:flex-row gap-4 items-center mt-6 px-3">
                <div onClick={() => setShowDonation(true)}>
                  <SquareButton btnBg={btnBg} textColor={textColor}>
                    DONATE TO THE PROJECT
                  </SquareButton>
                </div>

                <Link href="https://selar.com/thestolenbreath" target="_blank">
                  <button className="underline text-light-green text-[14px] cursor-pointer">
                    Buy An E-Copy
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* SOLD BOOKS CARD */}
          <div className="block md:flex md:gap-3 items-center lg:block">
            <SoldBooksCounts
              soldCopies={soldCopies}
              raisedPercentage={raisedPercentage}
            />
            <div className=" hidden md:block lg:hidden">
              <GrowthCard value={soldvalueInPercent} />
            </div>
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="w-full px-4 pt-10 md:pt-16">
        <StatsCards
          sold={sold}
          raised={raised}
          goalCopies={goalCopies}
          goalAmount={goalAmount}
          soldCopies={soldCopies}
          raisedPercentage={raisedPercentage}
          sectionRef={sectionRef}
        />
      </div>

      {/* <div className="xl:h-[100px] 2xl:h-[200px] border-2" /> */}

      {/* DONATION MODAL */}
      {showDonation && (
        <DonationCard
          setShowDonation={setShowDonation}
          copied={copied}
          handleCopy={handleCopy}
        />
      )}
    </div>
  );
}

/* ================= CARD ================= */

function SoldBooksCounts({ soldCopies, raisedPercentage }) {
  return (
    <div className="font-satoshi bg-white backdrop-blur-md rounded-2xl py-6 px-6 flex flex-col items-center gap-4 w-full md:w-[300px] xl:w-[400px] mx-auto shadow-lg transition-all duration-300 hover:scale-105">
      <h1 className="text-dark-green font-bold text-[40px] xl:text-[100px] 2xl:text-[120px]">
        {soldCopies}+
      </h1>

      <div className="w-[80%] bg-[#F3F3F3] rounded-full h-3 overflow-hidden">
        <div
          className="bg-[#00D648] h-3 rounded-full"
          style={{ width: `${raisedPercentage}%` }}
        />
      </div>

      <p className="font-normal text-sm mt-2 text-center text-dark-green xl:px-6">
        Your support turns a story into shelter. Every donation brings us closer
        to building climate-resilient infrastructure that protects the children
        of Community Primary School, Itowolo.
      </p>
    </div>
  );
}

// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import Image from "next/image";
// import { SquareButton } from "./SquareButton";
// import DonationCard from "./DonationCard";
// import StatsCards from "./BookStatsCards";

// export default function BookHerosection() {
//   const [showDonation, setShowDonation] = useState(false);
//   const [copied, setCopied] = useState(false);
//   const soldCopies = 225;
//   const raisedPercentage = 37;
//   const handleCopy = () => {
//     navigator.clipboard.writeText("8105810398");
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const btnBg = "#fdcd31";
//   const textColor = "#012f25";

//   return (
//     // <div className="relative bg-dark-green h-[2105px] md:h-[1350px] lg:h-auto">
//     <div className="relative bg-dark-green min-h-screen pb-[120px]">
//       <div className="relative top-[-15px] left-0">
//         <Image
//           src="/stolenbig.png"
//           alt="The Story Break"
//           width={0}
//           height={0}
//           sizes="100vw"
//           className="w-full h-auto object-contain object-center rounded-lg"
//         />
//       </div>
//       {/* NanasCard */}
//       {/* <div className=" border-4 relative xl:top-10 font-satoshi w-full md:w-[380px] lg:w-[430px] min-h-[500px] md:h-auto b right-0 md:mx-[1.5rem] lg:mx-[3rem]"> */}
//       <div className="absolute top-[170px] md:top-[100px] lg:top-[130px] font-satoshi w-full md:w-[380px] lg:w-[430px] min-h-[1200px] md:h-auto b right-0 md:mx-[1.5rem] lg:mx-[3rem] border-4">
//         <div className="relative w-full">
//           <h1 className="w-[180px] md:w-[380px] absolute top-2 right-2 lg:w-full px-3 2xl:text-[45px] md:text-[40px] text-[20px] text-center font-bold text-main-bg">
//             “Nana’s Story isn’t Over. Let’s Build Her a Stronghold”
//           </h1>
//           <div className="relative top-34 md:top-52">
//             <p className=" text-sm md:text-[16px] xl:text-[18px] 2xl:text-[22px] text-main-bg text-right leading-relaxed pl-4 pr-6 md:pr-6 xl:pr-0 ">
//               &quot;The Stolen Breath&quot; is a 99-page novel based on true
//               happenings, centered around climate education and resilience that
//               chronicles the struggle of 11-year-old Nana to save her
//               flood-threatened school in Itowolo. To provide the story the happy
//               ending it needs, we are raising ₦1,500,000 to fund eco-resilient
//               classroom renovation projects at Community Primary School,
//               Itowolo.
//             </p>
//             <div className="flex flex-col-reverse md:flex-row gap-4 items-center mt-5 md:mt-8 xl:mt-5 px-3 pb-3 md:py-0 xl:pr-0">
//               <div onClick={() => setShowDonation(true)}>
//                 <SquareButton btnBg={btnBg} textColor={textColor}>
//                   DONATE TO THE PROJECT
//                 </SquareButton>
//               </div>
//               <Link href="https://selar.com/thestolenbreath" target="_blank">
//                 <button className="underline text-light-green text-[14px] cursor-pointer ">
//                   Buy An E-Copy
//                 </button>
//               </Link>
//             </div>
//           </div>
//           <SoldBooksCounts
//             soldCopies={soldCopies}
//             raisedPercentage={raisedPercentage}
//           />
//         </div>
//       </div>
//       {/* //=============================== Card1*/}
//       {/* <SoldBooksCounts
//           soldCopies={soldCopies}
//           raisedPercentage={raisedPercentage}
//         />
//       </div> */}
//       <div className="w-full h-[1400px] px-4 pt-3 md:h-auto relative left-1/2 -translate-x-1/2 ">
//         <StatsCards />
//       </div>
//       <div className="xl:h-[100px] 2xl:h-[200px]  w-full"></div>

//       {showDonation && (
//         <DonationCard
//           setShowDonation={setShowDonation}
//           copied={copied}
//           handleCopy={handleCopy}
//         />
//       )}

//       {/* <div className="w-full mx-auto text-main-bg text-5xl text-center py-12 border-4 ">
//         <h1>What are u looking for Againg ?</h1>
//         <h1>Be calming down oooo 😆🤣😁</h1>
//       </div> */}
//     </div>
//   );
// }

// function SoldBooksCounts({ soldCopies, raisedPercentage }) {
//   return (
//     <div
//       className="relative font-satoshi bg-white backdrop-blur-md rounded-2xl py-6 px-6 flex flex-col items-center gap-4 w-full h-[300px] xl:ml-6 md:h-auto xl:w-[400px] border-3 shadow-lg hover:shadow-lg
//               transition-all duration-300 hover:scale-105"
//     >
//       <h1 className=" text-dark-green font-bold text-[40px] xl:text-[100px] 2xl:text-[120px] ">
//         {soldCopies}+
//       </h1>
//       <div className=" w-[80%] bg-[#F3F3F3] rounded-full h-3 overflow-hidden">
//         <div
//           className="bg-[#00D648] h-3 rounded-full"
//           style={{ width: `${raisedPercentage}%` }}
//         />
//       </div>
//       <p className="font-normal text-sm mt-2 text-center text-dark-green xl:px-6">
//         Your support turns a story into shelter. Every donation brings us closer
//         to building climate-resilient infrastructure that protects the children
//         of Community Primary School, Itowolo.
//       </p>
//     </div>
//   );
// }
// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import Image from "next/image";
// import { SquareButton } from "./SquareButton";
// import DonationCard from "./DonationCard";
// import StatsCards from "./BookStatsCards";

// export default function BookHerosection() {
//   const [showDonation, setShowDonation] = useState(false);
//   const [copied, setCopied] = useState(false);

//   const handleCopy = () => {
//     navigator.clipboard.writeText("8105810398");
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const btnBg = "#fdcd31";
//   const textColor = "#012f25";

//   return (
//     // <div className="relative bg-dark-green h-[2105px] md:h-[1350px] lg:h-auto">
//     <div className="relative bg-dark-green min-h-screen pb-[120px]">
//       <div className="relative top-[-15px] left-0">
//         <Image
//           src="/stolenbig.png"
//           alt="The Story Break"
//           width={0}
//           height={0}
//           sizes="100vw"
//           className="w-full h-auto object-contain object-center rounded-lg"
//         />
//       </div>
//       {/* <div className=" border-4 relative xl:top-10 font-satoshi w-full md:w-[380px] lg:w-[430px] min-h-[500px] md:h-auto b right-0 md:mx-[1.5rem] lg:mx-[3rem]"> */}
//       <div className="absolute top-[170px] md:top-[100px] lg:top-[130px] font-satoshi w-full md:w-[380px] lg:w-[430px] min-h-[500px] md:h-auto b right-0 md:mx-[1.5rem] lg:mx-[3rem]">
//         <div className="relative w-full">
//           <h1 className="w-[180px] md:w-[380px] absolute top-2 right-2 lg:w-full px-3 2xl:text-[45px] md:text-[40px] text-[20px] text-center font-bold text-main-bg">
//             “Nana’s Story isn’t Over. Let’s Build Her a Stronghold”
//           </h1>
//           <div className="relative top-34 md:top-52">
//             <p className=" text-sm md:text-[16px] xl:text-[18px] 2xl:text-[22px] text-main-bg text-right leading-relaxed pl-4 pr-6 md:pr-6 xl:pr-0 ">
//               &quot;The Stolen Breath&quot; is a 99-page novel based on true
//               happenings, centered around climate education and resilience that
//               chronicles the struggle of 11-year-old Nana to save her
//               flood-threatened school in Itowolo. To provide the story the happy
//               ending it needs, we are raising ₦1,500,000 to fund eco-resilient
//               classroom renovation projects at Community Primary School,
//               Itowolo.
//             </p>
//             <div className="flex flex-col-reverse md:flex-row gap-4 items-center mt-5 md:mt-8 xl:mt-5 px-3 pb-3 md:py-0 xl:pr-0">
//               <div onClick={() => setShowDonation(true)}>
//                 <SquareButton btnBg={btnBg} textColor={textColor}>
//                   DONATE TO THE PROJECT
//                 </SquareButton>
//               </div>
//               <Link href="https://selar.com/thestolenbreath" target="_blank">
//                 <button className="underline text-light-green text-[14px] cursor-pointer ">
//                   Buy An E-Copy
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="w-full h-[1400px] px-4 pt-3 md:h-auto absolute top-[700px] 2xl:top-[840px] left-1/2 -translate-x-1/2 ">
//         <StatsCards />
//       </div>
//       <div className="xl:h-[100px] 2xl:h-[200px]  w-full"></div>

//       {showDonation && (
//         <DonationCard
//           setShowDonation={setShowDonation}
//           copied={copied}
//           handleCopy={handleCopy}
//         />
//       )}

//       {/* <div className="w-full mx-auto text-main-bg text-5xl text-center py-12 border-4 ">
//         <h1>What are u looking for Againg ?</h1>
//         <h1>Be calming down oooo 😆🤣😁</h1>
//       </div> */}
//     </div>
//   );
// }
