/* eslint-disable react/prop-types */
import React from 'react';

const Menu = ({menuOpen, home, about, projects, contact}) => {

  return (
    <div className={`${!menuOpen ? '-top-1/3 md:-top-full' : 'top-0'} w-80 h-1/3 md:h-full fixed z-10 bg-rose-800 right-0 flex flex-col justify-center items-center duration-[1250ms] lg:hidden`}>
      <ul className="flex flex-col space-y-6">
        <li className="text-white text-3xl" onClick={() => {
          home.current.scrollIntoView({behavior: 'smooth', block: 'start'});
        }}>Home</li>
        <li className="text-white text-3xl" onClick={() => {
          about.current.scrollIntoView({behavior: 'smooth', block: 'start'});
        }}>About</li>
        <li className="text-white text-3xl" onClick={() => {
          projects.current.scrollIntoView({behavior: 'smooth', block: 'start'});
        }}>Projects</li>
        <li className="text-white text-3xl" onClick={() => {
          contact.current.scrollIntoView({behavior: 'smooth', block: 'start'});
        }}>Contact</li>
      </ul>
    </div>
  );
};

export default Menu;