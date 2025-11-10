"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <div className="ml-0 xl:ml-10 2xl:ml-0">
      <Link href="/home">
        <Image src="/logo.png" alt="logo" width={150} height={50} />
      </Link>
    </div>
  );
}

export function MobileLogo() {
  return (
    <div className="ml-0">
      <Link href="/home">
        <Image src="/mobilelogo.png" alt="logo" width={150} height={50} />
      </Link>
    </div>
  );
}
