"use client";
import { createContext, useEffect, useState } from "react";

const OpenContextData = createContext();

function OpenContextProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [showBgImage, setShowBgImage] = useState(false);

  // Check if the device width is grater than 768px or lower
  useEffect(() => {
    const screenCheck = window.innerWidth;
    // setMobile(screenCheck > 768);
    setMobile(screenCheck > 1025);
    setShowBgImage(screenCheck > 560 && screenCheck >= 768);
  }, [mobile, showBgImage]);

  const hamburgerHandler = () => setOpen(!open);

  return (
    <OpenContextData.Provider
      value={{ open, mobile, setOpen, showBgImage, hamburgerHandler }}
    >
      {children}
    </OpenContextData.Provider>
  );
}
//
export { OpenContextProvider, OpenContextData };
