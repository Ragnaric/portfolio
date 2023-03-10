/* eslint-disable react/prop-types */
import React from 'react';

const Navigation = ({home, about, projects, contact, menuOpen, setMenuOpen}) => {

  return (
    <nav className="flex w-full min-w-[30rem] fixed z-20 py-2.5 border-b bg-rose-800 leading-10 h-20 landscape:max-lg:h-10 lg:min-h-10 overflow:hidden">
      <div className="container flex flex-row m-auto w-11/12 relative text-center items-center overflow:hidden">
        <div className="inline-flex text-white text-3xl landscape:max-lg:text-base absolute left-0 lg:hover:text-black lg:hover:cursor-pointer" onClick={() => {
          window.open('./assets/Jonathan Navarrete Résumé.docx.pdf');
        }}>Resume</div>
        <div className="lg:container lg:flex-row lg:space-x-12 lg:m-auto lg:w-11/12 lg:text-center">
          <div className="hidden lg:inline-flex lg:text-white lg:text-xl lg:hover:text-black lg:hover:cursor-pointer" onClick={() => {
            home.current.scrollIntoView({behavior: 'smooth', block: 'center'});
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
        <div className="flex w-8 h-6 landscape:w-3.5 landscape:h-3 inline-flex flex-col space-y-2.5 landscape:space-y-1 absolute right-0 lg:hidden" onClick={() => {
          setMenuOpen(!menuOpen);
        }}>
          <span className={`${!menuOpen ? '' : 'rotate-45 landscape:rotate-45'} w-full h-1 bg-white origin-left duration-[1250ms]`}></span>
          <span className={`${!menuOpen ? 'w-full h-1 bg-white' : 'opacity-0'} duration-[1500ms]`}></span>
          <span className={`${!menuOpen ? '' : '-rotate-45 landscape:-rotate-45'} w-full h-1 bg-white origin-left duration-[1250ms]`}></span>
        </div>
      </div>
    </nav>

  );
};

export default Navigation;