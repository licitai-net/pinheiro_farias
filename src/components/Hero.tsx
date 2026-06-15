import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        "[data-hero]",
        { autoAlpha: 0, y: 18 },
        { autoAlpha: 1, y: 0, duration: 1, stagger: 0.09, ease: "power3.out" },
      );

      gsap.fromTo(
        ".hero-line",
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 1.2, delay: 0.3, stagger: 0.08, ease: "power3.out" },
      );
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <section className="hero section-grid" id="inicio" ref={heroRef}>
      <div className="blueprint-lines" aria-hidden="true" />
      <div className="hero-copy">
        <p className="eyebrow" data-hero>
          Campinas e região
        </p>
        <h1 data-hero>Advocacia trabalhista estratégica, técnica e institucional.</h1>
        <p className="hero-lede" data-hero>
          Atuamos em demandas trabalhistas com análise cuidadosa, orientação clara e condução
          responsável em Campinas e região.
        </p>
        <div className="hero-actions" data-hero>
          <a className="button primary" href="#atuacao">
            Conheça a atuação
          </a>
          <a className="button secondary" href="#contato">
            Falar com o escritório
          </a>
        </div>
      </div>
      <div className="hero-visual" data-hero aria-hidden="true">
        <div className="legal-plate">
          <svg viewBox="0 0 520 520" role="img" aria-label="">
            <rect x="112" y="94" width="246" height="326" rx="14" />
            <rect x="164" y="128" width="244" height="300" rx="14" />
            <path className="hero-line" d="M194 184H352" />
            <path className="hero-line" d="M194 228H378" />
            <path className="hero-line" d="M194 272H330" />
            <path className="hero-line" d="M194 316H364" />
            <path className="hero-line" d="M194 360H312" />
            <path d="M122 176C176 136 240 130 304 160C354 184 394 232 416 292" />
            <path d="M118 356C192 404 286 404 390 342" />
            <circle cx="382" cy="150" r="26" />
            <path d="M370 150H394M382 138V162" />
          </svg>
        </div>
      </div>
    </section>
  );
}
