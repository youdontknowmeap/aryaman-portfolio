"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    num: "01",
    name: "Listen",
    desc: "Before anything else, understand what's actually being asked. Not the brief. The need beneath it.",
  },
  {
    num: "02",
    name: "Decode",
    desc: "Strip every assumption. Find the emotional core the work needs to hit.",
  },
  {
    num: "03",
    name: "Construct",
    desc: "Build the structure the idea demands. Not the structure convention suggests.",
  },
  {
    num: "04",
    name: "Intensify",
    desc: "Layer until the work earns its impact. Restraint is a choice, not a limitation.",
  },
  {
    num: "05",
    name: "Ship",
    desc: "Send it into the world. Then start again.",
  },
];

const Process = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReduced) {
      const bgs = containerRef.current.querySelectorAll(".bg-number");
      bgs.forEach(bg => { bg.style.opacity = "0.15"; bg.style.transform = "translateY(-50%) translateX(40px)"; });
      return;
    }

    const ctx = gsap.context(() => {
      const rows = containerRef.current.querySelectorAll(".process-step-row");

      rows.forEach((row) => {
        const bgNum = row.querySelector(".bg-number");
        const name = row.querySelector(".step-name");
        const desc = row.querySelector(".step-desc");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        tl.fromTo(
          bgNum,
          { opacity: 0, x: 0 },
          { opacity: 0.15, x: 40, duration: 0.6, ease: "power2.out" }
        )
          .fromTo(
            name,
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.7, ease: "expo.out" },
            "-=0.4"
          )
          .fromTo(
            desc,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.6, ease: "expo.out" },
            "-=0.35"
          );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={containerRef} className="w-full bg-[#080808]">
      {/* SECTION HEADER */}
      <div className="pt-[120px] px-5 md:px-10 pb-[60px]">
        <span className="font-['Space_Mono'] text-[11px] text-[#707070] tracking-[0.15em] uppercase block mb-2">
          How I Work
        </span>
        <h2 className="font-['Bebas_Neue'] text-[clamp(40px,10vw,80px)] md:text-[clamp(48px,8vw,96px)] text-[#F0EDE6] leading-none">
          The Process
        </h2>

      </div>

      {/* STEPS */}
      <div className="flex flex-col">
        {steps.map((step) => (
          <div
            key={step.num}
            className="process-step-row relative w-full border-b border-[#242424] px-5 md:px-10 py-[32px] md:py-[48px] overflow-hidden"
          >
            {/* Background Number */}
            <div
              aria-hidden="true"
              className="bg-number absolute right-10 top-1/2 -translate-y-1/2 font-['Bebas_Neue'] text-[150px] md:text-[200px] text-[#1A1A1A] z-0 select-none pointer-events-none hidden md:block"
            >
              {step.num}
            </div>


            {/* Foreground Content */}
            <div className="relative z-10">
              <div className="flex items-baseline">
                <span className="font-['Space_Mono'] text-[11px] text-[#707070] w-[60px]">
                  {step.num} —
                </span>
                <h3 className="step-name font-['Bebas_Neue'] text-[clamp(32px,5vw,64px)] text-[#F0EDE6] leading-none">
                  {step.name}
                </h3>
              </div>
              <p className="step-desc font-['DM_Sans'] text-[15px] text-[#707070] leading-[1.7] max-w-[480px] mt-[12px] ml-[60px]">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
