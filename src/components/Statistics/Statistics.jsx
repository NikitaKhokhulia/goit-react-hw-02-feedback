import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  // total: PropTypes.number.isRequired,
  // positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
