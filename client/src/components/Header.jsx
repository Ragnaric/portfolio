import React from 'react';

const Header = () => {
  return (
    <div className="mt-24 flex-col m-auto w-1/2 text-center pb-12">
      <div className="container py-24">
        <img src="./assets/Myself.jpg" alt="Headshot of Jonathan Navarrete" className="rounded-full h-96 m-auto w-1/2 shadow-circle shadow-amber-100 object-cover object-bottom"></img>
        <div className="pt-12 pb-2 text-5xl text-white text-shadow-md">Jonathan Navarrete</div>
        <div className="p-2 text-3xl text-white text-shadow-md">Software Engineer</div>
      </div>
    </div>
  );
};

export default Header;