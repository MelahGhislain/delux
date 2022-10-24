import React from 'react'
import couch9 from "../../assets/images/sofa/sofa.jpeg"
import couch11 from "../../assets/images/couch/couch4.jpeg"
import CarouselSlider from '../../components/CarouselSlider';
import couch from "../../assets/images/couch/couch8.jpeg"
import chair from "../../assets/images/chair/chair.jpeg"
import bed from "../../assets/images/bed/bed1.jpeg"
const items = [
    {
        image: couch,
        title: "Couch",
        qty: "2"
    },
    {
        image: chair,
        title: "Chairs",
        qty: "10"
    },
    {
        image: bed,
        title: "Beds",
        qty: "8"
    },
    {
        image: couch,
        title: "Couch",
        qty: "2"
    },
    {
        image: chair,
        title: "Chairs",
        qty: "10"
    },
    {
        image: bed,
        title: "Beds",
        qty: "8"
    },
]

const Carousel = ({showCategory, setShowCategory}) => {
  return (  
    <div className='px-2 md:px-10 flex h-[15rem] sm:h-[18rem] md:h-[20rem] lg:h-[25rem] mt-2'>
        <div className='hidden md:block w-52 lg:w-72 h-max'>
            {/* Toggle */}
            <div className='py-3 px-4 flex justify-between w-full items-center bg-gradient-to-r from-orange-400 to-orange-500 text-white md:hidden'>
                <p className='font-normal'>All Categories</p>
                <span className='cursor-pointer' onClick={()=>setShowCategory(curr => !curr)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </span>
            </div>
            <div className={`w-full transition-all duration-700 ${showCategory? "h-full": "h-0 overflow-hidden"} bg-white shadow-md`}>
                <ul >
                    {
                        items.map((item, index) => (
                            <CategoryItem key={index} data={item} />  
                        ))
                    }
                    
                </ul>
            </div>
        </div>
        <div className=' flex-1 md:ml-8 h-full'>
            <CarouselSlider items={items} />
        </div>
    </div>
  )
}

export default Carousel

function CategoryItem({data}){
    return (
        <li className='relative flex items-center justify-between px-3 py-2 cursor-pointer transition-all duration-300 text-sm text-neutral-500 border-b category-item hover:bg-[#eff7fa]'>
            <div className='absolute top-0 left-0 transition-all duration-300 w-0 h-full bg-teal-500 border-item'></div>
            <div className='flex items-center space-x-3'>
                
                <div className='bg-white h-[1.8rem] w-[1.8rem] flex items-center justify-center'>
                    <img src={data.image} alt={data.title} className="h-full w-full object-contain"/>
                </div>
                <div>{data.title}</div>
            </div>
            <div className='item text-xs h-full transition-all duration-300 py-1 px-1'>{data.qty}</div>
        </li>
    )
}