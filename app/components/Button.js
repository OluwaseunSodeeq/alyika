export default function Button({ children, btnBg, textColor, ...props }) {
  return (
    <button
      {...props}
      style={{ backgroundColor: btnBg, color: textColor }}
      className="cursor-pointer text-medium px-6 py-2 rounded-full shadow-sm transition-all duration-200  hover:scale-105 active:scale-95 "
    >
      {children}
    </button>
  );
}
export function BoldButton({ children, btnBg, textColor, ...props }) {
  return (
    <button
      {...props}
      style={{ backgroundColor: btnBg, color: textColor }}
      className="cursor-pointer text-medium font-bold px-6 py-2 rounded-full shadow-sm transition-all duration-200 hover:scale-105 active:scale-95 "
    >
      {children}
    </button>
  );
}
