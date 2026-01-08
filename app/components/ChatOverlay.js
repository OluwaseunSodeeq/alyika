"use client";
import ChatUI from "./ChatUI";
import { Logo, MobileLogo } from "./Logo";

export default function ChatOverlay({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm">
      <div
        className="
          absolute inset-0
          md:inset-auto md:right-6 md:bottom-6
          md:w-[420px] md:h-[600px]
          bg-white
          rounded-none md:rounded-2xl
          shadow-2xl
          flex flex-col
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#012f25] text-white rounded-t-2xl">
          <h3 className="font-semibold text-lg">
            <MobileLogo />
          </h3>
          <button onClick={onClose} className="text-xl">
            ✕
          </button>
        </div>

        <ChatUI />
      </div>
    </div>
  );
}
