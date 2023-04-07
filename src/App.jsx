import { useState } from 'react'
import './App.css'
import { Line } from 'react-chartjs-2';
// import { Bar } from 'react-chartjs-2'
function App() {
  const [count, setCount] = useState(0)
 
if('geolocation' in navigator){
  navigator.geolocation.watchPosition(function(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log("latitude: "+ latitude)
    console.log("Longitude: "+ longitude)
    navigator.geolocation.clearWatch(position)
  },
  function(err){
    console.error('Error getting geoloacation: ', err)
      });
  
}else{
  console.log("geolocation is not supported")
}

const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Data 1',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      borderColor: 'red',
    },
    {
      label: 'Data 2',
      data: [5, 10, 20, 30, 40, 50],
      fill: false,
      borderColor: 'blue',
    },
  ],
};
  return (
    <div className='body'>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime aliquam aliquid, excepturi voluptas est ad. Repellat deserunt porro placeat provident ut, tempora quisquam fuga, iusto accusamus libero cupiditate, qui labore.
      {/* <Bar data={data}/> */}
      <Line data={data}/>

    </div>
  )
}

export default App





// 07081236562