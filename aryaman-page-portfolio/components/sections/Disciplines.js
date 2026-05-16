"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const disciplines = [
  {
    id: "01",
    name: "UI/UX Design",
    desc: "Interfaces that think and feel",
  },
  {
    id: "02",
    name: "Graphic Design",
    desc: "Visual identity and systems",
  },
  {
    id: "03",
    name: "Video Editing",
    desc: "Stories cut from reality",
  },
];

const Disciplines = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const cards = containerRef.current.querySelectorAll(".discipline-card");

      cards.forEach((card, index) => {
        const isOdd = index % 2 === 0;
        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: isOdd ? -40 : 40,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "expo.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="disciplines" ref={containerRef} className="w-full bg-[#080808]">
      {/* SECTION HEADER */}
      <div className="pt-[120px] px-5 md:px-10 pb-[60px]">
        <span className="font-['Space_Mono'] text-[11px] text-[#707070] tracking-[0.15em] uppercase block mb-2">
          What I Do
        </span>
        <h2 className="font-['Bebas_Neue'] text-[clamp(48px,8vw,96px)] text-[#F0EDE6] leading-none">
          Disciplines
        </h2>
      </div>

      {/* CARDS */}
      <div className="flex flex-col">
        {disciplines.map((item) => (
          <div
            key={item.id}
            data-cursor="link"
            className="discipline-card group relative w-full border-b border-[#242424] px-5 md:px-10 py-[16px] md:py-[28px] flex items-center justify-between hover:bg-[#111111] transition-colors duration-300 overflow-hidden"
          >
            {/* Left Side */}
            <div className="flex items-center gap-6 z-10">
              <span className="font-['Space_Mono'] text-[12px] text-[#707070] w-10 group-hover:text-[#FE651A] transition-colors duration-300">
                {item.id}
              </span>
              <div className="relative">
                <h3 className="font-['Bebas_Neue'] text-[clamp(24px,6vw,40px)] md:text-[clamp(28px,4vw,52px)] text-[#F0EDE6] leading-none">
                  {item.name}
                </h3>
                {/* Underline */}
                <div className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#FE651A] group-hover:w-full transition-all duration-400 ease-out" />
              </div>
            </div>


            {/* Right Side */}
            <div className="hidden md:flex items-center gap-6 z-10">
              <span className="font-['DM_Sans'] text-[14px] text-[#707070]">
                {item.desc}
              </span>
              <span className="text-[#F0EDE6] text-2xl opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                ↗
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Disciplines;
