import React from 'react';
import './Dashboard.scss';
import './App.scss'
import plane from './svg/plane.svg'

function Dashboard() {
  return (
    <div>
        <div className="row mr-0">
            <div className="four columns bg-color-blue-darker u-pull-left p-1-5 tabs"><img src={plane} className="icons mr-1" />Fight</div>
            <div className="four columns bg-color-blue-lighter u-pull-left p-1-5 tabs">Hotel</div>
            <div className="four columns bg-color-blue-lighter u-pull-left p-1-5 tabs">Rental car</div>
        </div>
        <div className="dashboard bg-color-blue-darker">
            <div className="ml-1 p-1-5">
                <button className="button-primary mr-3">Roundtrip</button>
                <button className="mr-3">One-way</button>
                <button className="">Multi-City</button>
            </div>
            <div class="row p-1-5">
                <input class="u-full-width" type="email" placeholder="test@mailbox.com" id="exampleEmailInput"></input>
            </div>
        </div>
    </div>
  );
}

export default Dashboard;
