"use client";

import { createContext, useContext, useState, useRef } from "react";

const SoundContext = createContext({
  isPlaying: false,
  toggleSound: () => {},
});

export const SoundContextProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef(null);

  const toggleSound = async () => {
    try {
      // Lazy init AudioContext on first interaction
      if (!audioContextRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          audioContextRef.current = new AudioContext();
        }
      }

      const ctx = audioContextRef.current;
      if (!ctx) return;

      if (!isPlaying) {
        if (ctx.state === "suspended") {
          await ctx.resume();
        }
        setIsPlaying(true);
      } else {
        setIsPlaying(false);
      }
    } catch (error) {
      console.warn("AudioContext failed to initialize:", error);
      setIsPlaying(false);
    }
  };

  return (
    <SoundContext.Provider value={{ isPlaying, toggleSound, audioContext: audioContextRef.current }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSoundContext = () => useContext(SoundContext);
