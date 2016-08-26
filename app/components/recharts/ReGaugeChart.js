import React, { PropTypes } from "react";
import { PieChart, Pie } from "recharts";

import Panel from "../Panel";

const ReGaugeChart = (props) => {
    return (
      <Panel title={props.title}>
        <PieChart width={200} height={100} style={{display: 'table', margin: 'auto'}}>
          <Pie
            data={props.chartData}
            cx='50%' 
            cy='100%' 
            startAngle={180}
            endAngle={0}
            innerRadius={40}
            outerRadius={100} 
            fill={props.color}
          />
        </PieChart>
      </Panel>
    );
}

ReGaugeChart.propTypes = {
  chartData: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default ReGaugeChart;
