import React from "react";
import { Router, Link } from "react-router";

import App from "../components/App";

const HomeContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <div className="class_name">
        <Link to="/socialCommittee"><img src={require('../assets/images/introLogo.png')}/></Link>
      </div>
    )
  }
});

export default HomeContainer;
