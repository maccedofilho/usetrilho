"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

const HeroScene = dynamic(() => import("./hero-scene"), {
  ssr: false,
  loading: () => <HeroPoster />,
});

function HeroPoster() {
  return (
    <div className="hero-poster">
      <Image
        src="/hero-poster.png"
        alt=""
        fill
        priority
        sizes="(min-width: 768px) 46vw, 100vw"
      />
    </div>
  );
}

export function HeroVisual() {
  const reducedMotion = useReducedMotion();
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const context =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    const cores = navigator.hardwareConcurrency ?? 8;
    const frame = requestAnimationFrame(() => {
      setCanRender(Boolean(context) && cores > 4 && !reducedMotion);
    });

    return () => cancelAnimationFrame(frame);
  }, [reducedMotion]);

  return (
    <div className="hero-visual" aria-hidden="true">
      {canRender ? <HeroScene /> : <HeroPoster />}
      <div className="hero-visual-label">
        <span>Um fluxo conectado</span>
        <span>01 — 04</span>
      </div>
    </div>
  );
}
