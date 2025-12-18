"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

// npm install @tsparticles/react @tsparticles/engine @tsparticles/slim

export default function ParticlesTech() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = async (container?: Container) => {
    console.log("Tech Particles Loaded:", container);
  };

  const options: ISourceOptions = useMemo(() => ({
    background: { color: "transparent" },
    fullScreen: { enable: false },
    fpsLimit: 60,

    particles: {
      number: { value: 50, density: { enable: true, area: 800 } },
      color: { value: "#00ffff" },
      shape: { type: "circle" },
      opacity: { value: 0.7 },
      size: { value: { min: 2, max: 4 } },

      links: {
        enable: true,
        distance: 120,
        color: "#00ffff",
        opacity: 0.3,
        width: 1,
      },

      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "bounce" },
      },
    },

    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        grab: { distance: 140, links: { opacity: 0.6 } },
        push: { quantity: 4 },
      },
    },

    detectRetina: true,
  }), []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles-tech"
      particlesLoaded={particlesLoaded}
      options={options}
      className="absolute inset-0"
    />
  );
}
