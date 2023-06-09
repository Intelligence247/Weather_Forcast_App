import React from 'react'

const DefaultInputs = ({fetchData,setCity,city, errM}) => {
  return (
    <div className='w-screen h-screen grid place-content-center'>
      <form onSubmit={fetchData}
      className='w-full h-screen grid place-content-center'
      >
      <h1 className='lg:text-[2rem] m-auto text-[1.2rem] leading-[4rem] text-[#3594ca] font-[900]'>Welcome to my Weather App</h1>
      <img src="/media/cloud3.png" alt="" className='lg:w-40 w-max m-auto' />
      <div className='flex flex-col gap-4 justify-center items-center'>
        <div className='flex h-12 lg:w-[30rem] w-[95vw] justify-center items-center border-[#3594ca] border-2 px-4 rounded-md gap-3'>
      <input className='lg:w-[30rem] w-[100%]  h-8 pl-2 rounded-lg text-[#3594ca] bg-transparent border-[#3594ca] border-2 outline-none' placeholder='Enter City or Country' type="text"
      value={city}
      onChange={(e)=>setCity(e.target.value)}
       />
       <img src="/media/map.png" 
       onClick={fetchData}
       alt="" />
       </div>
       <p className='text-red-500 text-[1.2rem] h-8 uppercase'>{errM}</p>
       </div>

       </form>
    </div>
  )

}

export default DefaultInputs