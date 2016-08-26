import React, { PropTypes } from "react";
import { Router, Link } from "react-router";
import CountTo from "react-count-to";

import Panel from "./Panel";

const Counter = (props) => {
  return (
    <Panel title={props.title}>
      <div className="counter" style={{height: "300"}}>
        <CountTo to={props.max} speed={props.max} delay={1}/>
      </div>
    </Panel>
  )
}

Counter.propTypes = {
  title: PropTypes.string.isRequired,
  max: PropTypes.number.isRequired
}

export default Counter;
