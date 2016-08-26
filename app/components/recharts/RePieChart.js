import React, { PropTypes } from "react";
import {PieChart, Pie, Sector, Cell, Tooltip} from "recharts";


const RADIAN = Math.PI / 180;

const RePieChart = (props) => {
    return (
        <PieChart width={200} height={200} style={{display: 'table', margin: 'auto'}}>
          <Pie
            data={props.chartData} 
            innerRadius={60}
            outerRadius={80} 
            fill="#8884d8"
            paddingAngle={5}
          >
            {
              props.chartData.map((entry, index) => <Cell fill={props.colors[index % props.colors.length]}/>)
            }
          </Pie>
          <Tooltip/>
        </PieChart>
    );
}

RePieChart.propTypes = {
  chartData: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
}

export default RePieChart;
