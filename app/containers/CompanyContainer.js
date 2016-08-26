import React from "react";

import App from "../components/App";
import Panel from "../components/Panel";

import Counter from "../components/Counter";
import CountDownClock from "../components/CountDownClock";
import Poll from "../components/Poll";
import IdeaSubmission from "../components/IdeaSubmission";
import ReLineChart from "../components/recharts/ReLineChart";
import RePieChart from "../components/recharts/RePieChart";
import ReBarChart from "../components/recharts/ReBarChart";
import ReRadarChart from "../components/recharts/ReRadarChart";

const Dashboard = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <div>
        <App title="Company">
          <div className="row">
            <div className="col-md-6" style={{height: '300px'}}>
              <ReLineChart chartData={[
                                        {name: '2012', total: 3 },
                                        {name: '2013', total: 6 },
                                        {name: '2014', total: 7 },
                                        {name: '2015', total: 10 },
                                        {name: '2016', total: 12 },
                                      ]} title="Company Revenue" color="#D777B8"/>
            </div>
            <div className="col-md-6">
              <Panel title="Didja know?">
                <div className="row">
                  <div className="col-md-6" style={{height: '300px'}}>
                    <RePieChart chartData={[{name: 'Salted Caramel', value: 35}, {name: 'Cookies n\' Cream', value: 30},
                    {name: 'Cardamom', value: 20}, {name: 'Earl Grey Tea', value: 15}]} colors={['#F86F71', '#FBA840', '#D777B8', '#A5548F']} title="Poll Results"/>
                  </div>
                  <div className="col-md-6">
                    <h3>What is your favourite Village Ice Cream Flavour?</h3>
                    <h5>Salted Caramel <i style={{color: '#F86F71'}}>35%</i></h5>
                    <h5>Cookies n Cream <i style={{color: '#FBA840'}}>30%</i></h5>
                    <h5>Cardamom <i style={{color: '#D777B8'}}>20%</i></h5>
                    <h5>Earl Grey Tea <i style={{color: '#A5548F'}}>15%</i></h5>
                  </div>
                </div>  
              </Panel>
            </div>
            <div className="col-md-6">
              <Counter title="Total Employees" max={76}/>
            </div>
            <div className="col-md-6">
              <ReRadarChart chartData={[
                              { subject: 'Swift', total: 10 },
                              { subject: 'PHP', total: 33 },
                              { subject: 'Node', total: 28 },
                              { subject: 'C#', total: 15 },
                              { subject: 'Ruby on Rails', total: 15 },
                              { subject: 'Java', total: 40 },
                            ]} color='#fba840' title="Employee Skills"/>
            </div>
            <div className="col-md-6">
              <ReBarChart chartData={[{name: 'JLR', total: 4000}, {name: 'Enfocus', total: 3000}, {name: 'Base', total: 1000}, {name: 'Sahara', total: 500}]} color='#D777B8' title="Done Deals"/>
            </div>
            <div className="col-md-6">
              <ReBarChart chartData={[{name: 'Pitney Bowes', total: 10000}, {name: 'Jibo', total: 4000}, {name: 'Wind River', total: 1000}, {name: 'GoPro', total: 500}]} color='#F86F71' title="Future Prospects"/>
            </div>
          </div>
        </App>
      </div>
    )
  }
});

export default Dashboard;
