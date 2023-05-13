import React from 'react'
import { Line } from 'react-chartjs-2'
import {Chart as chartjs} from "chart.js/auto"
function LineChart({chartData,options}) {
  return  <Line
            data={chartData} 
           width={600}
           height={350}
            // options={{maintainAspectRatio:false}}
            options={options}
            /> 
  
}

export default LineChart;
// https://youtu.be/c_9c5zkfQ3Y?t=557