import React, { useRef } from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Menu from './components/Menu';

const App = () => {

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="flex-col snap-y snap-mandatory overflow-scroll h-screen">
      <Navigation about={aboutRef} projects={projectsRef} contact={contactRef} />
      <div ref={aboutRef} className="flex snap-center h-screen">
        <Header />
      </div>
      <Menu />
      <div ref={aboutRef} className="flex snap-center h-screen">
        <About />
      </div>
      <div ref={projectsRef} className="flex snap-center h-screen">
        <Projects />
      </div>
      <div ref={contactRef} className="flex snap-center h-screen">
        <Contact />
      </div>
    </div>
  );
};

export default App;