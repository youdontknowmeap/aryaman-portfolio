"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import Image from "next/image";

const CaseHero = ({ project }) => {
  console.log("CaseHero Project:", project);
  const router = useRouter();
  const heroRef = useRef(null);
  const heroImgRef = useRef(null);
  const tagsRef = useRef(null);
  const titleRef = useRef(null);
  const subMetaRef = useRef(null);
  const glowRef = useRef(null);

  const handleBack = (e) => {
    e.preventDefault();
    router.push("/");
    // We can't easily scroll to #work after push without a small delay or a global state
    // But since the user requested it, we'll try to use a timeout or let the home page handle it
    setTimeout(() => {
      const element = document.getElementById("work");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      if (glowRef.current) glowRef.current.style.opacity = "1";
      return;
    }

    const ctx = gsap.context(() => {
      // Tags animation
      gsap.fromTo(
        tagsRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, ease: "expo.out" }
      );

      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 1, ease: "expo.out", delay: 0.1 }
      );

      // Subtitle + Meta animation
      gsap.fromTo(
        subMetaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.3 }
      );

      // Glow pulse
      gsap.to(glowRef.current, {
        opacity: 1,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Image animation
      if (heroImgRef.current) {
        gsap.fromTo(
          heroImgRef.current,
          { scale: 1.1, opacity: 0 },
          { scale: 1, opacity: 0.4, duration: 1.5, ease: "power2.out" }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden"
      style={{ background: project.coverGradient }}
    >
      {/* HERO IMAGE */}
      {project.heroImage && (
        <div ref={heroImgRef} className="absolute inset-0 z-0">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />
          <div className="absolute inset-0 bg-[#080808]/40" />
        </div>
      )}

      {/* TOP BAR */}
      <div className="absolute top-0 left-0 w-full p-6 md:px-10 md:py-8 flex justify-between items-center z-20">
        <button
          onClick={handleBack}
          data-cursor="link"
          className="font-['Space_Mono'] text-[11px] text-[#707070] hover:text-[#F0EDE6] tracking-[0.12em] transition-colors duration-300"
        >
          ← WORK
        </button>
        <span className="font-['Space_Mono'] text-[11px] text-[#707070] tracking-[0.12em]">
          {project.year}
        </span>
      </div>

      {/* BOTTOM CONTENT */}
      <div className="absolute bottom-20 left-5 md:left-10 right-5 z-20">
        <div ref={tagsRef} className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="font-['Space_Mono'] text-[10px] text-[#707070] border border-white/15 px-[10px] py-[3px] rounded-[2px]"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1
          ref={titleRef}
          className="font-['Bebas_Neue'] text-[clamp(72px,13vw,160px)] text-[#F0EDE6] leading-[0.88] tracking-[-0.02em] uppercase"
        >
          {project.title}
        </h1>

        <div ref={subMetaRef}>
          <p className="font-['DM_Sans'] text-[clamp(14px,1.5vw,18px)] text-[#707070] max-width-[520px] mt-4">
            {project.subtitle}
          </p>

          <div className="flex gap-8 mt-6">
            <span className="font-['Space_Mono'] text-[10px] text-[#707070] tracking-[0.1em] uppercase">
              ROLE — {project.role}
            </span>
            <span className="font-['Space_Mono'] text-[10px] text-[#707070] tracking-[0.1em] uppercase">
              DURATION — {project.duration}
            </span>
          </div>
        </div>
      </div>

      {/* ACCENT GLOW */}
      <div
        ref={glowRef}
        className="absolute -bottom-[200px] -left-[100px] w-[800px] h-[800px] rounded-full pointer-events-none opacity-0 mix-blend-screen z-10"
        style={{
          background: `radial-gradient(circle, ${project?.accentColor || "#FE651A"}1A 0%, transparent 70%)`,
        }}
      />
    </section>
  );
};

export default CaseHero;
