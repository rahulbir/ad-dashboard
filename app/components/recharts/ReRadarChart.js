import React, { PropTypes } from "react";
import {Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis} from "recharts";

import Panel from "../Panel";

const RePieChart = (props) => {
    return (
      <Panel title={props.title}>
        <RadarChart outerRadius={130} width={500} height={300} data={props.chartData} style={{display: 'table', margin: 'auto'}}>
          <Radar name="Employees" dataKey="total" stroke={props.color} fill={props.color} fillOpacity={0.6}/>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis/>
        </RadarChart>
      </Panel>
    );
}

RePieChart.propTypes = {
  chartData: PropTypes.array.isRequired,
  color: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
}

export default RePieChart;
