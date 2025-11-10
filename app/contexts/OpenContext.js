"use client";
import { createContext, useEffect, useState } from "react";

const OpenContextData = createContext();

function OpenContextProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  // Check if the device width is grater than 768px
  useEffect(() => {
    if (window.innerWidth > 768) {
      setMobile(true);
    }
  }, [mobile]);

  const hamburgerHandler = () => setOpen(!open);

  return (
    <OpenContextData.Provider
      value={{ open, mobile, setOpen, hamburgerHandler }}
    >
      {children}
    </OpenContextData.Provider>
  );
}
//
export { OpenContextProvider, OpenContextData };
