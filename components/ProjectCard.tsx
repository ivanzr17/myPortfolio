"use client";

import Image from "next/image";
import React from "react";
import { BackgroundGradient } from "./BackgroundGradient";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <BackgroundGradient>
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <Image
          src={src}
          alt={title}
          width={750}
          height={750}
          className="w-full object-contain"
        />
        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </div>
    </BackgroundGradient>
  );
};

export default ProjectCard;
