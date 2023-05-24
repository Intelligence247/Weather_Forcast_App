import React from 'react'

const HourlyndDayily = (props) => {
  return (
      <div  className="eachline flex items-center lg:w-full w-[100vw] gap-2 lg:justify-start justify-between h-10 mb-5 hover:bg-black hover:bg-opacity-20 cursor-default pl-1 lg:px-2 px-8 p rounded-lg py-2">
              <div className='eachImg'>
              <img src={`/media/${props.img}.png`} alt="" />
              </div>
              <div className="date lg:w-[10rem]">
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