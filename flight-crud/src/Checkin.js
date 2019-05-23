import React from 'react';
import './App.scss';

function Checkin() {
  return (
    <div className="mt-1-5">
      <h5><strong>Check-in / My booking</strong></h5>
        <form>
            <div className="row">
                <div className="six columns">
                    <input className="u-full-width" placeholder="Last name" type="text"></input>
                </div>
                <div className="six columns">
                    <input className="u-full-width" placeholder="First name" type="text"></input>
                </div>
            </div>
            <input value="Go ->" type="submit" className="text-color-black"></input>
        </form>
    </div>
  );
}

export default Checkin;
