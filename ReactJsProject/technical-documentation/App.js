import React from 'react';
import './App.css';
import Component1 from './components/Component1';
import Component2 from './components/Component2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Technical Documentation</h1>
      </header>
      <main>
        <section>
          <h2>Component1</h2>
          <p>This is a component that does something useful.</p>
          <Component1 />
        </section>
        <section>
          <h2>Component2</h2>
          <p>This is another component that does something else useful.</p>
          <Component2 />
        </section>
      </main>
    </div>
  );
}

export default App;
