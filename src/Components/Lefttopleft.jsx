import React from 'react'
import Weatherforms from './Weatherforms'

const Lefttopleft = () => {
  const arr = ['','','','']
  return (
    <div className="lefttopleft flex justify-start flex-col items-center gap-4">
      <h1>ILORIN, NG</h1>
      <img src="/media/cloud3.png" 
      className=''
      alt="" />
          <div className='weatherforms flex flex-wrap gap-4 justify-center'>
          {
            arr.map((a)=>(
              <Weatherforms
              img="./media/pressure.png"
              level={<p>38<sup>o</sup>C</p>}
              what={'Pressure'}
              />
            ))
          } 
       
      </div>

          </div>
  )
}

export default Lefttopleft