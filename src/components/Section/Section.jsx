import React, { Component } from 'react';

class Section extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  clickNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  clickBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  render = () => (
    <section>
      <h2>Please leave feedback</h2>
      <ul>
        <li>
          <button onClick={this.clickGood}>Good</button>
        </li>
        <li>
          <button onClick={this.clickNeutral}>Neutral</button>
        </li>
        <li>
          <button onClick={this.clickBad}>Bad</button>
        </li>
      </ul>
      <h2>Statistics</h2>
      <ul>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
      </ul>
    </section>
  );
}

export { Section };