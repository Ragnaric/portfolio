import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {

  return (
    <div className="flex-col">
      <Navigation />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;