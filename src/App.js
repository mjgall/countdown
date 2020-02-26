import React from 'react';
import './App.css';

import moment from 'moment';

export default class App extends React.Component {
  state = { daysUntilMarch8th: 11, earlierDate: null };

  componentDidMount = () => {
    const march9th = moment('2020-03-09');
    const today = moment();
    const daysUntil = march9th.diff(today, 'days');
    const previousDate = moment()
      .subtract(daysUntil, 'days')
      .format('dddd, MMMM D');

    this.setState({ daysUntilMarch8th: daysUntil, earlierDate: previousDate });
  };

  render = () => {
    return (
      <div className="app-container">
        <h1>Countdown to Daylight Savings</h1>
        <h2>
          There are { this.state.daysUntilMarch8th } days until March 8th. The date { this.state.daysUntilMarch8th } days ago was { this.state.earlierDate }.
        </h2>
      </div>
    );
  };
}
