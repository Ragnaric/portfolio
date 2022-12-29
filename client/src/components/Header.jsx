import React from 'react';
import { useInView } from 'react-intersection-observer';

const Header = () => {

  const { ref, inView } = useInView({
    threshold: 0
  })

  return (
    <div className={`${inView ? 'transition-opacity' : 'opacity-0'} flex flex-col m-auto text-center py-12 duration-[2000ms]`} ref={ref}>
      <div className="container">
        <img src="./assets/Myself.jpg" alt="Headshot of Jonathan Navarrete" className="rounded-full m-auto min-w-[30em] max-h-[30em] md:max-lg:min-w-[10em] md:max-lg:max-h-[10em] shadow-circle shadow-amber-100 object-cover object-bottom"></img>
        <div className="pt-12 pb-2 text-5xl landscape:text-3xl text-white text-shadow-md">Jonathan Navarrete</div>
        <div className="p-2 text-4xl landscape:text-2xl text-white text-shadow-md">Software Engineer</div>
      </div>
    </div>
  );
};

export default Header;