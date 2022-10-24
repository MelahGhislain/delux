import React from 'react'
import img15 from '../../assets/images/banner/15.jpeg'
import img16 from '../../assets/images/banner/16.jpeg'
import img17 from '../../assets/images/banner/17.jpeg'
import img18 from '../../assets/images/banner/18.jpeg'

const InteriorDesignGrid = () => {
  return (
    <div className='my-10 md:my-16 '>
        <div className='flex items-center lg:space-x-4 flex-col lg:flex-row space-y-4 lg:space-y-0'>
            <div className='relative flex-1 overflow-hidden banner w-full'>
                <img src={img15} alt="lights" className='transition-all duration-500 image w-full h-[18rem] md:h-[25rem] lg:h-full' />
                <div className='absolute top-0 w-full h-full pl-4 md:pl-10 flex flex-col justify-center'>
                    <p className=''>20% Off! Limited week deal</p>
                    <h2 className='text-2xl font-extrabold text-green-500 my-6'>FOR INTERIOR DESIGNS</h2>
                    <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Consequuntur, temporibus?</p>
                    <button className='mt-4 text-xs font-extralight w-max px-4 py-2 rounded-full text-white bg-gradient-to-r from-orange-400 to-orange-500'>
                        DISCOVER NOW
                    </button>
                </div>
            </div>

            <div className='flex-1 flex flex-col space-y-4 w-full'>
                <div className='relative overflow-hidden banner w-full'>
                    <img src={img16} alt="lights" className='transition-all duration-500 image w-full h-[15rem] md:full' />
                    <div className='absolute top-0 w-full h-full pl-4 md:pl-10 flex flex-col justify-center'>
                        <p className='text-gray-600'>Rezer</p>
                        <h2 className='text-2xl font-extrabold text-green-500 md:my-3'>CLASSIC <br /> INTERIOR DESIGN</h2>
                        <button className='mt-4 text-xs font-extralight w-max px-4 py-2 rounded-full text-white bg-gradient-to-r from-orange-400 to-orange-500'>
                            DISCOVER NOW
                        </button>
                    </div>
                </div>

                <div className='flex items-center md:space-x-4 flex-col space-y-4 md:space-y-0 md:flex-row w-full'>
                    <div className='relative flex-1 overflow-hidden banner w-full'>
                        <img src={img17} alt="lights" className='transition-all w-full h-[18rem] md:h-full duration-500 image' />
                        <div className='absolute top-0  h-max w-full py-6 flex justify-center'>
                            <div className='w-full text-center'>
                                <div className='text-gray-600 flex justify-center items-center space-x-2 w-full'> 
                                    <div className='h-0.5 w-10 bg-gray-500  flex-none'></div> 
                                    <p className='text-sm'>EXCLUSIVE</p> 
                                    <div className='h-0.5 w-10 bg-gray-500 flex-none'></div>
                                </div>
                                <h2 className='text-lg font-extrabold text-green-500 '>LIVING SOFA </h2>
                                <p className='text-gray-500 font-bold'>FOR SALE ONLY <span className=' text-orange-500 '>100K XAF</span></p>
                            </div>
                            
                        </div>
                    </div>
                    <div className='flex-1 relative overflow-hidden banner w-full'>
                        <img src={img18} alt="lights" className='transition-all w-full h-[18rem] md:h-full duration-500 image' />
                        <div className='absolute bottom-0  h-max w-full py-6 flex justify-center'>
                            <div className='w-full text-center'>
                                <div className='text-gray-600 flex justify-center items-center space-x-2 w-full'> 
                                    <div className='h-0.5 w-10 bg-gray-500  flex-none'></div> 
                                    <p className='text-sm'>BEST 2022 GEAR</p> 
                                    <div className='h-0.5 w-10 bg-gray-500 flex-none'></div>
                                </div>
                                <h2 className='text-lg font-extrabold text-green-500 '>MINI TABLE</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InteriorDesignGrid