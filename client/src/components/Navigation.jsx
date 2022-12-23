import React from 'react';

const Navigation = ({about, projects, contact}) => {
  return (
    <nav className="w-full fixed z-10 py-2.5 border-b bg-rose-800 top-0 leading-10">
      <div className="container flex-row space-x-12 m-auto w-11/12 relative text-center">
        <div className="inline-flex absolute text-white left-0 bottom-0 text-2xl">Jonathan Navarrete</div>
        <div className="container flex-row space-x-12 m-auto w-11/12 text-center">
          <div className="inline-flex text-white hover:text-black hover:cursor-pointer" onClick={() => {
            window.scrollTo({top: 0, behavior: 'smooth'});
          }}>Home</div>
          <div className="inline-flex text-white hover:text-black hover:cursor-pointer" onClick={() => {
            about.current.scrollIntoView({behavior: 'smooth', block: 'center'});
          }}>About</div>
          <div className="inline-flex text-white hover:text-black hover:cursor-pointer" onClick={() => {
            projects.current.scrollIntoView({behavior: 'smooth', block: 'start'});
          }}>Projects</div>
          <div className="inline-flex text-white hover:text-black hover:cursor-pointer" onClick={() => {
            contact.current.scrollIntoView({behavior: 'smooth', block: 'center'});
          }}>Contact</div>
        </div>
        <div className="inline-flex absolute text-white right-0 bottom-0 text-2xl hover:text-black hover:cursor-pointer" onClick={() => {
          window.open('./assets/Jonathan Navarrete Résumé.docx.pdf');
        }}>Resume</div>
      </div>
    </nav>

  );
};

export default Navigation;