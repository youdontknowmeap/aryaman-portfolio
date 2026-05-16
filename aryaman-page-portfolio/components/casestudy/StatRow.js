"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StatRow = ({ stats }) => {
  const rowRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Row entry animation
      gsap.fromTo(
        rowRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "expo.out",
          scrollTrigger: {
            trigger: rowRef.current,
            start: "top 85%",
          },
        }
      );

      // Count up animation for numeric stats
      statsRef.current.forEach((el, i) => {
        const value = stats[i].number;
        const isNumeric = /^\d+$/.test(value);

        if (isNumeric) {
          const targetValue = parseInt(value, 10);
          const obj = { val: 0 };

          gsap.to(obj, {
            val: targetValue,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            },
            onUpdate: () => {
              el.innerText = Math.round(obj.val);
            },
          });
        } else {
          // Fade in for non-numeric
          gsap.fromTo(
            el,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 1,
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
              },
            }
          );
        }
      });
    }, rowRef);

    return () => ctx.revert();
  }, [stats]);

  return (
    <div ref={rowRef} className="flex flex-col md:flex-row w-full my-12 border-y border-[#242424]">
      {stats.map((stat, i) => (
        <div
          key={i}
          className={`flex-1 p-8 border-[#242424] ${
            i !== stats.length - 1 ? "md:border-r border-b md:border-b-0" : ""
          }`}
        >
          <div
            ref={(el) => (statsRef.current[i] = el)}
            className="font-['Bebas_Neue'] text-[clamp(48px,6vw,72px)] text-[#F0EDE6] leading-none"
          >
            {stat.number}
          </div>
          <div className="font-['Space_Mono'] text-[10px] text-[#707070] tracking-[0.1em] uppercase mt-2">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatRow;
