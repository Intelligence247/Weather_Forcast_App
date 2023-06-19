import React from 'react'
import Weatherforms from './Weatherforms'
import "./Structure.css"
const Lefttopleft = (props) => {
const {arr}=props
  return (
    
    <div className="flex justify-start flex-col items-center gap-4  lg:border-r-2 border-r-0 lg:border-b-0 border-b-2 border-[rgba(255,255,255,0.3)] lg:w-full w-screen lg:h-full lg:pb-0 pb-8">
      <h1 className='text-[2rem] font-[600] text-opacity-50'>{props.city}</h1>
      <img src="/media/cloud3.png" 
      className=''
      alt="" />
          <div className='weatherforms'>
          {
            arr.map((a,i)=>(
              <Weatherforms
              key={i}
              img={a.img}
              level={a.level}
              what={a.desc}
              unit={a.unit}
              />
            ))
          } 
      </div>

          </div>
  )
}

export default Lefttopleft