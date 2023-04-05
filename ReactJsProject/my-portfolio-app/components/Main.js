import React from 'react';
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';


function Main() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default Main;
