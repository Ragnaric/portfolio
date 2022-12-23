import React from 'react';

const Navigation = ({about, projects, contact}) => {
  return (
    <nav className="w-full fixed z-10 py-2.5 border-b bg-rose-800 leading-10 h-20">
      <div className="container flex-row space-x-12 m-auto w-11/12 relative text-center">
        <div className="hidden lg:inline-flex lg:absolute lg:text-white lg:left-0 lg:bottom-0 lg:text-3xl">Jonathan Navarrete</div>
        <div className="container flex-row space-x-12 m-auto w-11/12 text-center">
          <div className="inline-flex text-white text-3xl hover:text-black hover:cursor-pointer" onClick={() => {
            window.scrollTo({top: 0, behavior: 'smooth'});
          }}>Home</div>
          <div className="inline-flex text-white text-3xl hover:text-black hover:cursor-pointer" onClick={() => {
            about.current.scrollIntoView({behavior: 'smooth', block: 'center'});
          }}>About</div>
          <div className="inline-flex text-white text-3xl hover:text-black hover:cursor-pointer" onClick={() => {
            projects.current.scrollIntoView({behavior: 'smooth', block: 'start'});
          }}>Projects</div>
          <div className="inline-flex text-white text-3xl hover:text-black hover:cursor-pointer" onClick={() => {
            contact.current.scrollIntoView({behavior: 'smooth', block: 'center'});
          }}>Contact</div>
        </div>
        <div className="inline-flex absolute text-white text-3xl right-0 bottom-0 hover:text-black hover:cursor-pointer hidden" onClick={() => {
          window.open('./assets/Jonathan Navarrete Résumé.docx.pdf');
        }}>Resume</div>
      </div>
    </nav>

  );
};

export default Navigation;