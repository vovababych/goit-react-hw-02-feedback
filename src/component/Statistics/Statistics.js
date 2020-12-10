import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification';
import s from './Statistics.module.css';

class Statistics extends Component {
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.props.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.props.state;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.props.state;
    const { title } = this.props;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <>
        <h2 className={s.title}>{title}</h2>
        {total ? (
          <ul className={s.list}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positiveFeedback || 0} %</li>
          </ul>
        ) : (
          <Notification message="No feedback given"></Notification>
        )}
      </>
    );
  }
}

Statistics.propTypes = {
  title: PropTypes.string,
  state: PropTypes.objectOf(PropTypes.number),
};
export default Statistics;
