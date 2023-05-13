import React from 'react'

const Weatherforms = ({img,level,what}) => {
  return (
    <div className='w-[8rem] hover:bg-black hover:bg-opacity-30 h-[9rem] rounded-lg flex flex-col items-center justify-center gap-1 border-[1px] border-opacity-30 border-white cursor-default'>        
        <img 
        className='w-10'
         src={img} alt="" />
        <div>{level}</div>
        <div className="text-white text-opacity-70">{what}</div>
    
    </div>
  )
}

export default Weatherforms