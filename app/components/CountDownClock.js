import React, { PropTypes } from "react";
import { Router, Link } from "react-router";
import Countdown from "react-count-down";

import Panel from "./Panel";

const CountDownClock = (props) => {
  return (
    <Panel title={props.title}>
      <h3><Countdown options={{endDate: props.endDate, prefix: props.prefix}} /></h3>
    </Panel>
  )
}

CountDownClock.propTypes = {
  endDate: PropTypes.string.isRequired,
  prefix: PropTypes.string.isRequired
}

export default CountDownClock;
