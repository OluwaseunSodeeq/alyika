// "use client";

// import Papa from "papaparse";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// function ProfileModal({ person, close }) {
//   const fullName = `${person["First Name"]} ${person["Last Name"]}`;
//   const imageName = `/teams/${person["First Name"].toLowerCase().replace(" ", "").trim()}.png`;

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       onClick={close}
//       className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
//     >
//       <motion.div
//         initial={{ scale: 0.8, y: 40 }}
//         animate={{ scale: 1, y: 0 }}
//         exit={{ scale: 0.8, y: 40 }}
//         transition={{ duration: 0.3 }}
//         onClick={(e) => e.stopPropagation()}
//         className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 relative"
//       >
//         {/* Close */}
//         <button
//           onClick={close}
//           className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
//         >
//           ✕
//         </button>

//         {/* Image */}
//         <div className="flex justify-center mb-4">
//           <div className="relative w-32 h-32">
//             <Image
//               src={imageName}
//               alt={fullName}
//               fill
//               sizes="128px"
//               className="rounded-full object-cover border-4 border-dark-grebg-dark-green shadow-md"
//             />
//           </div>
//         </div>

//         {/* Name */}
//         <h2 className="text-xl font-bold text-center text-gray-800">
//           {fullName}
//         </h2>

//         {/* Role */}
//         <p className="text-center text-dark-grebg-dark-green font-medium mt-2">
//           {person.role}
//         </p>

//         <div className="w-10 h-1 bg-dark-green mx-auto mt-3 rounded"></div>

//         <p className="text-gray-500 text-sm text-center mt-4">
//           Passionate about delivering excellence and making impact.
//         </p>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default function MeetTheTeamImages() {
//   const [showAll, setShowAll] = useState(false);
//   const [selected, setSelected] = useState(null);
//   const [team, setTeam] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const sheetURL =
//       "https://docs.google.com/spreadsheets/d/e/2PACX-1vTnu-jzKEnWbgElEg5iL7HTpdkyeuJBjCUCzeAYraqy-vKvU1-uFg8CCA_TkAuh9Jdp8F8xyIKtcvMM/pub?gid=0&single=true&output=csv";

//     fetch(sheetURL)
//       .then((res) => res.text())
//       .then((csv) => {
//         const parsed = Papa.parse(csv, { header: true });

//         const cleanData = parsed.data.filter(
//           (p) => p["First Name"] && p["Last Name"],
//         );

//         setTeam(cleanData);
//         setLoading(false);
//       });
//   }, []);
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const visibleImages = isMobile ? (showAll ? team : team.slice(0, 5)) : team;

//   return (
//     <section className="w-full py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
//       {/* Heading */}
//       <div className="text-center mb-10">
//         <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
//           Meet The Team
//         </h2>
//         <div className="w-16 h-1 bg-yellow-500 mx-auto mt-2 rounded"></div>
//       </div>

//       {/* Skeleton Loader */}
//       {loading ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 lg:gap-1">
//           {Array.from({ length: 10 }).map((_, i) => (
//             <div
//               key={i}
//               className="w-full aspect-square bg-gray-200 animate-pulse rounded-md"
//             />
//           ))}
//         </div>
//       ) : (
//         <>
//           {/* Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
//             {visibleImages.map((person, index) => {
//               const fullName = `${person["First Name"]} ${person["Last Name"]}`;
//               const imageName = `/teams/${person["First Name"].toLowerCase().replace(" ", "").trim()}.png`;

//               return (
//                 <motion.div
//                   key={index}
//                   layout
//                   onClick={() => setSelected(person)}
//                   className="relative w-full aspect-square overflow-hidden rounded-md cursor-pointer group"
//                 >
//                   <Image
//                     src={imageName}
//                     alt={fullName}
//                     fill
//                     sizes="(max-width: 768px) 100vw, 20vw"
//                     className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-300"
//                   />

