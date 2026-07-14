import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-poster">
        <Image
          src="/hero-rail-poster-clean.png"
          alt=""
          fill
          priority
          sizes="(min-width: 768px) 46vw, 100vw"
        />
      </div>
      <div className="hero-visual-label">
        <span>Um fluxo conectado</span>
        <span>01 — 04</span>
      </div>
    </div>
  );
}
