export default function Button({ children, btnBg, textColor, ...props }) {
  return (
    <button
      {...props}
      style={{ backgroundColor: btnBg, color: textColor }}
      className="cursor-pointer text-medium px-6 py-2 rounded-full shadow-sm transition"
    >
      {children}
    </button>
  );
}
