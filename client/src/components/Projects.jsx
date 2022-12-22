import React from 'react';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';

const Projects = () => {

  const { ref, inView } = useInView({
    threshold: 0
  });

  return (
    <div className={`${inView ? 'transition-opacity' : 'opacity-0'} pt-48 mt-48 flex-col space-y-2 justify-center duration-[2000ms]`} ref={ref}>
      <h1 className="w-1/2 m-auto text-white text-center text-5xl p-4 my-12">Projects</h1>
      <ProjectCard />
    </div>
  );
};

export default Projects;