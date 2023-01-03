import React from 'react';
import { useInView } from 'react-intersection-observer';

const Contact = () => {

  const { ref, inView } = useInView({
    threshold: 0
  });

  return (
    <div className={`${inView ? 'transition-opacity' : 'opacity-0'} w-7/12 m-auto justify-center duration-[2000ms] min-w-[40rem]`} ref={ref}>
      <div className="text-center text-rose-800 text-5xl landscape:max-lg:text-3xl p-4 m-2">Contact</div>
      <div className="text-center text-white text-2xl landscape:max-lg:text-base p-4 m-2">Contact me on LinkedIn or send me an email. You should also check out my GitHub.</div>
      <div className="flex-row text-center space-x-12 pb-12 mb-12">
        <i className="fa-brands fa-linkedin text-5xl text-white hover:text-rose-800 cursor-pointer" onClick={() => {
          window.open('https://www.linkedin.com/in/jonathan-navarrete');
        }}></i>
        <i className="fa-regular fa-envelope text-5xl text-white hover:text-rose-800 cursor-pointer" onClick={() => {
          window.open('mailto:jonathan3navarrete@gmail.com');
        }}></i>
        <i className="fa-brands fa-github text-5xl text-white hover:text-rose-800 cursor-pointer" onClick={() => {
          window.open('https://github.com/Ragnaric');
        }}></i>
      </div>
    </div>
  );
};

export default Contact;