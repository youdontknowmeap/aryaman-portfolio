"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Manifesto = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    gsap.registerPlugin(ScrollTrigger);

    const lines = containerRef.current.querySelectorAll(".reveal-line span");

    lines.forEach((line) => {
      gsap.fromTo(
        line,
        {
          y: "100%",
        },
        {
          y: "0%",
          duration: 0.8,
          ease: "expo.out",
          scrollTrigger: {
            trigger: line,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      className="relative min-h-screen w-full bg-[#080808] flex items-center px-5 md:px-10 py-[60px] md:py-20 overflow-hidden"
    >
      {/* BACKGROUND GHOST LETTER */}
      <div 
        className="absolute right-[-80px] top-1/2 -translate-y-1/2 pointer-events-none z-0 select-none opacity-[0.03] md:opacity-100"
        style={{
          fontFamily: "Bebas Neue",
          fontSize: "clamp(300px, 40vw, 600px)",
          color: "var(--surface-01)",
          lineHeight: 1,
        }}
      >
        A
      </div>


      {/* CONTENT */}
      <div 
        ref={containerRef}
        className="relative z-10 max-w-[900px] w-full flex flex-col gap-10"
      >
        {/* STANZA 1 */}
        <div className="flex flex-col">
          <div className="reveal-line overflow-hidden">
            <span className="block font-['Bebas_Neue'] text-[clamp(40px,7vw,96px)] text-[#F0EDE6] leading-[0.95] tracking-[-0.02em] uppercase">
              Design Is Not
            </span>
          </div>
          <div className="reveal-line overflow-hidden">
            <span className="block font-['Bebas_Neue'] text-[clamp(40px,7vw,96px)] text-[#F0EDE6] leading-[0.95] tracking-[-0.02em] uppercase">
              The Problem Being Solved.
            </span>
          </div>
        </div>

        {/* STANZA 2 */}
        <div className="flex flex-col">
          <div className="reveal-line overflow-hidden">
            <span className="block font-['Bebas_Neue'] text-[clamp(40px,7vw,96px)] text-[#F0EDE6] leading-[0.95] tracking-[-0.02em] uppercase">
              It&apos;s How The World
            </span>
          </div>
          <div className="reveal-line overflow-hidden">
            <span className="block font-['Bebas_Neue'] text-[clamp(40px,7vw,96px)] text-[#F0EDE6] leading-[0.95] tracking-[-0.02em] uppercase">
              Learns To <span className="text-[#FE651A]">Feel</span>
            </span>
          </div>
          <div className="reveal-line overflow-hidden">
            <span className="block font-['Bebas_Neue'] text-[clamp(40px,7vw,96px)] text-[#F0EDE6] leading-[0.95] tracking-[-0.02em] uppercase">
              About The Problem.
            </span>
          </div>
        </div>

        {/* STANZA 3 */}
        <div className="reveal-line overflow-hidden mt-10">
          <span className="block font-['DM_Sans'] italic text-[clamp(18px,2.5vw,28px)] text-[#707070]">
            I build for both.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;

