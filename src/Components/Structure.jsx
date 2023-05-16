import React, { useState } from 'react'
import "./Structure.css"
import Box from './Box'
import Weatherforms from './Weatherforms'
import Lefttopleft from './Lefttopleft'
import { useEffect } from 'react'
import axios from 'axios'
import HourlyndDayily from './HourlyndDayily'
import App from '../App'
import LineChart from './LineChart'
export const MyContext = React.createContext();

const Structure = () => {

  let days =['A Day Interval','3 Hours Interval']
  const days2= ['','','','','','','','']

  const [inputs,setInputs] = useState('')
  const [dataAPI, setDataApi] = useState([])
  const [tmp, setTmp] = useState([])
  const [time, settime] = useState([])
  const [desc, setdesc] = useState([])
  const [cityname, setcityname] = useState([])
  const [pressure, setpressure] = useState([])
  const [humidity, sethumidity] = useState([])
  const [wind, setwind] = useState([])
  const [swt, setswt] = useState(0)
  const [feels, setfeels] = useState([])
 const [city, setCity] = useState('china')
 const datum = dataAPI

 const fetchData=()=>{
  axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=9f90a349f83eff086947292eeda42dec&units=metric`)
  // axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=8.475&lon=4.6727168&appid=9f90a349f83eff086947292eeda42dec&units=metric`)
  .then(res=>{
   setDataApi(res.data.list)
   sethumidity(res.data.list[0].main.humidity)
   setwind()
   setpressure(res.data.list[0].main.humidity)
     setcityname(`${res.data.city.name}, ${res.data.city.country}`)
     setwind(res.data.list[0].wind.speed)
      let tmpArr= []
      let times = []
      let desc =[]
      let feelslike=[]
     for(const c of res.data.list){
     tmpArr.push(c.main.temp)
     times.push(c.dt_txt)
     feelslike.push(c.main.feels_like)
     desc.push(c.weather[0].description)
     }
     setTmp(tmpArr)
     settime(times)
     setdesc(desc)
     setfeels(feelslike)
  })
  .catch(err=>{
      console.log(err+'errrrrrrrrrrr')
  })
}

useEffect(() => {
 fetchData()
}, []);

const alldata1=[
  {
    time: time[0],
    temp: tmp[0],
    desc: desc[0],
  },{
    time: time[7],
    temp: tmp[7],
    desc: desc[7],
  },
  {
    time: time[15],
    temp: tmp[15],
    desc: desc[15],
  },
  {
    time: time[23],
    temp: tmp[23],
    desc: desc[23],
  },
  {
    time: time[33],
    temp: tmp[33],
    desc: desc[33],
  },

]

 const topleftdata = [
  {
    img:'/media/tempimg.png',
    level: alldata1[0].temp,
    desc:'Temperature',
    unit:<p><sup>o</sup>C</p>
  },
  {
    img:'/media/pressure.png',
    level: pressure,
    desc:'Pressure',
    unit:'atm'
  },
  {
    img:'/media/humidity.png',
    level: humidity ,
    desc:'Humidity',
    unit:'%'
  },
  {
    img:'/media/wind.png',
    level: wind,
    desc:'Wind',
    unit:'m/s'
  },
]
const dailyFeels = [feels[0], feels[7],feels[15],feels[23],feels[33]]

// chartjs
  
const userData={ 
  labels:alldata1.map((t)=>t.time),
 
  datasets:[{
    label:'Temperature',
    fill: {
      target: "origin",
      above: "rgba(0,0,0,0.3)",
      below:'red'
    },
    data: alldata1.map((t)=>(t.temp)),
     backgroundColor:"rgba(0,0,0,0.4)",
    borderColor:'rgba(0,0,0,0.6)',
    borderWidth:2,
    pointBorderWidth:1,
    pointRadius:8,
    pointBackgroundColor: 'white',
    pointHoverRadius:16,
    pointStyle: "star",
     },
  
],

options: {
  responsive:true,
  scales: {
    y: {
      ticks: {
        fontColor: 'purple', // Change the color of y-axis labels
      }
    }
  },
  plugins: {
    title: {
      display: true,
      text: 'Chart Title',
      fontColor: 'blue' // Change the color of the chart title
    },
    legend: {
      labels: {
        fontColor: 'green' // Change the color of legend labels
      }
    },
    tooltip: {
      titleColor: 'purple', // Change the color of tooltip title
      bodyColor: 'orange' // Change the color of tooltip body
    }
  }

}}
  return (
    <div className='grid place-items-center'>

    {dataAPI.length>1?
    <div className='structureW'>

      <div className="stleftW">

        <div className="lefttop">
          <h1>Weather Forcast App</h1>
          <div className='flex gap-5'>
          <div className="">
         <Lefttopleft
         arr={topleftdata}
         city={`${cityname}`}/>
      </div>
<div className="lefttopright bg-transparent">
<LineChart chartData={userData}
options={userData.options}
/>
</div>
      
        </div>
</div>
        <div className="leftbottom">
          {
            swt===0?
            dailyFeels.map((d,i)=>(
              <Box key={i} 
              time={i}
              level={d}
              />
            ))
    :
    feels.map((d,i)=>(
      <Box key={i} 
      time={time[i].slice(11,16)}
      level={d}
      />
    ))
          }
       
        </div>

      </div>
        <div className="strightW">
          <div className="inputW">
            <input type="text" 
            onChange={(e)=> setCity(e.target.value)}
             id="" 
            //  value={city}
             />
            <img src="/media/map.png" alt="" />
            <button
            onClick={()=>setCity(inputs)}
            >search</button>
          </div>

          <div className="deg">
            <p>{Math.round(alldata1[0].temp)}<sup>o</sup>C</p>
            <p>{alldata1[0].desc}</p>
          </div>
          <div className="divider"></div>
          <main>
            <h1>Five Days Forcasts</h1>
          <div className="daysW">
            {
              days.map((day,i)=>(
                <p key={i}
                onClick={()=>setswt(i)}
                >{day}</p>
              ))
            }
          </div>
          <div className='sectionW'>
          <section className='scdsection'>
            {
              swt===0?

              alldata1.map((a,i)=>(
                             
           <HourlyndDayily
            key={i}
            time={a.time}
            desc={a.desc}
            temp={a.temp}
            />

            ))
:
time.map((t,i)=>(
<HourlyndDayily
key={i}
time={time[i]}
desc={desc[i]}
temp={tmp[i]}
/>
))

          }
          </section>
          </div>

          </main>
        </div>
    </div>
    :
    <div className='w-full h-screen grid place-content-center'>
      <h1 className='text-[2rem] leading-[4rem]'>Welcome to my Weather App</h1>
      <input className='w-[30rem] text-red-400' placeholder='Enter the name of your city for forcast' type="text"
      onChange={(e)=>setCity(e.target.value)}
       />
    </div>
    }
  </div>   

  )
}

export default Structure