import React, { useRef } from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="flex-col">
      <Navigation about={aboutRef} projects={projectsRef} contact={contactRef} />
      <Header />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default App;