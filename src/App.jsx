import { useState } from 'react'
import BarChartComponent from './Components/BarChartComponent';
import { UserData } from './Data';
import './App.css'
import FetchApi from './Components/FetchApi';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import LineChart from './Components/LineChart';

function App() {
 const [userData, setUserData] = useState({
  labels: UserData.map((data)=>data.year),
  datasets:[{
    label:'Users Gained',
    data:UserData.map((data)=>data.userLost),
    backgroundColor:['green', 'blue', 'yellow','#33323','#5a3242',"#2bcde9"],
    borderColor:'lightBlue',
    borderWidth:2,
    
  }],
  datasets:[{
    label:'Users Gained',
    data:[90,70,12,89],
    backgroundColor:['green', 'blue', 'yellow','#33323','#5a3242',"#2bcde9"],
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

    axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
    .then(data=>{
      const city = data.address.city;
      console.log(city)
    })
    .catch((err)=>console.log(err))
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
<div className="bar w-[30rem] h-[20rem] m-auto"> 
<LineChart chartData={userData}/>
</div>

<FetchApi/>
    </div>
  )
}

export default App



// 9f90a349f83eff086947292eeda42dec






















// https://www.bing.com/videos/search?q=chartjs+with+reactjs+and+vite+youtube+videos%3d&docid=603512994687179968&mid=8D036BF7E58DB3C313388D036BF7E58DB3C31338&view=detail&FORM=VIRE
