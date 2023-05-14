import React, { useState } from 'react'
import "./Structure.css"
import Box from './Box'
import Weatherforms from './Weatherforms'
import Lefttopleft from './Lefttopleft'
import { useEffect } from 'react'
import axios from 'axios'
import HourlyndDayily from './HourlyndDayily'
export const MyContext = React.createContext();

const Structure = () => {
 
  const days =['A Day Interval','3 Hours Interval']
  const days2= ['','','','','','','','']

  
  const [dataAPI, setDataApi] = useState([])
  const [tmp, setTmp] = useState([])
  const [time, settime] = useState([])
  const [desc, setdesc] = useState([])
  const [cityname, setcityname] = useState([])
  const [pressure, setpressure] = useState([])
  const [humidity, sethumidity] = useState([])
  const [wind, setwind] = useState([])
  const [swt, setswt] = useState(0)

  const city= "nigeria"

  console.log(tmp)
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
     for(const c of res.data.list){
     tmpArr.push(c.main.temp)
     times.push(c.dt_txt)
     desc.push(c.weather[0].description)
     }
     setTmp(tmpArr)
     settime(times)
     setdesc(desc)
  })
  .catch(err=>{
      console.log(err+'errrrrrrrrrrr')
  })
}
console.log(desc)
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
console.log(dataAPI)
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
const myVariable = "hello world"
  return (
    
    <div className='structureW'>
      <div className="stleftW">

        <div className="lefttop">
          <h1>Weather Forcast App</h1>
          
         <Lefttopleft
         arr={topleftdata}
         city={`${cityname}`}/>
      
<div className="lefttopright">
<div className="chartjsW">
      </div>
</div>
      
        </div>

        <div className="leftbottom">
          {
            days2.map((d,i)=>(
              <Box key={i} />
            ))
    
          }
       
        </div>

      </div>
        <div className="strightW">
          <div className="inputW">
            <input type="text" name="" id="" />
            <img src="/media/map.png" alt="" />
            <button>search</button>
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
                             
            // <div key={i} className="eachline">
            //   <div className='eachImg'>
            //   <img src="/media/cloud1.png" alt="" />
            //   </div>
            //   <div className="date">
            //     <p>{a.time}</p>
            //     <p>{a.desc}</p>
            //     </div>

            //     <div className="temperatures">
            //       <div className="divid"></div>
            //       <div className="tempshow">
            //       <p>{Math.round(a.temp)}</p>
            //      <p><sup className='text-[0.5rem]'>o</sup>C</p>
            //       </div>
                 
            //     </div>
            // </div>
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
  )
}

export default Structure