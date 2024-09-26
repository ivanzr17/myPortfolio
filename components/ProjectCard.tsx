"use client";

import Image from "next/image";
import React from "react";
import { BackgroundGradient } from "./BackgroundGradient";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <div className="flex-column">
      <BackgroundGradient className="">
        <div className="relative overflow-hidden rounded-lg shadow-lg w-[750px] h-[550px]">
          <Image
            src={src}
            alt={title}
            width={750}
            height={550}
            className="w-[750px] h-[550px] object- rounded-3xl"
          />
        </div>
      </BackgroundGradient>
      <div className="relative p-4 z-50 w-[750px] h-[550px]">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <a
          className={`mt-4 inline-block ${
            link === "null"
              ? "text-gray-400"
              : "text-blue-400 hover:text-blue-500"
          }`}
          href={link !== "null" ? link : undefined}
          target={link !== "null" ? "_blank" : undefined}
          rel={link !== "null" ? "noopener noreferrer" : undefined}
        >
          {link === "null" ? "Work in progress" : "Ver proyecto"}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
