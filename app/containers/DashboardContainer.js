import React from "react";

import App from "../components/App";
import Panel from "../components/Panel";

import Counter from "../components/Counter";
import CountDownClock from "../components/CountDownClock";
import Poll from "../components/Poll";
import IdeaSubmission from "../components/IdeaSubmission";

const Dashboard = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <div>
        <App title="Dashboard">
          <div className="row">
            <div className="col-md-6">
              <CountDownClock endDate="08/26/2016 5:00 PM" prefix="until next event" title="Count Down"/>
            </div>
            <div className="col-md-6">
              <Panel title="Coming Up">
                <img src={require('../assets/images/timeline2x.png')} style={{width: '523px', height: '183px', display: 'table', margin: 'auto', marginTop: '20px'}}/>
              </Panel>
            </div>
            <div className="col-md-6">
              <Poll title="Where Should We Drink On Friday?" />
            </div>
            <div className="col-md-6">
              <IdeaSubmission title='Submit Your Ideas '/>
            </div>
          </div>
        </App>
      </div>
    )
  }
});

export default Dashboard;
