import React, { Component } from 'react';

import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

import { countTotalFeedback } from '../utils/countTotalFeedback';
import { countPositiveFeedbackPercentage } from '../utils/countPositiveFeedbackPercentage';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const eventText = event.currentTarget.textContent;

    if (eventText === 'Good') {
      this.setState(prevState => {
        return { good: prevState.good + 1 };
      });
    } else if (eventText === 'Neutral') {
      this.setState(prevState => {
        return { neutral: prevState.neutral + 1 };
      });
    } else if (eventText === 'Bad') {
      this.setState(prevState => {
        return { bad: prevState.bad + 1 };
      });
    }
  };

  render = () => {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback(this.state) === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={countTotalFeedback(this.state)}
              positivePercentage={countPositiveFeedbackPercentage(this.state)}
            />
          )}
        </Section>
      </div>
    );
  };
}

export { App };
