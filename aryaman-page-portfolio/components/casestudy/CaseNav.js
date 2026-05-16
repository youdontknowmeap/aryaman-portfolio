"use client";

import Link from "next/link";
import { useState } from "react";

const CaseNav = ({ currentSlug, projects }) => {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  const nextIndex = (currentIndex + 1) % projects.length;
  const nextProject = projects[nextIndex];

  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer className="w-full border-t border-[#242424] bg-[#080808] px-5 md:px-10 py-20">
      <Link
        href={`/work/${nextProject.slug}`}
        data-cursor="project"
        className="group block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="font-['Space_Mono'] text-[11px] text-[#707070] tracking-[0.12em] uppercase">
          Next Project
        </span>
        <div className="flex items-center gap-6 mt-4">
          <h2
            className="font-['Bebas_Neue'] text-[clamp(48px,8vw,96px)] text-[#F0EDE6] leading-none transition-colors duration-500"
            style={{ color: isHovered ? nextProject.accentColor : "" }}
          >
            {nextProject.title}
          </h2>
          <span
            className="text-[clamp(32px,5vw,64px)] text-[#F0EDE6] transition-transform duration-500 ease-out"
            style={{ 
              transform: isHovered ? "translateX(12px)" : "translateX(0)",
              color: isHovered ? nextProject.accentColor : ""
            }}
          >
            →
          </span>
        </div>
      </Link>
    </footer>
  );
};

export default CaseNav;
