import { Tech_Stack } from "@/constants";
import React from "react";
import SkillDataProvider from "./SkillDataProvider";
import SkillText from "./SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="relative flex h-full flex-col items-center justify-center gap-3 py-20 pb-80"
    >
      <SkillText />
      <div className="mt-4 flex flex-row flex-wrap items-center justify-around gap-5">
        {Tech_Stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="absolute z-[-10] flex h-full w-full items-center justify-center bg-cover opacity-30">
        <video
          className="h-auto w-full"
          preload="false"
          playsInline
          loop
          muted
          autoPlay
          src="/cards-video.webm"
        />
      </div>
    </section>
  );
};

export default Skills;
