import PropTypes from 'prop-types';

// FeedbackOptions

const FeedbackOptions = ({onLeaveFeedback}) => (
  <ul>
    <li>
      <button onClick={onLeaveFeedback}>Good</button>
    </li>
    <li>
      <button onClick={onLeaveFeedback}>Neutral</button>
    </li>
    <li>
      <button onClick={onLeaveFeedback}>Bad</button>
    </li>
  </ul>
);

export {FeedbackOptions};