import React from 'react';
import './Dashboard.scss';
import './App.scss'

function Dashboard() {
  return (
    <div>
        <div className="row mr-0">
            <div className="four columns bg-color-blue-darker u-pull-left p-1-5 tabs">Fight</div>
            <div className="four columns bg-color-blue-lighter u-pull-left p-1-5 tabs">Hotel</div>
            <div className="four columns bg-color-blue-lighter u-pull-left p-1-5 tabs">Rental car</div>
        </div>
        <div className="dashboard bg-color-blue-darker">
            <div className="ml-1 p-1-5">
                <button className="button-primary mr-3">Roundtrip</button>
                <button className="mr-3">One-way</button>
                <button className="">Multi-City</button>
            </div>
        </div>
    </div>
  );
}

export default Dashboard;
