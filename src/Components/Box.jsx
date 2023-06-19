import React from 'react'

const Box = ({img, time,level}) => {
  return (
    <div className='boxes flex justify-center items-center w-20 min-w-[5rem] flex-col bg-black bg-opacity-[0.35] rounded-lg gap-[0.07rem] border-white border-opacity-30 border-[1px]'> 
        <div className="time text-opacity-80">{time}</div>
        <p className='w-[60%] bg-white h-[1px] bg-opacity-40'></p>
          <p className='text-sm'>feels like</p>

        <div className='flex justify-center items-center bg-white bg-opacity-20 mt-2 rounded-lg'>
            <img src={`/media/${img}.png`} 
            className='w-12'
            alt="" />
            </div>
            <p className='text-opacity-80'>{level}<sup>o</sup> </p>
    </div>
  )
}

export default Box