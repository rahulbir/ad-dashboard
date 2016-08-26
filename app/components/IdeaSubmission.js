import React, { PropTypes } from "react";
import CountTo from "react-count-to";

import Panel from "./Panel";

const IdeaSubmission = (props) => {
  return (
    <Panel title={props.title}>
      <div style={{paddingTop: "5px", paddingLeft: "10px"}}>
        <form className="form-horizontal" onSubmit="">
          <div className="form-group">
            <p><i className="fa fa-lightbulb-o"/> Have an idea?</p>
            <p>Submit a description of your activity and we will consider it at our next meeting!</p>
            <textarea className="form-control" rows="4" id="comment" style={{width: "480"}}></textarea>
          </div>
          <div className="form-group">
            <div className="">
              <button type="submit" className="btn btn-default">Submit Idea</button>
            </div>
          </div>
        </form>
      </div>
    </Panel>
  )
}

IdeaSubmission.propTypes = {
  title: PropTypes.string.isRequired
}

export default IdeaSubmission;
