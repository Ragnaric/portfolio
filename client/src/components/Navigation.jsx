/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Navigation = ({about, projects, contact}) => {

  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="flex w-full fixed z-10 py-2.5 border-b bg-rose-800 leading-10 h-20">
      <div className="container flex flex-row space-x-12 m-auto w-11/12 relative text-center items-center">
        <div className="inline-flex text-white text-3xl absolute left-0 lg:bottom-0">Jonathan Navarrete</div>
        <div className="lg:container lg:flex-row lg:space-x-12 lg:m-auto lg:w-11/12 lg:text-center">
          <div className="hidden lg:inline-flex lg:text-white lg:text-xl lg:hover:text-black lg:hover:cursor-pointer" onClick={() => {
            window.scrollTo({top: 0, behavior: 'smooth'});
          }}>Home</div>
          <div className="hidden lg:inline-flex lg:text-white lg:text-xl lg:hover:text-black lg:hover:cursor-pointer" onClick={() => {
            about.current.scrollIntoView({behavior: 'smooth', block: 'center'});
          }}>About</div>
          <div className="hidden lg:inline-flex lg:text-white lg:text-xl lg:hover:text-black lg:hover:cursor-pointer" onClick={() => {
            projects.current.scrollIntoView({behavior: 'smooth', block: 'start'});
          }}>Projects</div>
          <div className="hidden lg:inline-flex lg:text-white lg:text-xl lg:hover:text-black lg:hover:cursor-pointer" onClick={() => {
            contact.current.scrollIntoView({behavior: 'smooth', block: 'center'});
          }}>Contact</div>
        </div>
        <div className="hidden lg:inline-flex lg:text-white lg:text-3xl lg:absolute lg:right-0 lg:bottom-0 lg:hover:text-black lg:hover:cursor-pointer" onClick={() => {
          window.open('./assets/Jonathan Navarrete Résumé.docx.pdf');
        }}>Resume</div>
        <div className="flex w-8 h-6 inline-flex flex-col space-y-2 text-white text-3xl absolute right-0 lg:hidden" onClick={() => {
          setIsActive(!isActive);
        }}>
          <span className="w-full h-1 bg-white"></span>
          <span className={`${!isActive ? 'w-full h-1 bg-white' : ''}`}></span>
          <span className="w-full h-1 bg-white"></span>
        </div>
      </div>
    </nav>

  );
};

export default Navigation;