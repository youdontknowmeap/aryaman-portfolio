"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSoundContext } from "@/context/SoundContext";

const Nav = () => {
  const { isPlaying, toggleSound } = useSoundContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollY / height) * 100;

      setIsScrolled(scrollY > 60);
      setScrollProgress(progress);
      setShowProgress(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        role="navigation"
        className={`fixed top-0 left-0 w-full h-[60px] z-[1000] flex items-center justify-between px-5 md:px-10 transition-all duration-300 ${
          isScrolled
            ? "bg-[#080808]/85 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        {/* LEFT SIDE */}
        <Link
          href="/"
          className="font-['Space_Mono'] text-[11px] text-[#707070] hover:text-[#F0EDE6] tracking-[0.15em] uppercase transition-colors duration-200"
        >
          Aryaman Page
        </Link>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6 md:gap-8">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            data-cursor="link"
            aria-label="Toggle ambient sound"
            className={`relative hidden md:flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
              isPlaying ? "opacity-100" : "opacity-60 hover:opacity-100"
            }`}
          >
            {isPlaying && (
              <div className="absolute inset-0 border border-[var(--fire)] rounded-full animate-[sound-pulse_2s_infinite]" />
            )}
            {isPlaying ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F0EDE6" strokeWidth="1.5">
                <path d="M11 5L6 9H2V15H6L11 19V5Z" />
                <path d="M19.07 4.93C20.9447 6.80528 21.9979 9.34836 21.9979 12C21.9979 14.6516 20.9447 17.1947 19.07 19.07M15.54 8.46C16.4771 9.39764 17.0039 10.669 17.0039 11.995C17.0039 13.321 16.4771 14.5924 15.54 15.53" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#707070" strokeWidth="1.5">
                <path d="M11 5L6 9H2V15H6L11 19V5Z" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            )}
          </button>

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            data-cursor="link"
            aria-label="Open navigation menu"
            className="flex items-center gap-3"
          >
            <span className="font-['Space_Mono'] text-[11px] text-[#F0EDE6] uppercase tracking-widest">
              Menu
            </span>
            <div className="flex flex-col gap-[3px]">
              <div className="w-[14px] h-[1px] bg-[#F0EDE6]" />
              <div className="w-[14px] h-[1px] bg-[#F0EDE6]" />
            </div>
          </button>
        </div>
      </nav>

      {/* FULLSCREEN MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-[2000] bg-[#080808]/96 transition-all duration-500 ease-out ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none translate-y-5"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          data-cursor="link"
          className="absolute top-10 right-10 text-[24px] text-[#F0EDE6] hover:rotate-90 transition-transform duration-300"
        >
          ×
        </button>

        <div className="h-full flex flex-col items-center justify-center gap-8">
          {["WORK", "ABOUT", "PROCESS", "CONTACT"].map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              data-cursor="link"
              className="group relative overflow-hidden"
            >
              <span className="font-['Bebas_Neue'] text-[clamp(28px,8vw,40px)] md:text-[clamp(32px,8vw,64px)] text-[#707070] group-hover:text-[#F0EDE6] transition-colors duration-300 tracking-tight">
                {link}
              </span>
              <div className="absolute bottom-1 left-0 w-0 h-[2px] bg-[#FE651A] group-hover:w-full transition-all duration-500 ease-out" />
            </button>
          ))}
        </div>
      </div>

      {/* SCROLL PROGRESS INDICATOR */}
      <div
        className={`fixed right-0 top-0 w-[2px] h-screen z-[1001] pointer-events-none transition-opacity duration-500 ${
          showProgress ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="w-full bg-[#FE651A] shadow-[0_0_10px_rgba(254,101,26,0.5)]"
          style={{ height: `${scrollProgress}vh` }}
        />
      </div>
    </>
  );
};

export default Nav;