//                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
//                     <p className="text-white font-semibold text-sm">
//                       View Profile
//                     </p>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* Button (mobile only) */}
//           <div className="flex justify-center mt-6 md:hidden">
//             <button
//               onClick={() => setShowAll((prev) => !prev)}
//               className="px-6 py-2 bg-dark-green text-white rounded-full text-sm font-medium shadow hover:bg-dark-green transition"
//             >
//               {showAll ? "See Less" : "See More"}
//             </button>
//           </div>
//         </>
//       )}

//       {/* Modal */}
//       <AnimatePresence>
//         {selected && (
//           <ProfileModal person={selected} close={() => setSelected(null)} />
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

"use client";
import Papa from "papaparse";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function MeetTheTeamImages() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selected, setSelected] = useState(null);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const sheetURL =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTnu-jzKEnWbgElEg5iL7HTpdkyeuJBjCUCzeAYraqy-vKvU1-uFg8CCA_TkAuh9Jdp8F8xyIKtcvMM/pub?gid=0&single=true&output=csv";

    fetch(sheetURL)
      .then((res) => res.text())
      .then((csv) => {
        const parsed = Papa.parse(csv, { header: true });
        setTeam(parsed.data);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  console.log(team);
  const visibleImages = isMobile ? (showAll ? team : team.slice(0, 5)) : team;

  return (
    <section className="w-full py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-dark-green">
          Meet The Team
        </h2>
        <div className="w-16 mx-auto mt-2 ">
          <Image
            className=""
            src="/right-design.png"
            alt="Right decoration"
            width={100}
            height={100}
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 lg:gap-1">
        {visibleImages.map((person, index) => (
          <div
            key={index}
            onClick={() => setSelected(person)}
            className="relative w-full aspect-square overflow-hidden rounded-md cursor-pointer group"
          >
            <Image
              src={`/teams/${person["First Name"].toLowerCase().replace(" ", "").trim()}.png`}
              alt={person["First Name"]}
              fill
              sizes="(max-width: 768px) 100vw, 20vw"
              className={`object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-300 ${person["First Name"] === "Saidah" ? "object-top" : "object-center"}`}
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <p className="text-white font-semibold text-sm">View Profile</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Button */}

      <div className="flex justify-center mt-6 md:hidden">
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="px-6 py-2 bg-dark-green text-white rounded-full text-sm font-medium shadow hover:bg-dark-gretext-dark-green transition"
        >
          {showAll ? "See Less" : "See More"}
        </button>
      </div>

      {/* Modal */}
      {selected && (
        <ProfileModal person={selected} close={() => setSelected(null)} />
      )}
    </section>
  );
}

function ProfileModal({ person, close }) {
  return (
    <div
      onClick={close}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 relative animate-scaleIn"
      >
        {/* Close */}
        <button
          onClick={close}
          className="absolute top-4 right-4 lg:right-6 text-gray-500 hover:text-dark-green text-xl"
        >
          ✕
        </button>

        {/* Image */}
        <div className="flex justify-center mb-4">
          <div className="relative w-32 h-32">
            <Image
              src={`/teams/${person["First Name"].toLowerCase().replace(" ", "").trim()}.png`}
              alt={person["First Name"]}
              fill
              className="rounded-full object-cover border-4 border-dark-gretext-dark-green shadow-md"
            />
          </div>
        </div>

        {/* Name */}
        <h2 className="text-xl font-bold text-center text-gray-800">
          {`${person["First Name"]} ${person["Last Name"]}`}
        </h2>

        {/* Role */}
        <p className="text-center text-dark-green font-medium mt-2">
          {person.Role}
        </p>

        {/* Subtle divider */}
        <div className="w-10 h-1 bg-dark-gretext-dark-green mx-auto mt-3 rounded"></div>

        {/* Extra message */}
        <p className="text-gray-500 text-sm text-center mt-4">
          Passionate about delivering excellence and making impact.
        </p>
      </div>
    </div>
  );
}
