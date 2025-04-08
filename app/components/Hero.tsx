import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full bg-backgroundsecondary h-[90vh] pt-6 rounded-4xl flex flex-row justify-between">
      <div className="border w-1/2"> </div>
      <div className="w-1/2 relative">
        <Image src="/heroguy.png" fill={true} alt="guy" objectFit="contain" />
      </div>
    </div>
  );
};

export default Hero;
