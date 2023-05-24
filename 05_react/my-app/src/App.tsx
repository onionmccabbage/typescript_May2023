import React from 'react';
import logo from './logo.svg';
import './App.css';

const doStuff = (x:number):string=>{
  return `${x}`
}

function App() {
  return (
    <div className="App">
      <article>
        <nav><a href='bbc.co.uk'>BBC</a></nav>
        <section>
          <h2>Welcome</h2>
          <pre>{doStuff(3)}</pre>
        </section>
      </article>
    </div>
  );
}

export default App;
