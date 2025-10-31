import { useContext } from "react";
import { ThemeContext } from "./ModeContext";

export default function useModeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error("open context was used outside Open context provider");

  return context;
}
