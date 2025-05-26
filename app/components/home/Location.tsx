"use client";
import { Gliker } from "@/app/fonts/gliker";
import {
  AdvancedMarker,
  APIProvider,
  Map,
  Pin,
} from "@vis.gl/react-google-maps";
import { Building, Building2, MapPin } from "lucide-react";
import React from "react";

const Location = () => {
  const position = { lat: 50.2505836, lng: 19.0834962 };

  return (
    <section className="h-screen py-8 sm:py-16">
      <div className=" h-[90vh] bg-backgroundsecondary sm:max-h-screen rounded-4xl text-primary font-bold p-6 sm:p-12 ">
        <h1
          className={`text-3xl sm:text-5xl ${Gliker.className} text-primary font-bold pb-10 sm:pb-20`}
        >
          MIEJSCE WYDARZENIA
        </h1>
        <div className="flex flex-col sm:grid grid-cols-2 gap-10 h-full sm:h-2/3">
          <div className="bg-white h-1/3 sm:h-[50vh]  rounded-xl p-6 sm:p-12 flex flex-col gap-2 sm:gap-12">
            {" "}
            <h2 className="text-sm sm:text-2xl">Galeria Szyb Wilson</h2>
            <div className="flex flex-col  sm:gap-4">
              <div className="flex flex-row items-center justify-start ">
                <div className="w-10 h-10 flex flex-col items-start justify-center">
                  <Building />
                </div>
                <p className="text-sm sm:text-lg">Sala</p>
              </div>
              <div className="flex flex-row items-center justify-start ">
                <div className="w-10 h-10 flex flex-col items-start justify-center">
                  <MapPin />
                </div>

                <p className="text-sm sm:text-lg">ul. Jakas tam</p>
              </div>
              <div className="flex flex-row items-center justify-start ">
                <div className="w-10 h-10 flex flex-col items-start justify-center">
                  <Building2 />
                </div>

                <p className="text-sm sm:text-lg">40-000 Katowice</p>
              </div>
            </div>
          </div>
          <div className=" h-2/5 sm:h-[50vh] rounded-xl overflow-hidden">
            <APIProvider
              apiKey={`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
            >
              <Map
                zoom={15}
                center={position}
                mapId={`${process.env.NEXT_PUBLIC_MAP_ID}`}
              >
                {" "}
                <AdvancedMarker position={position}>
                  <Pin />
                </AdvancedMarker>
              </Map>
            </APIProvider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
