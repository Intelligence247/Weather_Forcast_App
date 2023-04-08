import { useState } from 'react'
import './App.css'
import BarChartComponent from './Components/BarChartComponent';
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


  return     <div className='body'>
      <BarChartComponent/>
    </div>
  
}

export default App




// https://phenomenal-sunshine-547717.netlify.app


// 07081236562