import React from 'react'

const Banner = ({img}) => {
  return (
    <div className='px-4 md:px-10 py-4 w-full h-52 flex items-center'>
        {
            img.map((item, index)=>(
                <img key={index} src={item} alt="banner" className='w-full h-full flex-1'/>
            ))
        }
    </div>
  )
}

export default Banner