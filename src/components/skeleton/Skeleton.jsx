import React from 'react'
import "./style.css"

const Skeleton = ({count}) => {
    
  return (
    <div className='container mx-auto grid grid-cols-4 max-[900px]:grid-cols-3 max-[800px]:grid-cols-2 p-3 max-[700px]:grid-cols-2 gap-5 max-[700px]:gap-2 max-[700px]:w-[450px] max-[700px]:h-[100px]'>
       {
        Array(count).fill("").map((_, index) => (
            <div key={index} className='h-[620px] border'>
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