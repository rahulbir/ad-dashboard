import React, { PropTypes } from "react";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";

import Panel from "../Panel";

const ReLineChart = (props) => {
    return (
      <Panel title={props.title}>
        <LineChart width={500} height={300} data={props.chartData} style={{display: 'table', margin: 'auto'}} margin={{ top: 10, right: 50 }}>
          <XAxis dataKey="name" tickLine={false} />
          <YAxis tickLine={false} />
          <Tooltip/>
          <Line type="natural" dataKey="total" stroke={props.color} strokeWidth={3} />
        </LineChart>
      </Panel>
    );
}

ReLineChart.propTypes = {
  chartData: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default ReLineChart;
