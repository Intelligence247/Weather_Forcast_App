import React from 'react'
import Weatherforms from './Weatherforms'
// import Structure from './Structure'
const Lefttopleft = (props) => {
const {arr}=props
  // console.log(time)
  let a = 'usman'
  return (
    
    <div className="flex justify-start flex-col items-center gap-4 ">
      <h1 className='text-[2rem] font-[600] text-opacity-50'>{props.city}</h1>
      <img src="/media/cloud3.png" 
      className=''
      alt="" />
          <div className='weatherforms flex flex-wrap gap-4 justify-center'>
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