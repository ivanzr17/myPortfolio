import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center pb-20"
      id="projects"
    >
      <h1 className="mb-20 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-[40px] font-semibold text-transparent">
        Mis proyectos
      </h1>
      <div className="flex h-full w-full flex-col items-center justify-center gap-10 px-10 md:flex-row">
        <ProjectCard
          src="/ShareTrips.png"
          title="Share Trips"
          description="Proyecto en grupo para crear y compartir tus rutas de viaje."
        />
      </div>
    </div>
  );
};

export default Projects;
