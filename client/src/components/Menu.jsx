import React from 'react';

const Menu = () => {
  return (
    <div className="w-72 h-screen fixed z-10 bg-rose-800 top-0 right-0 flex flex-col justify-center items-center">
      <ul className="">
        <li className="text-white underline">Home</li>
        <li className="text-white underline">About</li>
        <li className="text-white underline">Projects</li>
        <li className="text-white underline">Contact</li>
      </ul>
    </div>
  );
};

export default Menu;