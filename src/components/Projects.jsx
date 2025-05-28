import React from "react";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl" id="projects">
        Projects
      </h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex gap-0 md:gap-4 flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <a href={project.githubPage} target="_blank">
                <img
                  src={project.image}
                  // width={250}
                  // height={300}
                  alt={project.title}
                  className="mb-6 rounded place-self-center"
                />
              </a>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <a href={project.githubPage} target="_blank">
                <h3 className="mb-2 font-semibold text-2xl place-self-center">{project.title}</h3>
              </a>
              <p className="mb-4 text-stone-400 text-justify">{project.description}</p>
              <p className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    className="rounded bg-stone-900 p-2 text-center text-sm font-medium text-stone-300"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
