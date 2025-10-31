"use client";
import { createContext } from "react";
// Create a Context for Theme (Light/Dark mode)
const ThemeContext = createContext();

// Create a provider component
function ThemeContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Example of a component consuming the ThemeContext
function ToggleButton() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export { ThemeContext, ThemeContextProvider, ToggleButton };
