import React from 'react';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';

const Projects = () => {

  const { ref, inView } = useInView({
    threshold: 0
  });

  return (
    <div className={`${inView ? 'transition-opacity' : 'opacity-0'} max-w-[80%] min-w-[40rem] m-auto justify-center duration-[2000ms] overflow-hidden flex-row`} ref={ref}>
      <h1 className="text-center text-5xl landscape:max-lg:text-3xl text-rose-800 p-4 my-2">Projects</h1>
      <ProjectCard />
      <h3 className="text-center text-amber-200 text-2xl landscape:max-lg:text-xl text-white p-4 my-2">Browse projects by scrolling to the side</h3>
    </div>
  );
};

export default Projects;