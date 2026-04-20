import React from "react";
import Image from "next/image";

export function Logo() {
  return (
    <div className="ml-0 xl:ml-10 2xl:ml-0">
      <Image
        src="/clemesetlogo-desktop.svg"
        alt="logo"
        width={150}
        height={50}
        priority
        sizes="(max-width: 768px) 120px, 150px"
        className="w-[120px] md:w-[150px] h-auto object-contain"
      />
    </div>
  );
}

export function MobileLogo() {
  return (
    <div className="ml-0">
      <Image
        src="/clemesetlogo-mobile.svg"
        alt="logo"
        width={150}
        height={50}
        priority
        sizes="(max-width: 768px) 120px, 150px"
        className="w-[120px] md:w-[150px] h-auto object-contain"
      />
    </div>
  );
}
