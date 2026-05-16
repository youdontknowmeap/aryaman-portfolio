"use client";

import { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  
  const [cursorType, setCursorType] = useState("default"); // default, link, project, image
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Detect desktop (fine pointer + hover capability)
    const desktopCheck = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsEnabled(desktopCheck.matches);

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const onMouseOver = (e) => {
      const target = e.target.closest("[data-cursor]");
      if (target) {
        setCursorType(target.getAttribute("data-cursor"));
      } else if (e.target.tagName === "A" || e.target.tagName === "BUTTON") {
        setCursorType("link");
      }
    };

    const onMouseOut = () => {
      setCursorType("default");
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mouseout", onMouseOut);

    // Animation Loop
    let rafId;
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const render = () => {
      // Smooth follow for the ring
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.15);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.15);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(render);
    };
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(rafId);
    };
  }, []); // Run once on mount

  if (!isEnabled) return null;

  // Determine Ring Styles based on type and click
  const getRingStyles = () => {
    let size = 28;
    let borderColor = "rgba(240, 237, 230, 0.4)"; // bone 40%
    let backgroundColor = "transparent";
    let borderRadius = "50%";
    let borderWidth = "1.5px";

    if (isClicked) {
      size = 16;
    } else {
      switch (cursorType) {
        case "link":
          size = 48;
          borderColor = "rgba(254, 101, 26, 0.6)"; // fire 60%
          break;
        case "project":
          size = 64;
          backgroundColor = "rgba(254, 101, 26, 0.2)"; // fire 20%
          borderColor = "transparent";
          break;
        case "image":
          size = 40;
          borderRadius = "0";
          borderWidth = "0";
          break;
        default:
          size = 28;
      }
    }

    return {
      width: `${size}px`,
      height: `${size}px`,
      borderColor,
      backgroundColor,
      borderRadius,
      borderWidth,
      opacity: isVisible ? 1 : 0,
      transition: `width ${isClicked ? 100 : 250}ms ease, height ${isClicked ? 100 : 250}ms ease, background-color 250ms ease, border-color 250ms ease, border-radius 250ms ease`,
    };
  };

  const getDotStyles = () => {
    const size = isClicked ? 4 : 8;
    return {
      width: `${size}px`,
      height: `${size}px`,
      opacity: isVisible ? 1 : 0,
      transition: "width 150ms ease, height 150ms ease",
    };
  };

  return (
    <>
      {/* DOT */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 bg-[#F0EDE6] rounded-full pointer-events-none z-[999999]"
        style={getDotStyles()}
      />

      {/* RING */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 border pointer-events-none z-[999998] flex items-center justify-center overflow-hidden"
        style={getRingStyles()}
      >
        {cursorType === "project" && !isClicked && (
          <span className="text-[10px] text-[#F0EDE6] font-['Space_Mono'] uppercase tracking-widest animate-in fade-in duration-300">
            View
          </span>
        )}
        
        {cursorType === "image" && !isClicked && (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute w-full h-[1px] bg-[#F0EDE6]" />
            <div className="absolute h-full w-[1px] bg-[#F0EDE6]" />
          </div>
        )}
      </div>
    </>
  );
};

export default Cursor;

