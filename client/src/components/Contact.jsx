import React from 'react';

const Contact = () => {
  return (
    <div className="w-7/12 m-auto pt-24 mt-24 justify-center">
      <div className="text-center text-white text-5xl p-4 m-2">Contact</div>
      <div className="text-center text-white text-2xl p-4 m-2">Contact me on LinkedIn or send me an email. You should also check out my GitHub.</div>
      <div className="flex-row text-center space-x-12 pb-12 mb-12">
        <i className="fa-brands fa-linkedin fa-3x text-white hover:text-rose-800 cursor-pointer" onClick={() => {
          window.open('https://www.linkedin.com/in/jonathan-navarrete');
        }}></i>
        <i className="fa-regular fa-envelope fa-3x text-white hover:text-rose-800 cursor-pointer" onClick={() => {
          window.open('mailto:jonathan3navarrete@gmail.com');
        }}></i>
        <i className="fa-brands fa-github fa-3x text-white hover:text-rose-800 cursor-pointer" onClick={() => {
          window.open('https://github.com/Ragnaric');
        }}></i>
      </div>
    </div>
  );
};

export default Contact;