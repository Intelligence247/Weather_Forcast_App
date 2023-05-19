import React from 'react'

const Box = ({img, time,level}) => {
  return (
    <div className='boxes flex justify-center items-center w-20 min-w-[5rem] flex-col bg-black bg-opacity-[0.35] rounded-lg gap-1 border-white border-opacity-30 border-[1px]'> 
        <div className="time text-opacity-80">{time}</div>
        <p className='w-[80%] bg-white h-[1px] bg-opacity-40'></p>
        <div className='flex justify-center items-center bg-white bg-opacity-20 mt-2 rounded-lg'>
            <img src={`/media/${img}.png`} 
            className='w-14'
            alt="" />
            </div>
            <p className='text-opacity-80'>{level}</p>
    </div>
  )
}

export default Box