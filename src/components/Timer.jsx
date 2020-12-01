import PropTypes from 'prop-types';
import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.initialTime,
    };
  }
  // I should probably format it or use a library to do that for me
  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.time > 0)
        this.setState((prevState) => ({ time: prevState.time - 1 }));
      else {
        clearInterval(this.interval);
        this.props.onTimesUp();
      }
    }, 1000);
  }

  formatTime = () => {
    if (this.props.hideTime) return null;
    return this.state.time;
  };

  render() {
    return <button className="element" onClick={this.props.handleClick}>{this.formatTime()}</button>
  }
}

Timer.propTypes = {
  handleclick: PropTypes.func.isRequired
}

export default Timer;
