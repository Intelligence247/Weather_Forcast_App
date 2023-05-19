import React from 'react'

const DefaultInputs = ({fetchData,setCity,city}) => {
  return (
    <div className='w-screen h-screen grid place-content-center'>
      <form onSubmit={fetchData}
      className='w-full h-screen grid place-content-center'
      >
      <h1 className='text-[2rem] leading-[4rem] text-[#3594ca] font-[900]'>Welcome to my Weather App</h1>
      <div>
      <input className='w-[30rem]  h-8 pl-2 rounded-lg text-[#3594ca] bg-transparent border-[#3594ca] border-2 outline-none' placeholder='Enter the name of your city for forcast' type="text"
      value={city}
      onChange={(e)=>setCity(e.target.value)}
       />
       </div>
       </form>
    </div>
  )

}

export default DefaultInputs