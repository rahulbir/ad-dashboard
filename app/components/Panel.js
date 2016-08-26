import React, { PropTypes } from "react";
import CountTo from "react-count-to";

const Panel = React.createClass({
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-left">{isNaN(this.props.title) ? this.props.title : <CountTo to={parseInt(this.props.title)} speed={parseInt(this.props.title)} delay={50}/> }</h3>
        </div>
        <div className="panel-body">
          {this.props.children}
        </div>
      </div>
    )
  }
});

Panel.propTypes = {
  title: PropTypes.string.isRequired
}

export default Panel;
