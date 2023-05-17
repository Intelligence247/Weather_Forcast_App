import React from 'react'

const HourlyndDayily = (props) => {
  return (
      <div  className="eachline">
              <div className='eachImg'>
              <img src={`/media/${props.img}.png`} alt="" />
              </div>
              <div className="date">
                <p>{props.time}</p>
                <p>{props.desc}</p>
                </div>

                <div className="temperatures">
                  <div className="divid"></div>
                  <div className="tempshow">
                  <p>{Math.round(props.temp)}</p>
                 <p><sup className='text-[0.5rem]'>o</sup>C</p>
                  </div>
                 
                </div>
            </div>
  )
}

export default HourlyndDayily