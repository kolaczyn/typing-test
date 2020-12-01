import PropTypes from 'prop-types';
import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.initialTime,
    };
  }


  formatTime = () => {
    if (this.props.hideTime) return null;
    return this.state.time;
  };

  render() {
    const {handleClick} = this.props;
    return <button className="element" onClick={handleClick}>{this.props.currentTime}</button>
  }
}

Timer.propTypes = {
  handleclick: PropTypes.func.isRequired
}

export default Timer;
