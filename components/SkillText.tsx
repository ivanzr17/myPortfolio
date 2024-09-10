"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

const SkillText = () => {
  return (
    <div className="flex h-auto w-full flex-col items-center justify-center">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="mb-[15px] mt-[10px] text-center text-[30px] font-medium text-white"
      >
        Estas son las tecnologías que uso actualmente
      </motion.div>
    </div>
  );
};

export default SkillText;
