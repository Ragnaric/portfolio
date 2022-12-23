import React from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {

  const { ref, inView } = useInView({
    threshold: 0
  });

  return (
    <div className={`${inView ? 'transition-opacity' : 'opacity-0'} w-7/12 m-auto justify-center pt-12 mt-12 duration-[2000ms]`} ref={ref}>
      <h1 className="text-center text-5xl text-rose-800 p-4 m-2">About Me</h1>
      <p className="text-white text-xl p-4 text-justify">Analytical, collaborative, and driven full-stack software engineer with a passion for bringing the best user experience to the web. I enjoy working on projects with an emphasis on front-end design, but also well-equipped to handle the back-end. Leadership, professionalism, effective communication, and problem-solving are some of the skills that I have cultivated throughout my past work experience as a practicing physician and translator. I am a philosophy enthusiast, and enjoy discussing all manner of thought experiments and ideas. In my younger years I played chess competitively, but I haven't played ever since I completed medical school. These days I indulge in playing videogames, card games, and board games that have an emphasis on strategy and tactical elements.</p>
      <p className="text-amber-200 text-xl p-4 text-center">I am working or have worked with the following languages or tech to varying degrees:</p>
      <div className="flex-row flex-wrap space-x-4 w-full m-auto justify-center">
        <img src="./assets/JavaScript logo.png" alt="javascript-icon" className="inline h-16"></img>
        <img src="./assets/HTML logo.webp" alt="html-icon" className="inline h-20"></img>
        <img src="./assets/CSS logo.webp" alt="css-icon" className="inline h-20"></img>
        <img src="./assets/React icon.png" alt="react-logo" className="inline h-16"></img>
        <img src="./assets/Tailwindcss logo.png" alt="tailwindcss-icon" className="inline h-16"></img>
        <img src="./assets/PostgreSQL icon.png" alt="postgres-logo" className="inline h-16"></img>
        <img src="./assets/Firebase logo.png" alt="firebase-logo" className="inline h-16"></img>
        <img src="./assets/AWS logo.jpeg" alt="aws-logo" className="inline h-16"></img>
        <img src="./assets/MongoDB logo.png" alt="mongodb-logo" className="inline h-16 w-16"></img>
        <img src="./assets/Git logo.png" alt="git-logo" className="inline h-16"></img>
      </div>
    </div>
  );
};

export default About;