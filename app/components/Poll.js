import React, { PropTypes } from "react";
import { Router, Link } from "react-router";

import Panel from "./Panel";

const Poll = (props) => {
  return (
    <Panel title={props.title}>
      <div style={{padding: "10px", paddingLeft: "10px"}}>
        <form className="form-horizontal" onSubmit="">
          <div className="form-group">
            <div className="radio">
              <label>
                <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" defaultChecked="checked"/>
                National
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"/>
                Charbar
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3"/>
                Craft Beer Market
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" name="optionsRadios" id="optionsRadios4" value="option4"/>
                Ship & Anchor
              </label>
            </div>
          </div>
          <div className="form-group">
            <div className="">
              <button type="submit" className="btn btn-default">Vote!</button>
            </div>
          </div>
        </form>
      </div>
    </Panel>
  )
}

Poll.propTypes = {
  title: PropTypes.string.isRequired
}

export default Poll;
