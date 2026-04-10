"use client";
import { useContext } from "react";
import { SubscribeContextData } from "./SubscribeContext";

function useSubscribeContext() {
  const context = useContext(SubscribeContextData);
  if (context === undefined)
    throw new Error(
      "Subscribe context was used outside Subscribe context provider",
    );

  return context;
}

export default useSubscribeContext;
