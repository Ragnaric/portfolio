import React from 'react';

const ProjectCard = () => {
  return (
    <>
      <div className="flex-row flex-wrap m-auto w-11/12 justify-center overflow-hidden space-x-48">
        <div className="inline-flex flex-col p-2 m-2 whitespace-wrap break-normal w-1/3 relative bottom-72 ml-24">
          <div className="text-white text-center text-3xl mb-12 underline">Atelier</div>
          <div className="text-white text-xl">Project Atelier is a front-end business app for online retail. It was designed with simplicity and visual appeal in mind. The sleek, straight-forward, and user-friendly design of the website allows for easy and satisfying browsing. I worked specifically on the Related Products and Outfit Creation components, as well as the search functionality.</div>
        </div>
        <div className="inline-flex p-2 m-2 text-white">
          <img src="https://user-images.githubusercontent.com/107650573/205542443-b2b08172-8667-414a-97e3-4eb2c4d222eb.gif"></img>
        </div>
      </div>
      <div className="flex-row flex-wrap m-auto w-11/12 justify-center overflow-hidden space-x-48">
        <div className="inline-flex flex-col p-2 m-2 whitespace-wrap break-normal w-1/3 relative bottom-72 ml-24">
          <div className="text-white text-center text-3xl mb-12 underline">Mine's Yours</div>
          <div className="text-white text-xl">A barter marketplace platform to build community, reduce waste, and make it easier to help others. It was created as a final team project for Hack Reactor. I was personally responsible for the back-end, including queries and pagination.</div>
        </div>
        <div className="inline-flex p-2 m-2">
          <img src="https://user-images.githubusercontent.com/110439416/205742996-1f58093e-d50a-4c6e-81a4-fe5b6b5f7f96.gif"></img>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;