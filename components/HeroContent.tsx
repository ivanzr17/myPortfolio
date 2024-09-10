"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../utils/motion";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="z-[20] mt-40 flex w-full flex-row items-center justify-center px-10 md:px-20"
    >
      <div className="m-auto flex h-full w-full flex-col justify-center gap-5 text-start">
        <motion.div
          variants={slideInFromLeft(0.1)}
          className="mt-[70px] flex h-auto w-auto max-w-[600px] flex-col gap-6 pt-10 text-6xl font-bold text-white"
        >
          <span>
            Ofreciendo
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              las mejores{" "}
            </span>
            soluciones
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.3)}
          className="my-5 max-w-[600px] text-lg text-gray-400"
        >
          Buenas👋!! Me llamo Iván y soy desarrollador full stack residente en
          Barcelona, aquí podrás encontrar mis habilidades y proyectos.
        </motion.p>

        <motion.a
          variants={slideInFromLeft(0.5)}
          href="/IvanZafraRendalResume.pdf"
          target="_blank"
          className="button-primary max-w-[200px] cursor-pointer rounded-lg py-2 text-center text-white"
        >
          Ver CV
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.3)}
        className="hidden h-full w-full items-center justify-center md:flex"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
