import React, { Component } from "react";
import Timer from "./Timer";
import Input from "./Input";
import Text from "./TextField";
import "./style.css";

class App extends Component {
  state = {
    hideTime: false,
  };
  // constructor() {
  //   super();
  // }
  onTimesUp = () => {
    console.log("Time's up!");
  };
  onRefresh = () => {
    console.log("Refreh");
  };
  handleTimeHide = () => {
    this.setState((prevState) => ({
      hideTime: !prevState.hideTime,
    }));
  };

  render() {
    return (
      <div className="content">
        <div className="content__upper">
          <Text />
        </div>
        <div className="content__lower">
          <button className="element" onClick={this.handleTimeHide}>
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
