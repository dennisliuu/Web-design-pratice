import React from 'react';
import safari from './safari.svg';
import './App.scss';
import Dashboard from './Dashboard';
import Tables from './Tables';
import Checkin from './Checkin';

function App() {
  return (
    <div className="row">
      <div className="two columns">
        <div className="rotate_-90 logo">
          Travel. <img src={safari} className="App-logo ml-0-5 rotate_90 mb-0-3" alt="logo" />
        </div>
        <div className="rotate_-90 social">
          <span className="mr-5">Facebook</span>
          <span className="mr-5">Instagram</span>
        </div>
      </div>
      <div className="ten columns ml-0">
        <div className="row">
          <div className="five columns">
            <Dashboard />
            <Checkin />
          </div>
          <div className="seven columns">
            <div className="u-pull-right mt-3 mr-3">
              <ul className="navbar-list">
                <li className="navbar-item mr-3"><a className="navbar-link">Check-in</a></li>
                <li className="navbar-item mr-3"><a className="navbar-link">Flight Status</a></li>
                <li className="navbar-item mr-3"><a className="navbar-link text-color-black">Menu</a></li>
                <li className="navbar-item"><a className="navbar-link text-color-black">| |</a></li>
              </ul>
            </div>
            <Tables />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
