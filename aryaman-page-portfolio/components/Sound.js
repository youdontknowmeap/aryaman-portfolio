"use client";

import { useSoundContext } from "@/context/SoundContext";
import useSound from "@/hooks/useSound";

const Sound = () => {
  const { isPlaying } = useSoundContext();
  
  // Reactively manage audio
  useSound(isPlaying);

  return null; // Invisible component
};

export default Sound;
