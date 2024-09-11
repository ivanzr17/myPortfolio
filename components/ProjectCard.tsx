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
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <Image
            src={src}
            alt={title}
            width={750}
            height={750}
            className="w-full object-contain rounded-3xl"
          />
        </div>
      </BackgroundGradient>
      <div className="relative p-4 z-50">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <a
          className="mt-4 inline-block text-blue-400 hover:text-blue-500"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver proyecto
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
