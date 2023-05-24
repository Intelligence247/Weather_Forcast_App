import React from 'react'

const Weatherforms = ({img,level,what,unit}) => {
  return (
    <div className='lg:w-[8rem] w-full hover:bg-black hover:bg-opacity-30 h-[8rem] rounded-lg flex flex-col items-center justify-center gap-1 border-[1px] border-opacity-30 border-white cursor-default'>        
        <img 
        className='w-10'
         src={img} alt="" />
        <div className='flex gap-[2px]'>{level} <span>{unit}</span></div>
        <div className="text-white text-opacity-70">{what}</div>
    
    </div>
  )
}

export default Weatherforms