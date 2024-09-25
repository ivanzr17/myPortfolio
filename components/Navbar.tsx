import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-50 h-[65px] w-full bg-[#03001417] px-2 py-10 shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md md:px-5 md:py-0">
      <div className="flex h-full w-full flex-row items-center justify-between px-[10px] md:justify-between">
        <a href="/" className="flex h-auto w-auto flex-row items-center">
          <span className="ml-[10px] hidden font-bold text-gray-300 lg:block">
            Ivanzr Dev
          </span>
        </a>

        <div className="flex h-full w-full flex-row items-center justify-between md:w-[500px]">
          <div className="mr-[15px] flex h-auto w-full items-center justify-between rounded-full border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] text-gray-200">
            <a href="#home" className="cursor-pointer">
              Home
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Proyectos
            </a>
          </div>
        </div>

        <div className="mr-5 flex flex-row gap-2 md:mr-0">
          <a href="https://github.com/ivanzr17" target="_blank">
            <Image src="/github.png" width={32} height={32} alt="Github" />
          </a>
          <a
            href="https://www.linkedin.com/in/ivanzafrarendal/"
            target="_blank"
          >
            <Image src="/linkedin.png" width={32} height={32} alt="Github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
