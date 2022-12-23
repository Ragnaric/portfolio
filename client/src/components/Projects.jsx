import React from 'react';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';

const Projects = () => {

  const { ref, inView } = useInView({
    threshold: 0
  });

  return (
    <div className={`${inView ? 'transition-opacity' : 'opacity-0'} pt-24 mt-24 flex-col space-y-8 justify-center duration-[2000ms]`} ref={ref}>
      <h1 className="w-1/2 m-auto text-rose-800 text-center text-5xl p-2 my-2">Projects</h1>
      <ProjectCard />
    </div>
  );
};

export default Projects;