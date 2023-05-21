import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import Structure from './Components/Structure';

function App() {
  const [lat, setlat] = useState(0)
  const [lon, setlon] = useState(0)
  const [errG, seterrG] = useState('')
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
    setlat(latitude)
    setlon(longitude)
    navigator.geolocation.clearWatch(position)

  },
  function(err){
    console.error('Error getting geoloacation: ', err)
    seterrG(err.message)
      });
  
}else{
  console.log("geolocation is not supported")
}

const fetchdata= ()=>{
  axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=b52ebf3479c0ba50f0f006fd016ff13e&units=metric`)
  .then(res=>{
    console.log(res.data)

  })
  .catch(err=>{
    console.log(err)
  })
}
useEffect(() => {
  fetchdata()
}, [])
console.log(lat.length)
console.log(lat)

  return (   
   
     <div className='body'> 
  <Structure
  lon={lon}
  lat={lat}
  errG={errG}
  />
      </div>
  )
}

export default App



// 9f90a349f83eff086947292eeda42dec






















// https://www.bing.com/videos/search?q=chartjs+with+reactjs+and+vite+youtube+videos%3d&docid=603512994687179968&mid=8D036BF7E58DB3C313388D036BF7E58DB3C31338&view=detail&FORM=VIRE