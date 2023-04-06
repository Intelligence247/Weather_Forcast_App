import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

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


  return (
    <div className='body'>
      
    </div>
  )
}

export default App





// 07081236562