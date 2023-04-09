import React from 'react'
import { Bar } from 'react-chartjs-2'
import {Chart as chartjs} from "chart.js/auto"
function BarChartComponent({chartData}) {
  return  <Bar
            data={chartData} 
           
            /> 
  
}

export default BarChartComponent
// https://youtu.be/c_9c5zkfQ3Y?t=557