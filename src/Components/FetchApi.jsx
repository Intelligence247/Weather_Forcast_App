import axios from 'axios'
import { useEffect, React, useState } from 'react'
import { Line } from 'react-chartjs-2'
import LineChart from './LineChart'

const FetchApi = () => {
  const [city, setCity] = useState('ilorin')
  const [dataAPI, setDataApi] = useState([])


    const lat = 6.5994752
    const lon = 3.3488896
    const apiKey = '9f90a349f83eff086947292eeda42dec'
    // const url = `https://api.openweathermap.org/data/3.0/onecall?lat=6.5994&lon=3.348&exclude=current&appid=9f90a349f83eff086947292eeda42dec`

    const fetchData=()=>{
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=9f90a349f83eff086947292eeda42dec`)
    .then(res=>{
        setDataApi(res.data)
    })
    .catch(err=>{
        console.log(err+'errrrrrrrrrrr')
    })
}
useEffect(() => {
   fetchData()
}, []);
// for (const d of dataAPI){
//   console.log(d)
// }
// console.log(dataAPI.list)
  return (
    <div>
      {/* <LineChart chartData={''}/> */}
    </div>
  )
}

export default FetchApi


/* http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=9f90a349f83eff086947292eeda42dec

This is the Original Api Which i changed the ID to 'q' which means name, so that user can use name instead of Id as it is very hard to get ID
*/


/*
http://api.openweathermap.org/data/2.5/forecast?q=Ilorin&appid=9f90a349f83eff086947292eeda42dec
 
This is the API I generated from the previous one which uses q instead of id
*/

/* http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=9f90a349f83eff086947292eeda42dec

geolocation API
*/

