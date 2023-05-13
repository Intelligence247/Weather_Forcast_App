import React from 'react'
import "./Structure.css"
import Box from './Box'
import Weatherforms from './Weatherforms'
import Lefttopleft from './Lefttopleft'

const Structure = () => {
  const days =['5 days','15 days','30 days']
  const days2= ['','','','','','','','','','']
  return (
    <div className='structureW'>
      <div className="stleftW">

        <div className="lefttop">
          <h1>Weather Forcast App</h1>
          
         <Lefttopleft/>
      
<div className="lefttopright">
<div className="chartjsW">

      </div>
</div>
      
        </div>

        <div className="leftbottom">
          {
            days2.map((d)=>(
              <Box/>
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
            <p>20oC</p>
            <p>lorem ipsumdi sued</p>
          </div>
          <div className="divider"></div>
          <main>
            <h1>The Next Days Forecast</h1>
          <div className="daysW">
            {
              days.map((day,i)=>(
                <p key={i}>{day}</p>
              ))
            }
          </div>
          <div className='sectionW'>
          <section className='scdsection'>
            {
              days2.map((a)=>(
                             
            <div className="eachline">
              <div className='eachImg'>
              <img src="/media/cloud1.png" alt="" />
              </div>
              <div className="date">
                <p>Friday, May 13</p>
                <p>Partly Cloudy</p>
                </div>

                <div className="temperatures">
                  <div className="divid"></div>
                  <div className="tempshow">
                  <p>200</p>
                 <p><sup className='text-[0.5rem]'>0</sup>C</p>
                  </div>
                 
                </div>
            </div>
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