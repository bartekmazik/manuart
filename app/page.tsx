import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Location from "./components/home/Location";

import Partners from "./components/home/Partners";
import Zones from "./components/home/Zones";
import Footer from "./components/Footer";
import { PartnerType } from "./utils/partners";
import { promises as fs } from "fs";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/app/partners.json", "utf8");
  const data: PartnerType[] = JSON.parse(file);
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
        <Partners data={data} />
      </div>
      <div className="snap-end">
        <Footer />
      </div>
    </div>
  );
}
