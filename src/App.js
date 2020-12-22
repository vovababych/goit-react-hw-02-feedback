import { Component } from 'react';
import Section from './component/Section';
import Feedback from './component/Feedback';
import Statistics from './component/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackOptions = ['good', 'neutral', 'bad'];

  hendleIncrement = feedback => {
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  render() {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <Section>
        <Feedback
          title="Please leave feedback"
          options={this.feedbackOptions}
          onLeaveFeedback={this.hendleIncrement}
        />

        <Statistics
          title="Statistics"
          state={this.state}
          total={total}
          positiveFeedback={positiveFeedback}
        />
      </Section>
    );
  }
}
export default App;
