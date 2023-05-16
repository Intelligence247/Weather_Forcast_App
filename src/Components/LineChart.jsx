import React from 'react'
import { Line } from 'react-chartjs-2'
import {Chart as chartjs} from "chart.js/auto"
function LineChart({chartData,options}) {
  
//  const userData={ 
//   labels:dataAPI.map((t)=>),
 
//   datasets:[{
//     label:'Temperature',
//     data:tmp.map((t)=>(t.temp_min+t.temp_max)/2 ),
//     backgroundColor:['green', 'blue', 'yellow','#33323','#5a3242',"#2bcde9"],
//     borderColor:'yellow',
//     borderWidth:3,
//     color:'white',
//     y:"y-axis-1"
//   },

//  {
//    label:'temperature',
//      data:tmp.map((t)=>t.feels_like),
//      backgroundColor:['green', 'blue', 'yellow','#33323','#5a3242',"#2bcde9"],
//      borderColor:'black',
//      borderWidth:3,
//      color:'green',
//      y:"y-axis-1"

//  }
// ],

//  }
 
  return  <Line
            data={chartData} 
           width={600}
           height={350}
            options={options}
            /> 
  
}

export default LineChart;
// https://youtu.be/c_9c5zkfQ3Y?t=557