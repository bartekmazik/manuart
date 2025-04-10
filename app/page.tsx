"use client";
import { useRef, useEffect } from "react";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Organisators from "./components/home/Organisators";
import PartnersCarousel from "./components/home/PartnersCarousel";

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        }
      },
      {
        root: null,
        threshold: 0.8, // how much of hero is out of view needed to scroll
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div>
        <Organisators />
      </div>
      <div>
        <PartnersCarousel />
      </div>
    </div>
  );
}
