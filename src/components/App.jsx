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
  const options = ['good', 'neutral', 'bad'];

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

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleIncrement = event => {
//     this.setState(prevState => ({
//       [event.target.id]: prevState[event.target.id] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
//     return totalFeedback;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const positiveFeedbackPercentage = Math.round(
//       (this.state.good * 100) /
//         (this.state.good + this.state.neutral + this.state.bad)
//     );
//     return positiveFeedbackPercentage;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const percentage = this.countPositiveFeedbackPercentage();
//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.handleIncrement}
//           />
//         </Section>
//         <Section title="Statistics">
//           {total === 0 ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               percentage={percentage}
//             />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

export default App;
