import React from 'react';
import './App.scss'

function Tables() {
  return (
    <div className="mt-5">
      <h5><strong>Best value offers</strong></h5>
      <table className="u-full-width">
        <tbody>
          <tr>
            <td>Munich</td>
            <td>Munich</td>
            <td>Munich</td>
            <td>Munich</td>
          </tr>
          <tr>
            <td>Munich</td>
            <td>Munich</td>
            <td>Munich</td>
            <td>Munich</td>
          </tr>

          <tr>
            <td>Munich</td>
            <td>Munich</td>
            <td>Munich</td>
            <td>Munich</td>
          </tr>

          <tr>
            <td>Munich</td>
            <td>Munich</td>
            <td>Munich</td>
            <td>Munich</td>
          </tr>

        </tbody>
      </table>
      <div className="row">
        <h6>*Round trip including all taxes, fees and carries charges.</h6>
        <h6 className="u-pull-right">See all -></h6>
      </div>
    </div>
  );
}

export default Tables;
