import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center pb-20"
      id="projects"
    >
      <h1 className="mb-20 text-white text-[40px] ">
        Aquí puedes ver algunos de{" "}
        <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text  font-semibold text-transparent">
          {" "}
          mis proyectos{" "}
        </span>
      </h1>
      <div className="flex h-full w-full flex-col items-center justify-center gap-10 px-10 md:flex-row">
        <ProjectCard
          src="/ShareTrips.png"
          title="Share Trips"
          description="Aplicación para crear y compartir rutas de viaje."
          link="https://github.com/ivanzr17/Sharetrips-Beta"
        />
        <ProjectCard
          src="/gatopicon.webp"
          title="Novice Devs"
          description="Web dedicada a la colaboración entre nuevos desarrolladores para mejorar tanto skills técnicas como trabajo en equipo"
          link="null"
        />
      </div>
    </div>
  );
};

export default Projects;
