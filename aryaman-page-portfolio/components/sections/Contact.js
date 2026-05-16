"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useMagnetic from "@/hooks/useMagnetic";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Contact = () => {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const labelRef = useRef(null);
  const emailBlockRef = useRef(null);
  const emailButtonRef = useRef(null);
  
  const [copied, setCopied] = useState(false);
  const email = "aryamanpage7@gmail.com";

  // Apply Magnetic to email button
  useMagnetic(emailButtonRef);

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      tl.fromTo(
        labelRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5 }
      )
        .fromTo(
          headlineRef.current.children[0], // "LET'S"
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 0.9, ease: "expo.out" },
          "-=0.2"
        )
        .fromTo(
          headlineRef.current.children[1], // "TALK."
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 0.9, ease: "expo.out" },
          "-=0.78" // Staggered by 120ms (0.9 - 0.78 = 0.12)
        )
        .fromTo(
          emailBlockRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3" // 300ms delay after previous
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen w-full bg-[#080808] flex flex-col justify-center items-start px-5 md:px-10 py-20 overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div 
        className="absolute bottom-[-300px] left-[-200px] w-[800px] h-[800px] pointer-events-none z-0 animate-glow-pulse"
        style={{
          background: "radial-gradient(circle, rgba(254,101,26,0.12) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10">
        {/* TOP LABEL */}
        <span 
          ref={labelRef}
          className="font-['Space_Mono'] text-[12px] text-[#707070] tracking-[0.12em] uppercase block mb-6"
        >
          Ready to create something real?
        </span>

        <h2 ref={headlineRef} className="flex flex-col">
          <span className="font-['Bebas_Neue'] text-[clamp(56px,14vw,100px)] md:text-[clamp(80px,14vw,180px)] text-[#F0EDE6] line-height-[0.9] uppercase">
            Let&apos;s
          </span>
          <span className="font-['Bebas_Neue'] text-[clamp(56px,14vw,100px)] md:text-[clamp(80px,14vw,180px)] text-[#FE651A] line-height-[0.9] uppercase">
            Talk.
          </span>
        </h2>


        {/* EMAIL BLOCK */}
        <div ref={emailBlockRef} className="mt-12 flex flex-col gap-1 items-start">
          <span className="font-['Space_Mono'] text-[10px] text-[#707070] tracking-[0.12em] uppercase">
            Or drop a line
          </span>
          <button
            ref={emailButtonRef}
            onClick={handleCopyEmail}
            data-cursor="link"
            className="font-['Space_Mono'] text-[12px] md:text-[14px] text-[#F0EDE6] hover:text-[#FE651A] transition-colors duration-200 uppercase relative group"
          >
            {copied ? "Copied ✓" : email}
            <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#FE651A] group-hover:w-full transition-all duration-300" />
          </button>
        </div>

        {/* SOCIAL LINKS */}
        <div className="mt-8 flex gap-3 items-center text-[#707070] font-['Space_Mono'] text-[11px] uppercase tracking-[0.1em]">
          <SocialLink label="Instagram" href="https://www.instagram.com/aryamanpage/" />
          <span>·</span>
          <SocialLink label="LinkedIn" href="https://www.linkedin.com/in/aryaman-page-03372b1bb/" />
        </div>
      </div>

      {/* LOCATION */}
      <div className="absolute bottom-10 right-10 hidden md:block">
        <span className="font-['Space_Mono'] text-[10px] text-[#707070] tracking-[0.12em] uppercase">
          Pune, India — Available Worldwide
        </span>
      </div>

      <style jsx>{`
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1.0; }
        }
        .animate-glow-pulse {
          animation: glow-pulse 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

const SocialLink = ({ label, href }) => {
  const linkRef = useRef(null);
  useMagnetic(linkRef);

  return (
    <a
      ref={linkRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="link"
      className="hover:text-[#F0EDE6] transition-colors duration-150 inline-block"
    >
      {label}
    </a>
  );
};

export default Contact;
