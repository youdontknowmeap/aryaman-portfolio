"use client";

import { useEffect, useRef } from "react";
import { useSoundContext } from "@/context/SoundContext";

const useSound = (isPlaying) => {
  const { audioContext } = useSoundContext();
  const nodesRef = useRef({
    subOsc: null,
    harmOsc: null,
    noiseSource: null,
    gains: [],
  });

  // TODO: Replace oscillator nodes with /public/audio/ambient.mp3
  // Recommended spec: 30–60s loop, dark cinematic drone, -14 LUFS, MP3 128kbps

  useEffect(() => {
    if (!audioContext) return;

    const buildGraph = () => {
      const ctx = audioContext;
      const now = ctx.currentTime;

      // 1. Sub oscillator (55Hz sine)
      const subOsc = ctx.createOscillator();
      subOsc.type = "sine";
      subOsc.frequency.setValueAtTime(55, now);
      const subGain = ctx.createGain();
      subGain.gain.setValueAtTime(0, now);
      subOsc.connect(subGain);
      subGain.connect(ctx.destination);

      // 2. Harmonic oscillator (110Hz sine)
      const harmOsc = ctx.createOscillator();
      harmOsc.type = "sine";
      harmOsc.frequency.setValueAtTime(110, now);
      const harmGain = ctx.createGain();
      harmGain.gain.setValueAtTime(0, now);
      harmOsc.connect(harmGain);
      harmGain.connect(ctx.destination);

      // 3. Filtered Noise
      const bufferSize = 2 * ctx.sampleRate;
      const noiseBuffer = ctx.createBuffer(2, bufferSize, ctx.sampleRate);
      for (let channel = 0; channel < 2; channel++) {
        const data = noiseBuffer.getChannelData(channel);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }
      }
      const noiseSource = ctx.createBufferSource();
      noiseSource.buffer = noiseBuffer;
      noiseSource.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(180, now);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0, now);

      noiseSource.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(ctx.destination);

      // Start all
      subOsc.start();
      harmOsc.start();
      noiseSource.start();

      nodesRef.current = {
        subOsc,
        harmOsc,
        noiseSource,
        gains: [
          { node: subGain, target: 0.035 },
          { node: harmGain, target: 0.02 },
          { node: noiseGain, target: 0.012 },
        ],
      };
    };

    if (isPlaying) {
      if (!nodesRef.current.subOsc) {
        buildGraph();
      }
      
      // Fade in
      const now = audioContext.currentTime;
      nodesRef.current.gains.forEach(({ node, target }) => {
        node.gain.cancelScheduledValues(now);
        node.gain.setValueAtTime(node.gain.value, now);
        node.gain.linearRampToValueAtTime(target, now + 1.5);
      });
    } else {
      if (nodesRef.current.gains.length > 0) {
        // Fade out
        const now = audioContext.currentTime;
        nodesRef.current.gains.forEach(({ node }) => {
          node.gain.cancelScheduledValues(now);
          node.gain.setValueAtTime(node.gain.value, now);
          node.gain.linearRampToValueAtTime(0, now + 0.8);
        });

        // Suspend after fade
        const timer = setTimeout(() => {
          if (audioContext.state === "running") {
            audioContext.suspend();
          }
        }, 850);
        return () => clearTimeout(timer);
      }
    }
  }, [isPlaying, audioContext]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (nodesRef.current.subOsc) {
        nodesRef.current.subOsc.stop();
        nodesRef.current.harmOsc.stop();
        nodesRef.current.noiseSource.stop();
      }
    };
  }, []);
};

export default useSound;
