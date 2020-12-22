import PropTypes from 'prop-types';
import Notification from '../Notification';
import s from './Statistics.module.css';

function Statistics({ title, state, total, positiveFeedback }) {
  const { good, neutral, bad } = state;

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

Statistics.propTypes = {
  title: PropTypes.string,
  state: PropTypes.objectOf(PropTypes.number),
};
export default Statistics;
