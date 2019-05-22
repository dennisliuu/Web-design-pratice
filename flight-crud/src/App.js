import React from 'react';
import safari from './safari.svg';
import './App.scss';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <div className="container">
        <div className="rotate_-90 logo">
          Travel. <img src={safari} className="App-logo ml-0-5 rotate_90 mb-0-3" alt="logo" />
        </div>
        <div className="rotate_-90 social">
          <span className="mr-5">Facebook</span>
          <span className="mr-5">Instagram</span>
        </div>
      </div>
    </div>
  );
}

export default App;
