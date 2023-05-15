import { useState, useEffect } from 'react'
import BarChartComponent from './Components/BarChartComponent';
import './App.css'
import FetchApi from './Components/FetchApi';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import LineChart from './Components/LineChart';
import Structure from './Components/Structure';

function App(props) {


  const [city, setCity] = useState('Ilorin')



//  Options begins
const options ={
  maintainAspectRatio:false,
  scales: {
    
  }
}
if('geolocation' in navigator){
  navigator.geolocation.watchPosition(function(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log("latitude: "+ latitude)
    console.log("Longitude: "+ longitude)
    navigator.geolocation.clearWatch(position)

    axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
    .then(data=>{
      // const city = data.address.city;
      // console.log(city)
    })
    .catch((err)=>console.log(err))
  },
  function(err){
    console.error('Error getting geoloacation: ', err)
      });
  
}else{
  console.log("geolocation is not supported")
}
// API Fetch


  return (   
     <div className='body'> 


<Structure/>

    </div>
  )
}

export default App



// 9f90a349f83eff086947292eeda42dec






















// https://www.bing.com/videos/search?q=chartjs+with+reactjs+and+vite+youtube+videos%3d&docid=603512994687179968&mid=8D036BF7E58DB3C313388D036BF7E58DB3C31338&view=detail&FORM=VIRE