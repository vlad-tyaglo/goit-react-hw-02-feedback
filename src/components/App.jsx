import React from "react";
import { FeedbackOptions } from "./FeedBackOptions/FeedBackOptions";
import { Statistics } from "./Statistics/Statistics";

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onButtonClick = (option) => {
    this.setState(prevState => ({[option]: prevState[option] + 1}))
  };

  countTotalFeedback = () => {
    let total = this.state.good + this.state.bad + this.state.neutral;
    return total;
  };

  countPositiveFeedbackPercentage =() => {
    let positiveFeedback = this.state.good / (this.countTotalFeedback()) *100;
    if (!positiveFeedback) {
        return 0;
    }
    return Math.round(positiveFeedback);
  }

  render () {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <FeedbackOptions
        options={Object.keys(this.state)}
        onLeaveFeedback={this.onButtonClick}>
        </FeedbackOptions>
        <h2>Statistics</h2>
        <Statistics
        good={this.state.good} 
        neutral={this.state.neutral} 
        bad={this.state.bad} 
        total={this.countTotalFeedback()} 
        positivePercentage={this.countPositiveFeedbackPercentage()}>
        </Statistics>
      </div>
    )
  }
};


