import { useState, useEffect } from 'react'
import BarChartComponent from './Components/BarChartComponent';
import { UserData } from './Data';
import './App.css'
import FetchApi from './Components/FetchApi';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import LineChart from './Components/LineChart';
import { data } from 'autoprefixer';
import Structure from './Components/Structure';

function App() {
  const [dataAPI, setDataApi] = useState([])
  const [tmp, setTmp] = useState([])
  const [city, setCity] = useState('Ilorin')



 const userData={ 
  labels:dataAPI.map((t)=>t.dt_txt),
 
  datasets:[{
    label:'Temperature',
    data:tmp.map((t)=>(t.temp_min+t.temp_max)/2 ),
    backgroundColor:['green', 'blue', 'yellow','#33323','#5a3242',"#2bcde9"],
    borderColor:'yellow',
    borderWidth:3,
    color:'white',
    y:"y-axis-1"
  },

 {
   label:'pressure',
     data:tmp.map((t)=>t.feels_like),
     backgroundColor:['green', 'blue', 'yellow','#33323','#5a3242',"#2bcde9"],
     borderColor:'black',
     borderWidth:3,
     color:'green',
     y:"y-axis-1"
 },
 {
  
     label:'humidity',
     data:tmp.map((t)=>t.humidity),
     backgroundColor:["transparent"],
     borderColor:'indigo',
     borderWidth:2,
     width:"2rem",
     y:"y-axis-2"
    
 },

],


 }
 

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
const fetchData=()=>{
  axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=9f90a349f83eff086947292eeda42dec&units=metric`)
  // axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=8.475&lon=4.6727168&appid=9f90a349f83eff086947292eeda42dec&units=metric`)


  .then(res=>{
      setDataApi(res.data.list)
      console.log(res.data.list)
      let tmpArr= []
     for(const c of res.data.list){
     tmpArr.push(c.main)
     }
     setTmp(tmpArr)
  })
  .catch(err=>{
      console.log(err+'errrrrrrrrrrr')
  })
}
useEffect(() => {
 fetchData()
}, []);
console.log(tmp.length)

  return (   
     <div className='body'> 
  {/* <LineChart chartData={userData} options={options} /> */}

<Structure/>

    </div>
  )
}

export default App



// 9f90a349f83eff086947292eeda42dec






















// https://www.bing.com/videos/search?q=chartjs+with+reactjs+and+vite+youtube+videos%3d&docid=603512994687179968&mid=8D036BF7E58DB3C313388D036BF7E58DB3C31338&view=detail&FORM=VIRE