import { FaUser } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { PieChart, Pie, Cell } from "recharts";
import GrowthCard from "./GrowthCard";

export default function StatsCards({
  soldCopies,
  soldCopiesInPercent,
  moneyRaisedInPercent,
  goalCopies,
  moneyRaised,
  raisedTarget,
  graphValue,
}) {
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
  const activeColor = getActiveColor(soldCopiesInPercent);

  return (
    <div className="flex flex-col gap-4 px-3 xl:px-0 will-change-transform">
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {/* ================= CARD 1 =================   */}
        <div
          className="bg-white backdrop-blur-md rounded-2xl py-6 px-6 flex flex-col items-center gap-4 w-full h-[300px] md:h-auto xl:w-[380px] 2xl:w-[400px] shadow-lg 
                      hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                      transition-all duration-300 hover:scale-105"
        >
          <div className="w-auto h-auto relative">
            <div className="flex gap-4 items-center">
              <div className="w-28 h-28 xl:w-[200px] xl:h-[200px] relative">
                <CircularProgressbar
                  value={moneyRaisedInPercent}
                  styles={buildStyles({
                    pathColor: "#FCC931",
                    trailColor: "#E9ECF1",
                    strokeLinecap: "round",
                  })}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="bg-[#E9ECF3] rounded-full xl:w-[90px] xl:h-[90px] flex justify-center items-center">
                    <FaUser className="text-dark-green mb-1 text-2xl xl:text-4xl" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-black xl:text-[46px] 2xl:text-[46px]">
                  ₦{(moneyRaised / 1000).toFixed(0)}k
                </span>
                <span className="text-xs text-black xl:text-[32px] 2xl:text-[36px]">
                  Raised
                </span>
              </div>
            </div>
          </div>

          <div className="w-full mx-auto bg-[#F3F7E8] rounded-[8px] h-auto py-4 text-dark-green px-2">
            <div className="flex justify-between items-center mb-2">
              <p className="font-normal text-sm text-left ">
                Raised: <span className="font-bold">₦</span>{" "}
                <span className="font-bold">
                  {" "}
                  {moneyRaised.toLocaleString()}{" "}
                </span>
              </p>
              <p className="font-normal text-sm text-left ">Current Total</p>
            </div>
            <div className=" bg-main-bg rounded-full h-3 overflow-hidden">
              <div
                className="bg-[#00D648] h-3 rounded-full"
                style={{ width: `${moneyRaisedInPercent}%` }}
              />
            </div>

            <p className="font-normal text-sm text-left mt-2">
              Goal: <span className="font-bold">₦</span>{" "}
              <span> {raisedTarget.toLocaleString()} </span>
            </p>
          </div>
        </div>

        {/* ================= CARD 2 ================= */}

        <div
          className="bg-white backdrop-blur-md rounded-2xl py-6 px-6 flex flex-col items-center gap-4 w-full h-[350px]  lg:h-[350px] md:h-auto xl:w-[380px]  2xl:w-[400px] 
              shadow-lg
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
              transition-all duration-300 hover:scale-105"
        >
          <div className="relative w-auto h-auto ">
            <PieChart width={210} height={210}>
              <Pie
                data={segments}
                cx="50%"
                cy="50%"
                innerRadius={90}
                outerRadius={100}
                startAngle={110}
                endAngle={-250}
                paddingAngle={4}
                dataKey="value"
                cornerRadius={12}
              >
                {segments.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div
                className=" flex flex-col justify-center items-center w-[120px] h-[120px]  xl:w-[90px] xl:h-[90px] p-4 rounded-full  text-dark-green font-semibold transition-all duration-300 "
                style={{ backgroundColor: activeColor }}
              >
                <span className="font-bold text-[28px] xl:text-[30px]">
                  {soldCopiesInPercent}%
                </span>
                <span className="text-base t">Sold</span>
              </div>
            </div>
          </div>

          <div className="relative w-full mx-auto bg-[#E4F9ED] rounded-[8px] h-auto py-4 text-dark-green px-2 mt-[-25px] 2xl:mt-[-30px] z-10 shadow-lg">
            <div className="flex justify-between items-center mb-2">
              <p className="font-normal text-sm text-left ">
                Sold:{" "}
                <span className="font-bold">
                  {" "}
                  {soldCopies.toLocaleString()}{" "}
                </span>
              </p>
              <p className="font-normal text-sm text-left ">Copies Sold</p>
            </div>
            <div className=" bg-main-bg rounded-full h-3 overflow-hidden">
              <div
                className="bg-[#00D648] h-3 rounded-full"
                style={{ width: `${soldCopiesInPercent}%` }}
              />
            </div>

            <p className="font-normal text-sm text-left mt-2">
              Goal: <span> {goalCopies} </span>
            </p>
          </div>
        </div>
        {/* ================= CARD 3 ================= */}
        <div className=" block md:hidden lg:block">
          <GrowthCard value={graphValue} />
        </div>
      </div>
    </div>
  );
}
