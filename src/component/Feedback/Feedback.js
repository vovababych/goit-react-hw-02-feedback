import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Feedback.module.css';

class Feedback extends Component {
  render() {
    const { title, options, onLeaveFeedback } = this.props;

    return (
      <>
        <h2 className={s.title}>{title}</h2>
        <div className={s.buttonWrapper}>
          {options.map(option => (
            <FeedbackButton
              key={option}
              feedbackValue={option}
              onLeaveFeedback={onLeaveFeedback}
            />
          ))}
        </div>
      </>
    );
  }
}

function FeedbackButton({ feedbackValue, onLeaveFeedback }) {
  return (
    <button
      className={s.button}
      type="button"
      onClick={() => onLeaveFeedback(feedbackValue)}
    >
      {feedbackValue[0].toUpperCase() + feedbackValue.substr(1)}
    </button>
  );
}

Feedback.propTypes = {
  title: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;
