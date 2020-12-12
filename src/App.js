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

  render() {
    return (
      <Section>
        <Feedback
          title="Please leave feedback"
          options={this.feedbackOptions}
          onLeaveFeedback={this.hendleIncrement}
        />

        <Statistics title="Statistics" state={this.state} />
      </Section>
    );
  }
}
export default App;
