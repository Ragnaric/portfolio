import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className="pt-48 mt-48 flex-col space-y-2 justify-center">
      <h1 className="w-1/2 m-auto text-white text-center text-5xl p-4 my-12">Projects</h1>
      <ProjectCard />
    </div>
  );
};

export default Projects;