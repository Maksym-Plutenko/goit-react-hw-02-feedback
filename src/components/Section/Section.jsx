import PropTypes from 'prop-types';

// import React, { Component } from 'react';

// import {countTotalFeedback} from '../../utils/countTotalFeedback';
// import {countPositiveFeedbackPercentage} from '../../utils/countPositiveFeedbackPercentage';

// class Section extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   clickGood = () => {
//     this.setState(prevState => {
//       return { good: prevState.good + 1 };
//     });
//   };

//   clickNeutral = () => {
//     this.setState(prevState => {
//       return { neutral: prevState.neutral + 1 };
//     });
//   };

//   clickBad = () => {
//     this.setState(prevState => {
//       return { bad: prevState.bad + 1 };
//     });
//   };

//   render = () => (
//     <section>
//       <h2>Please leave feedback</h2>
//       <ul>
//         <li>
//           <button onClick={this.clickGood}>Good</button>
//         </li>
//         <li>
//           <button onClick={this.clickNeutral}>Neutral</button>
//         </li>
//         <li>
//           <button onClick={this.clickBad}>Bad</button>
//         </li>
//       </ul>
//       <h2>Statistics</h2>
//       <ul>
//         <p>Good: {this.state.good}</p>
//         <p>Neutral: {this.state.neutral}</p>
//         <p>Bad: {this.state.bad}</p>
//         <p>Total: {countTotalFeedback(this.state)}</p>
//         <p>Positive feedback: {countPositiveFeedbackPercentage(this.state)} %</p>
//       </ul>
//     </section>
//   );
// }

const Section = ({ title, children }) => (
  <>
    <h2>{title}</h2>
    {children}
  </>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};

export { Section };
