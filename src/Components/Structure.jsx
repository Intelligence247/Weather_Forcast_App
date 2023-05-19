import React, { useState } from 'react'
import "./Structure.css"
import Box from './Box'
import Lefttopleft from './Lefttopleft'
import { useEffect } from 'react'
import axios from 'axios'
import HourlyndDayily from './HourlyndDayily'
import App from '../App'
import LineChart from './LineChart'
import DefaultInputs from './DefaultInputs'
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
  const [main, setmain] = useState([])
 const [city, setCity] = useState('')
 const datum = dataAPI
 
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=9f90a349f83eff086947292eeda42dec&units=metric`
  // axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=8.475&lon=4.6727168&appid=9f90a349f83eff086947292eeda42dec&units=metric`)


// const fecth = (params)=>{
//   const result = axios.get(`url/${params}`).then()
// }

 const fetchData=  async (params)=>{
  params.preventDefault()
  axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b52ebf3479c0ba50f0f006fd016ff13e&units=metric`)
  .then(res=>{
   setDataApi(res.data.list)
   sethumidity(res.data.list[0].main.humidity)

   setwind()
   setpressure(res.data.list[0].main.humidity)
     setcityname(`${res.data.city.name}, ${res.data.city.country}`)
     setCity(`${res.data.city.name}`)
     setwind(res.data.list[0].wind.speed)
      let tmpArr= []
      let times = []
      let desc =[]
      let feelslike=[]
      let main = []
     for(const c of res.data.list){
     tmpArr.push(c.main.temp)
     times.push(c.dt_txt)
     feelslike.push(c.main.feels_like)
     desc.push(c.weather[0].description)
     main.push(c.weather[0].main)
     
     }
    
     setTmp(tmpArr)
     settime(times)
     setdesc(desc)
     setfeels(feelslike)
     setmain(main)
     console.log(main)
   setCity('')



  })
  .catch(err=>{
    console.log(err+' '+'Error here')
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
    main: main[0]
  },{
    time: time[7],
    temp: tmp[7],
    desc: desc[7],
    main: main[7],
  },
  {
    time: time[15],
    temp: tmp[15],
    desc: desc[15],
    main: main[15],

  },
  {
    time: time[23],
    temp: tmp[23],
    desc: desc[23],
    main: main[23],
    
  },
  {
    time: time[33],
    temp: tmp[33],
    desc: desc[33],
    main: main[33],

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
  
const months = ["January", 'February', 'March', "April", 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


const userData={ 
  labels:alldata1.map((t)=>t.time),
 
  datasets:[{
    label:'Temperature',
    fill: {
      target: "origin",
      above: "rgba(0,0,0,0.5)",
  
    },
    data: alldata1.map((t)=>(t.temp)),
    borderColor:'rgba(255,255,255,0.6)',
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
        fontColor: 'yellow', // Change the color of y-axis labels
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
      titleColor: '#2c7098', // Change the color of tooltip title
      bodyColor: '#2c7098' // Change the color of tooltip body
    }
  }

}}


return (
    <div className='grid w-screen h-screen place-items-center overflow-hidden'>

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
          <p className='fixed mr-[4rem] h-[8rem] px-2 grid place-items-center bg-[#203d52] bg-opacity-90 '>Feels Like</p>
          {
            swt===0?
            alldata1.map((d,i)=>(
              <Box key={i} 
              time={months[parseInt(d.time.slice(5,7))] +' '+ d.time.slice(8,11)}
              level={Math.round(dailyFeels[i])}
              img={d.main}
              />
            ))
    :
    feels.map((d,i)=>(
      <Box key={i} 
      time={time[i].slice(11,16)}
      level={Math.round(d)}
      img={main[i]}
      />
    ))
          }
       
        </div>

      </div>
        <div className="strightW">
          <div className="">
             <form className='inputW' onSubmit={fetchData}>
            <input type="text" 
            onChange={(e)=>setCity(e.target.value)}

             id="" 

             value={city}
             />
             {/* <button onClick={()=>handleClicks}>search</button> */}
            <img src="/media/map.png" alt="" />
             <button
            >search</button> 
            </form> 
          </div>

          <div className="deg">
            <img src={`/media/${main[0]}.png`} alt="" />
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
            time={months[parseInt(a.time.slice(5,7))] +' '+ a.time.slice(8,11)}
            desc={a.desc}
            temp={a.temp}
            img={a.main}
            />

            ))
:
time.map((t,i)=>(
<HourlyndDayily
key={i}
time={months[parseInt(time[i].slice(5,7))] +' '+ time[i].slice(8,11)+' '+time[i].slice(11,16)}

desc={desc[i]}
temp={tmp[i]}
img={main[i]}
/>
))

          }
          </section>
          </div>

          </main>
        </div>
    </div>
    :
    <DefaultInputs
    setCity={setCity}
    city={city}
    fetchData={fetchData}
    />
    }
  </div>   

  )
}

export default Structure