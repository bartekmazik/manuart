"use client";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Organisators from "./components/home/Organisators";
import PartnersCarousel from "./components/home/PartnersCarousel";

export default function Home() {
  return (
    <div>
      {/*snap-y snap-mandatory no-scrollbar*/}
      <div>
        <Hero />
      </div>
      <div>
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
