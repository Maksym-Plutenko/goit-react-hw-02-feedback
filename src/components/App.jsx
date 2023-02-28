import React, { Component } from 'react';

import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

import { countTotalFeedback } from '../utils/countTotalFeedback';
import { countPositiveFeedbackPercentage } from '../utils/countPositiveFeedbackPercentage';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  }

  render = () => {
    return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback}/>
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={countTotalFeedback(this.state)}
            positivePercentage={countPositiveFeedbackPercentage(this.state)}
          />
        </Section>
      </div>
    );
  };
}

// const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         // display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       <Section title="Please leave feedback">
//         <p>Hello</p>
//       </Section>
//     </div>
//   );
// };

export { App };
