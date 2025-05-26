"use client";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Location from "./components/home/Location";

import Partners from "./components/home/Partners";
import Zones from "./components/home/Zones";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll sm:snap-y sm:snap-mandatory scroll-smooth no-scrollbar">
      {/*snap-y snap-mandatory no-scrollbar*/}
      <div className="snap-end">
        <Hero />
      </div>
      <div className="snap-end">
        <About />
      </div>
      <div className="snap-end">
        <Location />
      </div>
      <div className="snap-end">
        <Zones />
      </div>
      <div className="snap-end">
        <Partners />
      </div>
      <div className="snap-end">
        <Footer />
      </div>
    </div>
  );
}
