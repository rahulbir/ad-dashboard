import React, { PropTypes } from "react";
import {RadialBarChart, RadialBar, Legend} from "recharts";

import Panel from "../Panel";

const style = {
    top: 0,
    left: 350,
    lineHeight: '24px'
  };

const ReRadialBarChart = (props) => {
    return (
      <Panel title={props.title}>
        <RadialBarChart width={300} height={200} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={props.chartData} style={{display: 'table', margin: 'auto'}}>
          <RadialBar minAngle={15} label background clockWise={true} dataKey='uv'/>
          <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' wrapperStyle={style}/>
        </RadialBarChart>
      </Panel>
    );
}

ReRadialBarChart.propTypes = {
  chartData: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
}

export default ReRadialBarChart;
