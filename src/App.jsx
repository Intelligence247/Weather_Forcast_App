import { useState } from 'react'
import BarChartComponent from './Components/BarChartComponent';
import { UserData } from './Data';
import './App.css'
import LineChart from './Components/LineChart';
import PieChart from './Components/PieChart';

function App() {
 const [userData, setUserData] = useState({
  labels: UserData.map((data)=>data.year),
  datasets:[{
    label:'Users Gained',
    data:UserData.map((data)=>data.userLost),
    backgroundColor:['green', 'blue', 'yellow'],
    borderColor:'lightBlue',
    borderWidth:2,
    
  }]

 })
 
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


  return (   
     <div className='body'>
<div className="bar w-[30rem] h-[20rem] m-auto"> <BarChartComponent chartData={userData}/>
</div>
<div className="bar w-[30rem] h-[20rem] m-auto"> <LineChart chartData={userData}/>
</div>
<div className="bar w-[30rem] h-[20rem] m-auto"> <PieChart chartData={userData}/>
</div>
    </div>
  )
}

export default App

// https://www.bing.com/videos/search?q=chartjs+with+reactjs+and+vite+youtube+videos%3d&docid=603512994687179968&mid=8D036BF7E58DB3C313388D036BF7E58DB3C31338&view=detail&FORM=VIRE