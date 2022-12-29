import React from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {

  const icons = [
    'JavaScript-logo.png', 'HTML-logo.webp', 'CSS-logo.webp', 'React-icon.png',
    'Tailwindcss-logo.png', 'PostgreSQL-icon.png', 'Firebase-logo.png',
    'AWS-logo.jpeg', 'MongoDB-logo.png', 'Git-logo.png'
  ];

  const { ref, inView } = useInView({
    threshold: 0
  });

  return (
    <div className={`${inView ? 'transition-opacity' : 'opacity-0'} max-w-[80%] m-auto justify-center duration-[2000ms]`} ref={ref}>
      <h1 className="text-center text-5xl md:max-lg:text-3xl text-rose-800 p-4 m-2">About Me</h1>
      <p className="text-white text-2xl md:max-lg:text-sm p-4 text-justify">Analytical, collaborative, and driven full-stack software engineer with a passion for bringing the best user experience to the web. I enjoy working on projects with an emphasis on front-end design, but also well-equipped to handle the back-end. Leadership, professionalism, effective communication, and problem-solving are some of the skills that I have cultivated throughout my past work experience as a practicing physician and translator. I am a philosophy enthusiast, and enjoy discussing all manner of thought experiments and ideas. In my younger years I played chess competitively, but I haven't played ever since I completed medical school. These days I indulge in playing videogames, card games, and board games that have an emphasis on strategy and tactical elements.</p>
      <p className="text-amber-200 text-2xl md:max-lg:text-sm p-4 text-center">I am working or have worked with the following languages or tech to varying degrees:</p>
      <div className="flex-row flex-wrap space-x-4 w-full m-auto justify-center text-center">
        {icons.map((icon, key) =>
          <img key={key} src={`./assets/${icon}`} alt={`${icon}`} className="inline max-h-12"></img>
        )}
      </div>
    </div>
  );
};

export default About;