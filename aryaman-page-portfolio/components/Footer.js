"use client";

import { useRef } from "react";
import useMagnetic from "@/hooks/useMagnetic";

const Footer = () => {
  const topButtonRef = useRef(null);
  useMagnetic(topButtonRef);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#080808] border-t border-[#242424] px-5 md:px-10 py-[20px] md:py-[28px] flex justify-between items-center z-10">
      {/* Left Side */}
      <div className="font-['Space_Mono'] text-[10px] text-[#707070] tracking-[0.1em] uppercase">
        © 2025 Aryaman Page
      </div>

      {/* Center */}
      <div className="hidden md:block font-['Space_Mono'] text-[10px] text-[#707070] tracking-[0.08em] uppercase">
        Designed in India, Made for Everywhere
      </div>

      {/* Right Side */}
      <button
        ref={topButtonRef}
        onClick={scrollToTop}
        data-cursor="link"
        className="group flex items-center gap-1 font-['Space_Mono'] text-[10px] text-[#707070] hover:text-[#F0EDE6] transition-colors duration-200 uppercase"
      >
        <span className="group-hover:-translate-y-[3px] transition-transform duration-300">
          ↑
        </span>
        Top
      </button>
    </footer>
  );
};

export default Footer;

