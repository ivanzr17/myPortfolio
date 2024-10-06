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
          description="Los usuarios pueden crear rutas utilizando la API de Google Maps, agregar imágenes de los lugares visitados y compartir sus itinerarios con otros. También pueden buscar itinerarios de otros usuarios y ver perfiles, fomentando el intercambio de experiencias y la exploración de nuevas rutas."
          link="https://github.com/ivanzr17/Sharetrips-Beta/blob/main/README.md"
        />
        <ProjectCard
          src="/letcolabodev.jpg"
          title="Let colabodev"
          description="Web dedicada a la colaboración entre nuevos desarrolladores para mejorar tanto skills técnicas como trabajo en equipo"
          link="https://letcolabodev.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
