import React from 'react'
import "./style.css"

const Skeleton = ({count}) => {
    
  return (
    <div className='container mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-5 gap-2'>
       {
        Array(count).fill("").map((_, index) => (
            <div key={index} className=' h-[620px] border'>
                <div className='w-full h-[420px] bg-gray-300 scelaton__animation'></div>
                <div className='w-10/12 h-7 bg-gray-300 my-3 scelaton__animation'></div>
                <div className='w-1/2 h-7 bg-gray-300 scelaton__animation'></div>
                <div></div>
            </div>
        ))
       }
    </div>
  )
}

export default Skeleton