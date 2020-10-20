import React, { Component } from "react";
import Timer from "./Timer";
import Input from "./Input";
import Text from "./TextField";
import sampleText from "./sampleText";
import "./style.css";

class App extends Component {
  state = {
    hideTime: false,
    completedWords: ["hello", "world"],
    uncompletedWords: sampleText.split(" "),
  };
  // constructor() {
  //   super();
  // }
  onTimesUp = () => {
    this.setState({ hideTime: false });
  };
  onRefresh = () => {};
  handleTimeVisibility = () => {
    this.setState((prevState) => ({
      hideTime: !prevState.hideTime,
    }));
  };

  onInputChange = (str) => {
    // this.setState((prevState) => ({
    //   writtenWords: [...prevState.writtenWords, str],
    // }));
  };

  render() {
    return (
      <div className="content">
        <div className="content__upper">
          <Text
            completedWords={this.state.completedWords}
            uncompletedWords={this.state.uncompletedWords}
          />
        </div>
        <div className="content__lower">
          <button className="element" onClick={this.handleTimeVisibility}>
            <Timer
              initialTime={60}
              onTimesUp={this.onTimesUp}
              hideTime={this.state.hideTime}
            />
          </button>
          <Input onInputChange={this.onInputChange} />
          <button className="element" onClick={this.onRefresh}>
            <img src="refresh.svg" className="refresh-icon" alt="" />
          </button>
        </div>
      </div>
    );
  }
}

export default App;
