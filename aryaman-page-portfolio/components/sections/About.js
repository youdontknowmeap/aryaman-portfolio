"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const sectionRef = useRef(null);
  const portraitRef = useRef(null);
  const portraitImageRef = useRef(null);
  const sweepRef = useRef(null);
  const statsRef = useRef(null);
  const bioRef = useRef(null);

  const [counters, setCounters] = useState({ years: 0, products: 0, disciplines: 0 });

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReduced) {
      setCounters({ years: 2, products: 3, disciplines: 3 });
      return;
    }

    const ctx = gsap.context(() => {
      // PORTRAIT REVEAL
      gsap.fromTo(
        portraitRef.current,
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.5,
          ease: "expo.inOut",
          scrollTrigger: {
            trigger: portraitRef.current,
            start: "top 80%",
          },
        }
      );

      // PORTRAIT IMAGE ZOOM
      gsap.fromTo(
        portraitImageRef.current,
        { scale: 1.4, filter: "grayscale(1) brightness(0.5)" },
        {
          scale: 1,
          filter: "grayscale(0) brightness(1)",
          duration: 2.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: portraitRef.current,
            start: "top 80%",
          },
        }
      );

      // FIRE SWEEP
      gsap.fromTo(
        sweepRef.current,
        { x: "-100%" },
        {
          x: "100%",
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: portraitRef.current,
            start: "top 80%",
          },
        }
      );

      // BIO STAGGER
      const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
      const paragraphs = bioRef.current.querySelectorAll("p");
      gsap.fromTo(
        paragraphs,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: isMobile ? 0.06 : 0.15,
          ease: "expo.out",
          scrollTrigger: {
            trigger: bioRef.current,
            start: "top 85%",
          },
        }
      );

      // STATS COUNTER
      const statsTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 90%",
        },
      });

      const counts = { years: 0, products: 0, disciplines: 0 };
      statsTimeline.to(counts, {
        years: 2,
        products: 3,
        disciplines: 3,
        duration: 1.2,
        ease: "power2.out",
        onUpdate: () => {
          setCounters({
            years: Math.floor(counts.years),
            products: Math.floor(counts.products),
            disciplines: Math.floor(counts.disciplines),
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="w-full bg-[#080808] py-[80px] md:py-[120px] px-5 md:px-10 border-b border-[#242424]">
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start">
        {/* LEFT — PORTRAIT */}
        <div className="w-full md:w-[45%] relative group mb-10 md:mb-0">
          <div
            ref={portraitRef}
            className="w-full aspect-[4/5] bg-[#111111] rounded-[2px] flex items-center justify-center relative overflow-hidden"
          >
            {/* Portrait Image */}
            <Image
              ref={portraitImageRef}
              src="/images/Photo from aryamanpage7.jpg"
              alt="Aryaman Page"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 45vw"
              priority
            />
            
            {/* Sweep Element */}
            <div 
              ref={sweepRef}
              className="absolute inset-y-0 left-0 w-full bg-[#FE651A] z-20 mix-blend-overlay pointer-events-none"
            />
          </div>
        </div>

        {/* RIGHT — TEXT */}
        <div className="w-full md:w-[55%] pt-4">
          <span className="font-['Space_Mono'] text-[11px] text-[#707070] tracking-[0.15em] uppercase block mb-8">
            About
          </span>

          <div ref={bioRef} className="flex flex-col gap-6 max-w-[520px]">
            <p className="font-['DM_Sans'] text-[16px] text-[#F0EDE6]/80 leading-[1.75]">
              I grew up between screens and speakers.
            </p>
            <p className="font-['DM_Sans'] text-[16px] text-[#F0EDE6]/80 leading-[1.75]">
              Trained in design. Self-taught in everything else. I work at the intersection of craft, culture, and computation.
            </p>
            <p className="font-['DM_Sans'] text-[16px] text-[#F0EDE6]/80 leading-[1.75]">
              Based in India. Thinking everywhere.
            </p>
          </div>

          <div className="w-[48px] h-[1px] bg-[#FE651A] my-8" />

          {/* STATS ROW */}
          <div ref={statsRef} className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">
            <StatItem number={counters.years} label="Years Building" />
            <div className="hidden md:block w-[1px] h-12 bg-[#242424]" />
            <StatItem number={counters.products} label="Shipped Products" />
            <div className="hidden md:block w-[1px] h-12 bg-[#242424]" />
            <StatItem number={counters.disciplines} label="Disciplines Mastered" />
          </div>
        </div>

      </div>
    </section>
  );
};

const StatItem = ({ number, label }) => (
  <div className="flex flex-col">
    <span className="font-['Bebas_Neue'] text-[clamp(48px,6vw,80px)] text-[#F0EDE6] leading-none">
      {number}
    </span>
    <span className="font-['Space_Mono'] text-[10px] text-[#707070] tracking-[0.1em] uppercase mt-2">
      {label}
    </span>
  </div>
);

export default About;
