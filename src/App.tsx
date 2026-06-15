import { useEffect } from "react";
import { gsap } from "gsap";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Authority } from "./components/Authority";
import { PracticeAreas } from "./components/PracticeAreas";
import { StorySection } from "./components/StorySection";
import { Method } from "./components/Method";
import { Region } from "./components/Region";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.18,
      easing: (time) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),
      lerp: 0.09,
      wheelMultiplier: 0.88,
      touchMultiplier: 1.15,
      anchors: {
        offset: -86,
      },
    });

    lenis.on("scroll", ScrollTrigger.update);

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
        const children = Array.from(group.children);
        gsap.fromTo(
          children,
          { autoAlpha: 0, y: 18 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: group,
              start: "top 82%",
            },
          },
        );
      });
    });

    document.fonts.ready.then(() => ScrollTrigger.refresh());

    return () => context.revert();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Authority />
        <PracticeAreas />
        <StorySection />
        <Method />
        <Region />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
