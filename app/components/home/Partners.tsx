"use client";

import Image from "next/image";
import React from "react";
import { Gliker } from "@/app/fonts/gliker";
import { AnimatePresence, motion } from "framer-motion";
// import { promises as fs } from "fs";
import { PartnerType } from "@/app/utils/partners";

// async function getPartners() {
//   const file = await fs.readFile(process.cwd() + "/app/partners.json", "utf8");
//   const data: PartnerType[] = JSON.parse(file);
//   return data;
// }

export default function Partners({ data }: { data: PartnerType[] }) {
  // const [data, setData] = useState<PartnerType[]>([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const partners = await getPartners();
  //     setData(partners);
  //   }
  //   fetchData();
  // }, []);

  return (
    <AnimatePresence>
      <motion.section
        className=" min-h-screen  overflow-hidden py-8 sm:py-16"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="relative p-8 min-h-[90vh] bg-background rounded-4xl w-full gap-8 flex flex-col justify-start items-start">
          <h1
            className={`${Gliker.className} font-bold text-3xl sm:text-5xl  text-primary sm:mb-8`}
          >
            PARTNERZY STRATEGICZNI
          </h1>
          <div className="w-full h-full bg-white p-6 rounded-xl flex flex-col sm:flex-row gap-12 items-center justify-center">
            {data
              .filter((partner) => partner.isStrategicPartner === true)
              .map((partner, index) => (
                <div
                  key={index}
                  className="relative w-48 h-48 sm:w-48 sm:h-48 flex items-center justify-center bg-white p-4 rounded-xl"
                >
                  <Image
                    src={partner.imageUrl}
                    alt={partner.imageAlt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100px, 192px"
                  />
                </div>
              ))}
          </div>
          <h1
            className={`${Gliker.className} font-bold  text-3xl sm:text-5xl  text-primary mb-8`}
          >
            PARTNERZY WYDARZENIA
          </h1>
          <div className="w-full  h-full bg-white p-6 rounded-xl flex flex-col sm:flex-row items-center justify-center">
            {data
              .filter((partner) => partner.isStrategicPartner === false)
              .map((partner, index) => (
                <div
                  key={index}
                  className="relative w-48 h-48 sm:w-48 sm:h-48 flex items-center justify-center bg-white p-4 rounded-xl"
                >
                  <Image
                    src={partner.imageUrl}
                    alt={partner.imageAlt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100px, 192px"
                  />
                </div>
              ))}
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
