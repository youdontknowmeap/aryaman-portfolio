"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Application } from "@splinetool/runtime";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const splineContainerRef = useRef(null);
  const canvasRef = useRef(null);
  
  const [hasScrolled, setHasScrolled] = useState(false);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [splineError, setSplineError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // Headline Entrance Animation
    const lines = headlineRef.current.querySelectorAll("div");
    
    gsap.fromTo(
      lines,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "expo.out",
        delay: 0.2,
      }
    );
  }, []);

  // Initialize Spline Runtime
  useEffect(() => {
    if (!mounted || !canvasRef.current) return;

    const app = new Application(canvasRef.current);
    
    const loadSpline = async () => {
      try {
        await app.load("https://prod.spline.design/t4uF5FFEbSgajWP5/scene.splinecode");
        console.log("Spline Runtime Loaded Successfully");
        setSplineLoaded(true);
      } catch (error) {
        console.error("Spline Runtime Error:", error);
        setSplineError(true);
      }
    };

    loadSpline();

    return () => {
      // Cleanup
    };
  }, [mounted]);

  // Main Hero Scroll Animation (ScrollTrigger)
  useEffect(() => {
    if (!mounted || !splineLoaded) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            setHasScrolled(self.progress > 0.05);
          },
        },
      });

      // Text leaves through the left side
      tl.to(headlineRef.current, {
        x: -500,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1,
        ease: "power2.inOut",
      }, 0);

      // Move 3D object to center, scale up, and rotate
      tl.to(splineContainerRef.current, {
        x: "-20vw", // Moves it towards center from its right-0 position
        scale: 1.4,
        rotation: 45,
        opacity: 1,
        duration: 1.5,
        ease: "power2.inOut",
      }, 0);
    });

    return () => ctx.revert();
  }, [mounted, splineLoaded]);

  // Animation for Spline initial fade-in
  useEffect(() => {
    if (splineLoaded && splineContainerRef.current) {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) {
        splineContainerRef.current.style.opacity = 0.85;
        return;
      }

      gsap.to(splineContainerRef.current, {
        opacity: 0.85,
        duration: 1.5,
        ease: "power2.out",
      });
    }
  }, [splineLoaded]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full h-[100vh] bg-[#080808] overflow-hidden select-none"
    >
      {/* TOP-LEFT METADATA */}
      <div className="absolute top-[70px] left-[20px] md:top-[80px] md:left-[40px] z-10 flex flex-col gap-[6px]">
        <span className="font-['Space_Mono'] text-[10px] md:text-[11px] text-[#707070] tracking-[0.15em] uppercase">
          Aryaman Page
        </span>
        <span className="font-['Space_Mono'] text-[10px] md:text-[11px] text-[#707070] tracking-[0.1em] uppercase">
          UI/UX · Motion · Cinema
        </span>
      </div>

      {/* MAIN HEADLINE */}
      <div
        ref={headlineRef}
        className="absolute bottom-[60px] left-[20px] md:bottom-[120px] md:left-[40px] z-10 flex flex-col"
      >
        <h1 className="font-['Bebas_Neue'] text-[clamp(64px,10vw,140px)] leading-[0.92] text-[#F0EDE6] tracking-[-0.01em] uppercase">
          <div>Built by</div>
          <div className="text-[#FE651A]">Aryaman Page.</div>
          <div className="mt-4 text-[clamp(24px,4vw,48px)] text-[#707070] tracking-normal lowercase italic font-['DM_Sans']">
            Powered by curiosity and caffeine.
          </div>
        </h1>
      </div>

      {/* BACKGROUND AMBIENT GLOW */}
      <div 
        className="absolute bottom-[-200px] left-[-100px] w-[600px] h-[600px] pointer-events-none opacity-60 animate-pulse-slow"
        style={{
          background: "radial-gradient(circle, rgba(254,101,26,0.08) 0%, transparent 70%)",
        }}
      />

      {/* 3D SCENE / FALLBACK */}
      <div className="absolute right-0 top-0 w-full md:w-[60%] h-full z-0 pointer-events-none">
        {/* SPLINE CANVAS */}
        {!splineError && (
          <div 
            ref={splineContainerRef}
            className="w-full h-full"
          >
            <canvas 
              id="canvas3d" 
              ref={canvasRef}
              className="w-full h-full"
            />
          </div>
        )}

        {/* ERROR FALLBACK */}
        {splineError && (
          <div 
            className="w-full h-full animate-scale-glow"
            style={{
              background: "radial-gradient(ellipse at 70% 50%, rgba(254,101,26,0.06) 0%, transparent 60%)",
            }}
          />
        )}
        
        {/* Loading Placeholder */}
        {!splineLoaded && !splineError && (
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              background: "radial-gradient(ellipse at center, rgba(254,101,26,0.03) 0%, transparent 60%)",
            }}
          />
        )}
      </div>

      {/* SCROLL INDICATOR */}
      <div 
        className={`absolute bottom-[40px] right-[40px] z-10 hidden md:flex flex-col items-center gap-4 transition-opacity duration-500 ${
          hasScrolled ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="font-['Space_Mono'] text-[10px] text-[#707070] uppercase tracking-widest rotate-90 origin-center mb-6">
          Scroll
        </span>
        <div className="animate-bounce-slow">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#707070" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
