"use client";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Organisators from "./components/home/Organisators";
import PartnersCarousel from "./components/home/PartnersCarousel";

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory no-scrollbar">
      <div className="snap-start">
        <Hero />
      </div>
      <div className="snap-start">
        <About />
      </div>
      <div className="snap-start">
        <Organisators />
      </div>
      <div className="snap-start">
        <PartnersCarousel />
      </div>
    </div>
  );
}
