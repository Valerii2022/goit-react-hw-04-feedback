import { useState } from 'react';
import Statistics from './Statistics';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const handleIncrement = event => {
    const { id } = event.target;

    if (id === 'good') setGood(good => good + 1);
    if (id === 'neutral') setNeutral(neutral => neutral + 1);
    if (id === 'bad') setBad(bad => bad + 1);
  };

  const countPercentage = () => {
    return Math.round((good * 100) / (good + neutral + bad));
  };

  const total = countTotalFeedback();
  const percentage = countPercentage();
  const options = Object.keys({ good, neutral, bad });

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleIncrement} />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={percentage}
          />
        )}
      </Section>
    </div>
  );
};

export default App;
