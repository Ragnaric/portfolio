import React from 'react';
import { useInView } from 'react-intersection-observer';

const Header = () => {

  const { ref, inView } = useInView({
    threshold: 0
  })

  return (
    <div className={`${inView ? 'transition-opacity' : 'opacity-0'} flex-col m-auto w-1/2 text-center py-48 duration-[2000ms]`} ref={ref}>
      <div className="container py-24">
        <img src="./assets/Myself.jpg" alt="Headshot of Jonathan Navarrete" className="rounded-full m-auto min-w-[300px] max-h-[300px] shadow-circle shadow-amber-100 object-cover object-bottom"></img>
        <div className="pt-12 pb-2 text-[4vw] text-white text-shadow-md">Jonathan Navarrete</div>
        <div className="p-2 text-[3vw] text-white text-shadow-md">Software Engineer</div>
      </div>
    </div>
  );
};

export default Header;