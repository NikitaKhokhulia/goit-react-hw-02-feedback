import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const { good, neutral, bad } = this.state;
    console.log(this.state);
    const objKey = Object.keys(this.state);
    console.log(objKey);

    return (
      <div>
        <Section title="Please leave feedback"></Section>
        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} />
        </Section>
      </div>
    );
  }
}
