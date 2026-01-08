"use client";
import { useState, useRef } from "react";
import ChatOverlay from "./ChatOverlay";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const widgetRef = useRef(null);
  const position = useRef({ x: 20, y: 120 });

  const handleDrag = (e) => {
    const touch = e.touches ? e.touches[0] : e;
    position.current = {
      x: touch.clientX - 30,
      y: touch.clientY - 30,
    };

    widgetRef.current.style.left = `${position.current.x}px`;
    widgetRef.current.style.top = `${position.current.y}px`;
  };

  return (
    <>
      {/* Floating Icon */}
      <div
        ref={widgetRef}
        onMouseDown={(e) => {
          document.onmousemove = handleDrag;
          document.onmouseup = () => (document.onmousemove = null);
        }}
        onTouchMove={handleDrag}
        onClick={() => setOpen(true)}
        className="
          fixed
          w-14 h-14
          rounded-full
          bg-[#012f25]
          text-white
          flex items-center justify-center
          shadow-xl
          cursor-pointer
          z-50
          transition-transform
          hover:scale-110
        "
        style={{ left: position.current.x, top: position.current.y }}
      >
        💬
      </div>

      {open && <ChatOverlay onClose={() => setOpen(false)} />}
    </>
  );
}
