import React from "react";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <div id="home" className="relative flex h-full w-full flex-col">
      <video
        autoPlay
        muted
        loop
        className="xs:top-[-300px] ] xm:top-[-200px] absolute left-0 top-[-320px] z-[1] h-full w-full rotate-180 object-cover sm:top-[-260px] md:top-[-300px] lg:top-[-300px] xl:top-[-340px] 2xl:object-contain"
      >
        <source src="/blackhole.webm" typeof="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
