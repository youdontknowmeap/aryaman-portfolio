"use client";

import { useEffect, useState, useRef } from "react";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(true); // Default to true to hide initially
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(0); // 0 to 5
  const [typedText, setTypedText] = useState("");
  const [showSubtext, setShowSubtext] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  const [showSkip, setShowSkip] = useState(false);
  
  const fullText = "ARYAMAN PAGE";
  const timerRef = useRef([]);

  useEffect(() => {
    const currentTimers = timerRef.current;
    // Check session storage
    const loaded = sessionStorage.getItem("hasLoadedPortfolio");
    if (loaded) {
      setHasLoaded(true);
      return;
    }

    setHasLoaded(false);
    setIsVisible(true);
    
    // STEP 1: Line fade-in (0ms)
    setStep(1);

    // STEP 2: Counter starts (400ms)
    currentTimers.push(setTimeout(() => {
      setStep(2);
      const interval = setInterval(() => {
        setCounter(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2;
        });
      }, 28);
    }, 400));

    // STEP 3: Line scanning (600ms)
    currentTimers.push(setTimeout(() => setStep(3), 600));

    // SKIP Button appears (1500ms)
    currentTimers.push(setTimeout(() => setShowSkip(true), 1500));

    // STEP 4: Pulse + Typing (1800ms)
    currentTimers.push(setTimeout(() => {
      setStep(4);
      let charIndex = 0;
      const typeInterval = setInterval(() => {
        if (charIndex < fullText.length) {
          setTypedText(fullText.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          // Show subtext after delay
          currentTimers.push(setTimeout(() => setShowSubtext(true), 200));
        }
      }, 60);
    }, 1800));

    // STEP 5: Flash + Fade out (2600ms)
    currentTimers.push(setTimeout(() => finishLoading(), 2600));

    return () => {
      currentTimers.forEach(clearTimeout);
    };
  }, []);

  const finishLoading = () => {
    setShowFlash(true);
    timerRef.current.push(setTimeout(() => {
      setShowFlash(false);
      setStep(5);
      timerRef.current.push(setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem("hasLoadedPortfolio", "true");
        // Force a small delay before unmounting to allow fade out
        timerRef.current.push(setTimeout(() => setHasLoaded(true), 400));
      }, 400));
    }, 80));
  };

  if (hasLoaded) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-[#080808] flex items-center justify-center transition-opacity duration-400 ease-out ${
        step === 5 ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* STEP 1-3: LINE */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 w-[60vw] h-[1px] bg-[#F0EDE6]/30 transition-all duration-300 ${
          step >= 1 ? "opacity-100" : "opacity-0"
        } ${
          step === 3 ? "translate-y-[15vh]" : "translate-y-0"
        } ${
          step === 4 ? "scale-y-[3] opacity-100" : ""
        }`}
        style={{
          transitionTimingFunction: step === 3 ? "linear" : "ease-out",
          transitionDuration: step === 3 ? "1600ms" : "300ms",
        }}
      />

      {/* STEP 2: COUNTER */}
      <div
        className={`absolute top-10 right-10 font-['Space_Mono'] text-[11px] text-[#707070] transition-opacity duration-300 ${
          step >= 2 && step < 5 ? "opacity-100" : "opacity-0"
        }`}
      >
        {counter.toString().padStart(3, "0")}
      </div>

      {/* SKIP BUTTON */}
      {showSkip && step < 5 && (
        <button
          onClick={finishLoading}
          data-cursor="link"
          className="absolute top-10 left-10 md:left-auto md:right-24 font-['Space_Mono'] text-[10px] text-[#707070] hover:text-[#F0EDE6] transition-colors"
        >
          SKIP ›
        </button>
      )}

      {/* STEP 4: TEXT */}
      <div className="absolute left-10 flex flex-col gap-2">
        <h1 className="font-['Bebas_Neue'] text-[clamp(32px,5vw,56px)] text-[#F0EDE6] leading-none">
          {typedText}
        </h1>
        <p
          className={`font-['Space_Mono'] text-[11px] text-[#707070] tracking-[0.15em] transition-opacity duration-500 ${
            showSubtext ? "opacity-100" : "opacity-0"
          }`}
        >
          UI/UX · MOTION · CINEMA
        </p>
      </div>

      {/* STEP 5: FLASH */}
      {showFlash && (
        <div className="absolute inset-0 z-[100] bg-white animate-in fade-in duration-75" />
      )}
    </div>
  );
};

export default Preloader;

