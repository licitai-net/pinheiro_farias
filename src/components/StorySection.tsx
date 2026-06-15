import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function StorySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        ".story-document",
        { autoAlpha: 0, y: 18 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
          },
        },
      );

      gsap.fromTo(
        ".story-thread",
        { strokeDasharray: 520, strokeDashoffset: 520 },
        {
          strokeDashoffset: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 68%",
          },
        },
      );
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section className="story" ref={sectionRef} aria-labelledby="story-title">
      <div className="story-copy">
        <p className="eyebrow">Método técnico</p>
        <h2 id="story-title">Do relato aos documentos. Dos documentos à estratégia.</h2>
        <p>
          Organizamos informações, identificamos pontos relevantes e conduzimos a análise
          trabalhista com clareza em cada etapa.
        </p>
      </div>
      <div className="story-canvas" aria-hidden="true">
        <svg viewBox="0 0 760 520">
          <path className="story-thread" d="M132 320C230 234 306 380 394 282C482 184 564 242 638 154" />
          <g className="story-document story-document-a">
            <rect x="92" y="98" width="184" height="224" rx="10" />
            <path d="M126 146H232M126 184H244M126 222H210M126 260H238M126 300H188" />
          </g>
          <g className="story-document story-document-b">
            <rect x="292" y="168" width="184" height="224" rx="10" />
            <path d="M326 216H432M326 254H448M326 292H410M326 330H438M326 370H388" />
          </g>
          <g className="story-document story-document-c">
            <rect x="492" y="88" width="184" height="224" rx="10" />
            <path d="M526 136H632M526 174H648M526 212H610M526 250H638M526 290H588" />
          </g>
          <text className="story-label-final" x="384" y="454" textAnchor="middle">
            analise juridica organizada
          </text>
        </svg>
      </div>
    </section>
  );
}
