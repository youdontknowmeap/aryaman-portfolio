"use client";

import { useEffect, useRef, useState } from "react";

const Grain = () => {
  const canvasRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let lastTime = 0;

    // Configuration based on device
    const fpsLimit = isMobile ? 10 : 20;
    const interval = 1000 / fpsLimit;

    let imageData;
    let data;

    const resize = () => {
      // Use half resolution for performance as requested
      const scale = 0.5;
      const w = Math.floor(window.innerWidth * scale);
      const h = Math.floor(window.innerHeight * scale);
      canvas.width = w;
      canvas.height = h;
      imageData = ctx.createImageData(w, h);
      data = imageData.data;
    };

    const render = (time) => {
      animationFrameId = requestAnimationFrame(render);

      const deltaTime = time - lastTime;

      if (deltaTime < interval) return;
      lastTime = time - (deltaTime % interval);

      if (!data) return;

      // Faster noise generation
      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = 255; // Full alpha, controlled by CSS opacity
      }

      ctx.putImageData(imageData, 0, 0);
    };

    window.addEventListener("resize", resize);
    resize();
    
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-[100000]"
      style={{
        mixBlendMode: "overlay",
        opacity: isMobile ? 0.015 : 0.035,
      }}
    />
  );
};

export default Grain;

