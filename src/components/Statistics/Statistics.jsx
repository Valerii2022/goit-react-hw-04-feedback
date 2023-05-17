import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <>
      <p className={css.text}>
        Good: <span className={css.value}>{good}</span>
      </p>
      <p className={css.text}>
        Neutral: <span className={css.value}>{neutral}</span>
      </p>
      <p className={css.text}>
        Bad: <span className={css.value}>{bad}</span>
      </p>
      <p className={css.text}>
        Total: <span className={css.value}>{total}</span>
      </p>
      <p className={css.text}>
        Positive feedback: <span className={css.value}>{percentage}%</span>
      </p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
