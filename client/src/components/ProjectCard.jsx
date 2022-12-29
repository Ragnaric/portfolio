import React from 'react';
import { useInView } from 'react-intersection-observer';

const ProjectCard = () => {

  const { ref: Atelier, inView: AtelierVis } = useInView({
    threshold: 0
  });

  const { ref: MinesYours, inView: MinesVis } = useInView({
    threshold: 0
  });

  return (
    <div className="overflow-hidden">
      <div className={`${AtelierVis ? 'transition-opacity' : 'opacity-0'} flex flex-row flex-wrap min-w-1/2 justify-center duration-[2000ms]`} ref={Atelier}>
        <div className="inline-flex flex-col max-w-7/12 p-2 m-2 whitespace-wrap break-normal items-center">
          <div className="text-white decoration-8 decoration-rose-800 text-center text-4xl md:max-lg:text-2xl mb-12 underline">Atelier</div>
          <div className="text-white text-2xl md:max-lg:text-sm text-justify">Project Atelier is a front-end business app for online retail. It was designed with simplicity and visual appeal in mind. The sleek, straight-forward, and user-friendly design of the website allows for easy and satisfying browsing. I worked specifically on the Related Products and Outfit Creation components, as well as the search functionality.</div>
        </div>
        <div className="inline-flex p-2 m-2 md:max-lg:hidden">
          <img src="https://user-images.githubusercontent.com/107650573/205542443-b2b08172-8667-414a-97e3-4eb2c4d222eb.gif"></img>
        </div>
      </div>
      <div className={`${MinesVis ? 'transition-opacity' : 'opacity-0'} flex flex-row flex-wrap w-full justify-center overflow-hidden duration-[2000ms]`} ref={MinesYours}>
        <div className="inline-flex flex-col max-w-7/12 p-2 m-2 whitespace-wrap break-normal items-center">
          <div className="text-white decoration-8 decoration-rose-800 text-center text-4xl md:max-lg:text-2xl mb-12 underline">Mine's Yours</div>
          <div className="text-white text-2xl md:max-lg:text-sm text-justify">A barter marketplace platform to build community, reduce waste, and make it easier to help others. It was created as a final team project for Hack Reactor. I was personally responsible for the back-end, including queries and pagination.</div>
        </div>
        <div className="inline-flex p-2 m-2 md:max-lg:hidden">
          <img src="https://user-images.githubusercontent.com/110439416/205742996-1f58093e-d50a-4c6e-81a4-fe5b6b5f7f96.gif"></img>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;