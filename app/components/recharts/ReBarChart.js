import React, { PropTypes } from "react";
import {BarChart, Bar, XAxis, Tooltip} from "recharts";

import Panel from "../Panel";

const ReBarChart = (props) => {
    return (
      <Panel title={props.title}>
        <BarChart width={500} height={300} data={props.chartData} style={{display: 'table', margin: 'auto'}}>
          <XAxis dataKey="name" tickLine={false} />
          <Tooltip />
          <Bar dataKey="total" fill={props.color} />
        </BarChart>
      </Panel>
    );
}

ReBarChart.propTypes = {
  chartData: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default ReBarChart;
