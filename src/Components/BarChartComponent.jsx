import React from 'react'
import { Bar } from 'react-chartjs-2'

const BarChartComponent = () => {
  const myArr=['audj','asdfjnwf','adsjk']
  return <div>
            <Bar
            data={{
              labels:{...myArr}
            }}    

            height={400}
            width={600}
            /> 
    </div>
  
}

export default BarChartComponent
// https://youtu.be/c_9c5zkfQ3Y?t=557