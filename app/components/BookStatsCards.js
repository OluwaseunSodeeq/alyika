"use client";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { PieChart, Pie, Cell } from "recharts";

export default function StatsCards() {
  const [raised, setRaised] = useState(0);
  const [sold, setSold] = useState(0);

  const raisedTarget = 563000;
  const soldPercent = 37;
  console.log(sold);
  useEffect(() => {
    let progress = 0;

    const animate = () => {
      if (progress <= 100) {
        setRaised(Math.floor((raisedTarget * progress) / 100));
        setSold(Math.floor((soldPercent * progress) / 100));

        progress += 2;
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, []);

  const raisedPercentage = (raised / 1500000) * 100;

  const segments = [
    { name: "A", value: 20, color: "#F78A8F" },
    { name: "B", value: 20, color: "#F69E66" },
    { name: "C", value: 20, color: "#FCC573" },
    { name: "F", value: 20, color: "#ffffff" },
    { name: "F", value: 20, color: "#ffffff" },
    { name: "D", value: 20, color: "#C5E866" },
    { name: "E", value: 20, color: "#6BD096" },
  ];

  const getActiveColor = (value) => {
    if (value <= 20) return segments[0].color;
    if (value <= 40) return segments[1].color;
    if (value <= 60) return segments[2].color;
    if (value <= 80) return segments[5].color;
    if (value <= 100) return segments[6].color;
    return segments[3].color;
  };

  const activeColor = getActiveColor(sold);

  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center items-center p-6">
      {/* ================= CARD 1 ================= 
       <div
        className="bg-white/90 backdrop-blur-md rounded-2xl p-6 w-80 flex flex-col items-center gap-4
              shadow-[0_10px_30px_rgba(0,0,0,0.08)]
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
              transition-all duration-300 hover:scale-105"
      >
        <svg width="0" height="0">
          <defs>
            <linearGradient
              id="raisedGradient"
              gradientTransform="rotate(247.17)"
            >
              <stop offset="12.87%" stopColor="#F78A8F" />
              <stop offset="86.82%" stopColor="#FCC931" />
            </linearGradient>
          </defs>
        </svg>

        <div className="w-28 h-28 relative">
          <CircularProgressbar
            value={raisedPercentage}
            styles={buildStyles({
              pathColor: "url(#raisedGradient)", // 🔥 gradient applied here
              trailColor: "#e5e7eb",
              strokeLinecap: "round",
            })}
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <FaUser className="text-gray-600 mb-1" />
            <span className="font-bold text-lg">
              ₦{(raised / 1000).toFixed(0)}k
            </span>
            <span className="text-xs text-gray-500">Raised</span>
          </div>
        </div>

        <div className="w-full bg-green-100 rounded-full h-3">
          <div
            className="bg-green-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${raisedPercentage}%` }}
          />
        </div>

        <p className="text-xs text-gray-500 text-center">
          Raised: ₦{raised.toLocaleString()} <br />
          Goal: ₦1,500,000
        </p>
      </div> 
      */}
      <div
        className="bg-white backdrop-blur-md rounded-2xl py-6 px-12 flex flex-col items-center gap-4
                      shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                      hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                      transition-all duration-300 hover:scale-105"
      >
        <div className="w-28 h-28 xl:w-[200px] xl:h-[200px] relative">
          <CircularProgressbar
            value={raisedPercentage}
            styles={buildStyles({
              pathColor: "#FCC931",
              trailColor: "#E9ECF1",
              strokeLinecap: "round",
            })}
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <FaUser className="text-gray-600 mb-1" />
            <span className="font-bold text-lg">
              ₦{(raised / 1000).toFixed(0)}k
            </span>
            <span className="text-xs text-gray-500">Raised</span>
          </div>
        </div>

        <div className="w-full bg-green-100 rounded-full h-3">
          <div
            className="bg-green-500 h-3 rounded-full"
            style={{ width: `${raisedPercentage}%` }}
          />
        </div>

        <p className="text-xs text-gray-500 text-center">
          Raised: ₦{raised.toLocaleString()} <br />
          Goal: ₦1,500,000
        </p>
      </div>

      {/* ================= CARD 2 ================= */}

      <div
        className="bg-white backdrop-blur-md rounded-2xl py-6 px-12 flex flex-col items-center gap-4
              shadow-[0_10px_30px_rgba(0,0,0,0.08)]
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
              transition-all duration-300 hover:scale-105"
      >
        <div className="relative w-28 h-28 xl:w-[200px] xl:h-[200px] border-2">
          <PieChart width={200} height={200}>
            <Pie
              data={segments}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={75}
              startAngle={110} // 🔥 rotate here
              endAngle={-250}
              paddingAngle={4} // even spacing
              dataKey="value"
              cornerRadius={12} // 🔥 smooth rounded arcs (~1rem feel)
            >
              {segments.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>

          {/* 🎯 CENTER TEXT WITH DYNAMIC BG */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div
              className=" flex flex-col justify-center items-center xl:w-[90px] xl:h-[90px] p-4 rounded-full  text-dark-green font-semibold transition-all duration-300 "
              style={{ backgroundColor: activeColor }}
            >
              <span className="font-bold text-[20px] xl:text-[30px]">
                {sold}%
              </span>
              <span className="text-xs t">Sold</span>
              {/* <div>
                <span className="text-[20px] xl:text-[30px]">{sold}%</span>
              </div>
              <span className=" mt-1 text-center">Sold</span> */}
            </div>
          </div>
        </div>

        {/* PROGRESS BAR */}
        <div className="w-full bg-green-100 rounded-full h-3">
          <div
            className="bg-green-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${sold}%` }}
          />
        </div>

        <p className="text-xs text-gray-500 text-center">
          Sold: {Math.floor((225 * sold) / 37)} copies <br />
          Goal: 600 copies
        </p>
      </div>
    </div>
  );
}

/*
 {/* <div
        className="bg-white/90 backdrop-blur-md rounded-2xl py-6 px-12 flex flex-col items-center gap-4
                      shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                      hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                      transition-all duration-300 hover:scale-105"
      >
        <div className="relative w-36 h-36 xl:w-[200px] xl:h-[200px]">
          <PieChart width={140} height={140}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={45}
              outerRadius={60}
              startAngle={90}
              endAngle={-270}
              paddingAngle={5} // 👈 creates gaps
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-bold">{sold}%</span>
            <span className="text-xs text-gray-500">Sold</span>
          </div>
        </div>

        <div className="w-full bg-green-100 rounded-full h-3">
          <div
            className="bg-green-500 h-3 rounded-full"
            style={{ width: `${sold}%` }}
          />
        </div>

        <p className="text-xs text-gray-500 text-center">
          Sold: {Math.floor((225 * sold) / 37)} copies <br />
          Goal: 600 copies
        </p>
      </div> 
    //   =========2
    //    <div
    //     className="bg-white/90 backdrop-blur-md rounded-2xl py-6 px-12 flex flex-col items-center gap-4
    //           shadow-[0_10px_30px_rgba(0,0,0,0.08)]
    //           hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
    //           transition-all duration-300 hover:scale-105"
    //   >
    //     <div className="relative w-36 h-36 xl:w-[200px] xl:h-[200px]">
    //       <PieChart width={200} height={200}>
    //         <Pie
    //           data={segments}
    //           cx="50%"
    //           cy="50%"
    //           innerRadius={60}
    //           outerRadius={75}
    //           startAngle={90}
    //           endAngle={-270}
    //           paddingAngle={6}
    //           dataKey="value"
    //           cornerRadius={10} // 🔥 rounded edges
    //         >
    //           {segments.map((entry, index) => (
    //             <Cell key={index} fill={entry.color} opacity={0.3} />
    //           ))}
    //         </Pie>

    //         <Pie
    //           data={soldData}
    //           cx="50%"
    //           cy="50%"
    //           innerRadius={60}
    //           outerRadius={75}
    //           startAngle={90}
    //           endAngle={-270}
    //           dataKey="value"
    //           cornerRadius={10}
    //         >
    //           <Cell fill="#F69E66" /> 
    //           <Cell fill="transparent" /> 
    //         </Pie>
    //       </PieChart>

    //       <div className="absolute inset-0 flex flex-col items-center justify-center">
    //         <span className="text-xl font-bold">{sold}%</span>
    //         <span className="text-xs text-gray-500">Sold</span>
    //       </div>
    //     </div>

    //     <div className="w-full bg-green-100 rounded-full h-3">
    //       <div
    //         className="bg-green-500 h-3 rounded-full transition-all duration-500"
    //         style={{ width: `${sold}%` }}
    //       />
    //     </div>

    //     <p className="text-xs text-gray-500 text-center">
    //       Sold: {Math.floor((225 * sold) / 37)} copies <br />
    //       Goal: 600 copies
    //     </p>
    //   </div> 
*/

// import { useEffect, useRef, useState } from "react";
// import { FaUser } from "react-icons/fa";

// export default function BookStatsCards() {
//   const [raisedPercent, setRaisedPercent] = useState(0);
//   const [soldPercent, setSoldPercent] = useState(0);

//   const [raisedAmount, setRaisedAmount] = useState(0);
//   const [soldAmount, setSoldAmount] = useState(0);

//   const targetRaised = 563000;
//   const targetSold = 225;

//   // 🎯 Animate everything together
//   useEffect(() => {
//     let progress = 0;

//     const animate = () => {
//       if (progress <= 100) {
//         // Progress bars
//         setRaisedPercent(
//           Math.min(Math.round((targetRaised / 1500000) * progress), 100),
//         );
//         setSoldPercent(Math.min(Math.round((37 / 100) * progress), 37));

//         // Counters
//         setRaisedAmount(Math.floor((targetRaised * progress) / 100));
//         setSoldAmount(Math.floor((targetSold * progress) / 100));

//         progress += 2; // speed
//         requestAnimationFrame(animate);
//       }
//     };

//     animate();
//   }, []);

//   return (
//     <div className="flex flex-col md:flex-row gap-6 justify-center items-center p-6">
//       {/* 🔥 CARD 1 */}
//       <div
//         className="bg-white shadow-xl rounded-xl p-6 w-72 md:w-80 flex flex-col items-center space-y-4 border
//                       transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1"
//       >
//         <div className="relative w-28 h-28">
//           <svg className="w-full h-full">
//             <circle
//               cx="50%"
//               cy="50%"
//               r="45%"
//               stroke="#e5e7eb"
//               strokeWidth="10"
//               fill="none"
//             />
//             <circle
//               cx="50%"
//               cy="50%"
//               r="45%"
//               stroke="url(#gradient1)"
//               strokeWidth="10"
//               strokeDasharray="283"
//               strokeDashoffset={283 - (283 * raisedPercent) / 100}
//               strokeLinecap="round"
//               fill="none"
//               transform="rotate(-90 50 50)"
//             />
//             <defs>
//               <linearGradient id="gradient1">
//                 <stop offset="0%" stopColor="#f97316" />
//                 <stop offset="100%" stopColor="#facc15" />
//               </linearGradient>
//             </defs>
//           </svg>

//           <div className="absolute inset-0 flex flex-col justify-center items-center">
//             <FaUser className="text-xl text-gray-600 mb-1" />
//             <span className="text-xl font-bold">
//               ₦{(raisedAmount / 1000).toFixed(0)}k
//             </span>
//             <span className="text-xs text-gray-500">Raised</span>
//           </div>
//         </div>

//         <div className="w-full bg-green-100 rounded-full h-3 overflow-hidden">
//           <div
//             className="bg-green-500 h-3 rounded-full transition-all duration-500"
//             style={{ width: `${raisedPercent}%` }}
//           />
//         </div>

//         <p className="text-xs text-gray-500 text-center">
//           Raised: ₦{raisedAmount.toLocaleString()} <br />
//           Goal: ₦1,500,000
//         </p>
//       </div>

//       {/* 🔥 CARD 2 */}
//       <div
//         className="bg-white shadow-xl rounded-xl p-6 w-72 md:w-80 flex flex-col items-center space-y-4 border
//                       transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1"
//       >
//         <div className="relative w-28 h-28">
//           <svg className="w-full h-full">
//             <circle
//               cx="50%"
//               cy="50%"
//               r="45%"
//               stroke="#e5e7eb"
//               strokeWidth="10"
//               fill="none"
//             />
//             <circle
//               cx="50%"
//               cy="50%"
//               r="45%"
//               stroke="url(#gradient2)"
//               strokeWidth="10"
//               strokeDasharray="283"
//               strokeDashoffset={283 - (283 * soldPercent) / 100}
//               strokeLinecap="round"
//               fill="none"
//               transform="rotate(-90 50 50)"
//             />
//             <defs>
//               <linearGradient id="gradient2">
//                 <stop offset="0%" stopColor="#fb7185" />
//                 <stop offset="50%" stopColor="#facc15" />
//                 <stop offset="100%" stopColor="#4ade80" />
//               </linearGradient>
//             </defs>
//           </svg>

//           <div className="absolute inset-0 flex flex-col justify-center items-center">
//             <span className="text-xl font-bold">{soldPercent}%</span>
//             <span className="text-xs text-gray-500">Sold</span>
//           </div>
//         </div>

//         <div className="w-full bg-green-100 rounded-full h-3 overflow-hidden">
//           <div
//             className="bg-green-500 h-3 rounded-full transition-all duration-500"
//             style={{ width: `${soldPercent}%` }}
//           />
//         </div>

//         <p className="text-xs text-gray-500 text-center">
//           Sold: {soldAmount} copies <br />
//           Goal: 600 copies
//         </p>
//       </div>
//     </div>
//   );
// }

// // ── Helpers ──────────────────────────────────────────────
// function polarToCartesian(cx, cy, r, angleDeg) {
//   const rad = ((angleDeg - 90) * Math.PI) / 180;
//   return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
// }

// function arcPath(cx, cy, r, startAngle, endAngle) {
//   const s = polarToCartesian(cx, cy, r, startAngle);
//   const e = polarToCartesian(cx, cy, r, endAngle);
//   const large = endAngle - startAngle > 180 ? 1 : 0;
//   return `M ${s.x} ${s.y} A ${r} ${r} 0 ${large} 1 ${e.x} ${e.y}`;
// }

// function easeOutExpo(t) {
//   return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
// }

// // ── Animated counter hook ─────────────────────────────────
// function useCountUp(target, duration, active) {
//   const [value, setValue] = useState(0);
//   const rafRef = useRef(null);

//   useEffect(() => {
//     if (!active) return;
//     const start = performance.now();

//     function step(now) {
//       const t = Math.min((now - start) / duration, 1);
//       setValue(Math.round(easeOutExpo(t) * target));
//       if (t < 1) rafRef.current = requestAnimationFrame(step);
//     }

//     rafRef.current = requestAnimationFrame(step);
//     return () => cancelAnimationFrame(rafRef.current);
//   }, [active, target, duration]);

//   return value;
// }

// // ── Intersection observer hook ────────────────────────────
// function useInView(threshold = 0.35) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setInView(true);
//           observer.unobserve(el);
//         }
//       },
//       { threshold },
//     );
//     observer.observe(el);
//     return () => observer.disconnect();
//   }, [threshold]);

//   return [ref, inView];
// }

// // ── CARD 1: Full circular ring ────────────────────────────
// function CircularStatCard({ target = 200, max = 260, duration = 1600 }) {
//   const [ref, inView] = useInView();
//   const count = useCountUp(target, duration, inView);

//   const RING_R = 50;
//   const RING_C = 2 * Math.PI * RING_R;
//   const ratio = target / max;
//   const offset = inView ? RING_C * (1 - ratio) : RING_C;

//   return (
//     <div
//       ref={ref}
//       className={`
//         bg-white rounded-[20px] px-5 py-6 flex flex-col items-center gap-3
//         w-[164px] md:w-[172px] xl:w-[184px]
//         shadow-[0_2px_4px_rgba(0,0,0,0.04),0_8px_28px_rgba(0,0,0,0.09)]
//         hover:shadow-[0_4px_8px_rgba(0,0,0,0.05),0_18px_44px_rgba(0,0,0,0.13)]
//         hover:-translate-y-1
//         transition-all duration-300
//         ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
//       `}
//       style={{
//         transition:
//           "opacity 0.55s ease, transform 0.55s ease, box-shadow 0.3s ease",
//       }}
//     >
//       {/* Ring */}
//       <div
//         className="relative"
//         style={{
//           width: 120,
//           height: 120,
//           filter: "drop-shadow(0 4px 14px rgba(253,205,49,0.32))",
//         }}
//       >
//         <svg
//           viewBox="0 0 120 120"
//           width="120"
//           height="120"
//           style={{ overflow: "visible" }}
//         >
//           {/* Outer subtle ring */}
//           <circle
//             cx="60"
//             cy="60"
//             r="56"
//             fill="none"
//             stroke="#F7F5EC"
//             strokeWidth="1"
//           />
//           {/* Track */}
//           <circle
//             cx="60"
//             cy="60"
//             r={RING_R}
//             fill="none"
//             stroke="#F0EFE9"
//             strokeWidth="9"
//           />
//           {/* Animated progress arc */}
//           <circle
//             cx="60"
//             cy="60"
//             r={RING_R}
//             fill="none"
//             stroke="#FDCD31"
//             strokeWidth="9"
//             strokeLinecap="round"
//             strokeDasharray={RING_C}
//             strokeDashoffset={offset}
//             style={{
//               transform: "rotate(-90deg)",
//               transformOrigin: "60px 60px",
//               transition: `stroke-dashoffset ${duration}ms cubic-bezier(0.25,1,0.5,1)`,
//             }}
//           />
//         </svg>

//         {/* Avatar centered inside ring */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div
//             className="rounded-full flex items-center justify-center"
//             style={{
//               width: 52,
//               height: 52,
//               background: "#F7F6F0",
//               border: "2.5px solid #EEEEE8",
//             }}
//           >
//             <svg width="28" height="28" viewBox="0 0 30 30" fill="none">
//               <circle cx="15" cy="10" r="5.5" fill="#CECCC2" />
//               <path
//                 d="M4 27c0-6.075 4.925-11 11-11s11 4.925 11 11"
//                 fill="#CECCC2"
//               />
//             </svg>
//           </div>
//         </div>
//       </div>

//       {/* Number */}
//       <div className="flex flex-col items-center gap-[5px]">
//         <span className="text-[26px] md:text-[28px] font-extrabold text-gray-900 leading-none tracking-tight font-sans">
//           {count}+
//         </span>
//         {/* Yellow accent bar */}
//         <div className="w-7 h-[3px] rounded-full bg-[#FDCD31]" />
//         <p className="text-[10px] md:text-[11px] text-gray-400 font-medium text-center leading-snug mt-[2px] max-w-[110px]">
//           Young people empowered
//         </p>
//       </div>
//     </div>
//   );
// }

// // ── CARD 2: Open gauge / broken circle ────────────────────
// const GAUGE_START = 145; // degrees — open gap symmetric at bottom
// const GAUGE_SWEEP = 250; // degrees of visible arc
// const GAUGE_END = GAUGE_START + GAUGE_SWEEP;
// const GCX = 64,
//   GCY = 64,
//   GR = 46;

// function needleDeg(ratio) {
//   return GAUGE_START - 90 + GAUGE_SWEEP * ratio;
// }

// function GaugeStatCard({ target = 475, max = 500, duration = 1600 }) {
//   const [ref, inView] = useInView();
//   const count = useCountUp(target, duration, inView);

//   const ratio = target / max;
//   const fullLen = (GAUGE_SWEEP / 360) * 2 * Math.PI * GR;
//   const offset = inView ? fullLen * (1 - ratio) : fullLen;
//   const nDeg = inView ? needleDeg(ratio) : needleDeg(0);

//   const trackD = arcPath(GCX, GCY, GR, GAUGE_START, GAUGE_END);
//   const progressD = arcPath(GCX, GCY, GR, GAUGE_START, GAUGE_END);

//   return (
//     <div
//       ref={ref}
//       className={`
//         bg-white rounded-[20px] px-5 pt-5 pb-5 flex flex-col items-center gap-2
//         w-[164px] md:w-[172px] xl:w-[184px]
//         shadow-[0_2px_4px_rgba(0,0,0,0.04),0_8px_28px_rgba(0,0,0,0.09)]
//         hover:shadow-[0_4px_8px_rgba(0,0,0,0.05),0_18px_44px_rgba(0,0,0,0.13)]
//         hover:-translate-y-1
//         transition-all duration-300
//         ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
//       `}
//       style={{
//         transition:
//           "opacity 0.55s ease 0.15s, transform 0.55s ease 0.15s, box-shadow 0.3s ease",
//       }}
//     >
//       {/* Gauge SVG */}
//       <div
//         style={{
//           position: "relative",
//           width: 128,
//           height: 82,
//           filter: "drop-shadow(0 4px 14px rgba(1,47,37,0.15))",
//         }}
//       >
//         <svg
//           viewBox="0 0 128 82"
//           width="128"
//           height="82"
//           style={{ overflow: "visible" }}
//         >
//           {/* Track arc */}
//           <path
//             d={trackD}
//             fill="none"
//             stroke="#E8E8E3"
//             strokeWidth="9"
//             strokeLinecap="round"
//           />

//           {/* Animated progress arc */}
//           <path
//             d={progressD}
//             fill="none"
//             stroke="#012F25"
//             strokeWidth="9"
//             strokeLinecap="round"
//             strokeDasharray={fullLen}
//             strokeDashoffset={offset}
//             style={{
//               transition: `stroke-dashoffset ${duration}ms cubic-bezier(0.25,1,0.5,1) 0.15s`,
//             }}
//           />

//           {/* Needle */}
//           <g
//             style={{
//               transformOrigin: `${GCX}px ${GCY}px`,
//               transform: `rotate(${nDeg}deg)`,
//               transition: `transform ${duration}ms cubic-bezier(0.25,1,0.5,1) 0.15s`,
//             }}
//           >
//             {/* Needle line */}
//             <line
//               x1={GCX}
//               y1={GCY}
//               x2={GCX}
//               y2={GCY - 34}
//               stroke="#012F25"
//               strokeWidth="2.5"
//               strokeLinecap="round"
//             />
//           </g>

//           {/* Pivot dot — layered for depth */}
//           <circle
//             cx={GCX}
//             cy={GCY}
//             r="6"
//             fill="#012F25"
//             style={{ filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.28))" }}
//           />
//           <circle cx={GCX} cy={GCY} r="3" fill="white" />
//         </svg>
//       </div>

//       {/* Min / max scale labels */}
//       <div className="flex justify-between w-[118px] -mt-1">
//         <span className="text-[8.5px] font-semibold text-gray-300 tracking-wide">
//           0
//         </span>
//         <span className="text-[8.5px] font-semibold text-gray-300 tracking-wide">
//           500+
//         </span>
//       </div>

//       {/* Number */}
//       <div className="flex flex-col items-center gap-[4px] mt-1">
//         <span className="text-[26px] md:text-[28px] font-extrabold text-gray-900 leading-none tracking-tight font-sans">
//           {count}+
//         </span>
//         <p className="text-[10px] md:text-[11px] text-gray-400 font-medium text-center leading-snug max-w-[110px]">
//           Families supported
//         </p>
//       </div>

//       {/* Legend */}
//       <div className="flex gap-[10px] mt-1">
//         <div className="flex items-center gap-[5px]">
//           <div className="w-[7px] h-[7px] rounded-full bg-[#012F25]" />
//           <span className="text-[8.5px] text-gray-400 font-medium">
//             Reached
//           </span>
//         </div>
//         <div className="flex items-center gap-[5px]">
//           <div className="w-[7px] h-[7px] rounded-full bg-[#E8E8E3]" />
//           <span className="text-[8.5px] text-gray-400 font-medium">Target</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ── Main export ───────────────────────────────────────────
// export function StatCards() {
//   return (
//     <div className="flex flex-wrap gap-4 md:gap-5 items-start justify-center md:justify-start">
//       <CircularStatCard target={200} max={260} duration={1600} />
//       <GaugeStatCard target={475} max={500} duration={1600} />
//     </div>
//   );
// }
