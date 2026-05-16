"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projectsData";

// Projects are now imported from @/data/projectsData

const Work = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const cards = containerRef.current.querySelectorAll(".project-card");

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "expo.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, containerRef);

    const container = containerRef.current;

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(st => {
        if (st.vars.trigger === container || (st.trigger && st.trigger.classList && st.trigger.classList.contains('project-card'))) {
          st.kill(true);
        }
      });
    };
  }, []);

  return (
    <section id="work" ref={containerRef} className="w-full bg-[#080808] pb-20">
      {/* SECTION HEADER */}
      <div className="pt-[120px] px-5 md:px-10 pb-[60px] flex items-baseline">
        <h2 className="font-['Bebas_Neue'] text-[clamp(48px,8vw,96px)] text-[#F0EDE6] leading-none">
          Selected Work
        </h2>
        <span className="font-['Space_Mono'] text-[12px] text-[#707070] ml-4">
          (2022 — 2025)
        </span>
      </div>

      {/* GRID */}
      <div className="flex flex-col gap-4 px-5 md:px-10">
        {/* ROW 1 */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-4">
          <ProjectCard project={projects[0]} />
          <ProjectCard project={projects[1]} />
        </div>
        {/* If more projects are added, we can continue the pattern */}
        {projects.length > 2 && (
          <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4">
            {projects[2] && <ProjectCard project={projects[2]} />}
            {projects[3] && <ProjectCard project={projects[3]} />}
          </div>
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <Link
      href={`/work/${project.slug}`}
      data-cursor="project"
      className="project-card group relative w-full bg-[#111111] rounded-0 overflow-hidden flex flex-col border border-transparent hover:border-[#FE651A]/50 transition-colors duration-300"
      style={{ minHeight: project.cardAspect === "landscape" ? "360px" : "480px" }}
    >
      {/* Visual Area (70%) */}
      <div className="relative w-full h-[70%] overflow-hidden bg-[#0a0a0a]">
        {/* Subtle Noise/Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        {/* Main Visual Background */}
        <div className="w-full h-full transform group-hover:scale-[1.04] transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center">
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              loading="lazy"
            />
          ) : (
            <div 
              className="w-full h-full"
              style={{ background: project.coverGradient }}
            />
          )}
          
          {/* Internal Glow for depth */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent pointer-events-none" />
          
          {!project.coverImage && (
            <span className="absolute font-['Space_Mono'] text-[10px] text-[#F0EDE6]/20 tracking-[0.2em] uppercase group-hover:text-[#F0EDE6]/40 transition-colors duration-500">
              {project.title}
            </span>
          )}
        </div>
        
        {/* Arrow Icon */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <span className="text-[#F0EDE6] text-3xl">↗</span>
        </div>
      </div>


      {/* Info Bar (30%) */}
      <div className="h-[30%] bg-[#1A1A1A] p-5 md:p-6 flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <h3 className="font-['Bebas_Neue'] text-[clamp(20px,3vw,32px)] text-[#F0EDE6] group-hover:text-[#FE651A] transition-colors duration-300 leading-none">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={tag}
                className={`font-['Space_Mono'] text-[10px] text-[#707070] border border-[#242424] px-2 py-1 rounded-[2px] uppercase ${
                  idx >= 2 ? "hidden md:inline-block" : ""
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-end">
          <p className="font-['DM_Sans'] text-[12px] text-[#707070] max-w-[200px] leading-tight hidden md:block">
            {project.subtitle}
          </p>
          <span className="font-['Space_Mono'] text-[11px] text-[#707070]">
            {project.year}
          </span>
        </div>
      </div>
    </Link>
  );
};



export default Work;

