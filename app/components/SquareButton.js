import React from "react";

export function SquareButton({ children, btnBg, textColor }) {
  return (
    <div>
      <button
        style={{ backgroundColor: btnBg, color: textColor }}
        className={` cursor-pointer text-medium px-2 py-4 rounded-[10px] shadow-sm font-bold transition-all duration-200 hover:scale-105 active:scale-95`}
      >
        {children}
      </button>
    </div>
  );
}

export function SquareButtonBigSize({ children, btnBg, textColor }) {
  return (
    <div>
      <button
        style={{ backgroundColor: btnBg, color: textColor }}
        className={` cursor-pointer text-[16px] lg:text-[28px] 2xl:text-[35px] font-bold px-6 py-2 rounded-[10px] shadow-sm transition-all duration-200 hover:scale-105 active:scale-95`}
      >
        {children}
      </button>
    </div>
  );
}
