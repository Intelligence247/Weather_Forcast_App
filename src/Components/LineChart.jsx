import React from 'react'
import { Line } from 'react-chartjs-2'
import {Chart as chartjs} from "chart.js/auto"
function LineChart({chartData}) {
  return  <Line
            data={chartData} 
           
            /> 
  
}

export default LineChart;
// https://youtu.be/c_9c5zkfQ3Y?t=557