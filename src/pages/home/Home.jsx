import React, { useState } from 'react'
import Banner from '../../components/Banner'
import ButtonNavBar from '../../components/ButtonNavBar'
import NavBar from '../../components/NavBar'
import Carousel from './Carousel'
import TopSavers from './TopSavers'
import bed from '../../assets/images/bed/bed7.jpeg'
import chair from '../../assets/images/chair/chair3.webp'
import sofa from '../../assets/images/sofa/sofa.jpeg'
import BestOffers from './BestOffers'
import Footer from '../../components/Footer'

const Home = () => {
  const [toggle, setToggle] = useState(false)
  const [showCategory, setShowCategory] = useState(true)
  return (
    <div className='relative bg-[#eff7fa] scrollbar-hide'>
        <NavBar setToggle={setToggle} />
        <ButtonNavBar toggle={toggle} setShowCategory={setShowCategory} category={true} />
        <Carousel showCategory={showCategory} setShowCategory={setShowCategory} />
        <TopSavers />
        <Banner img={[bed, chair, sofa]} />
        <BestOffers />
        <Hero />
        <Footer />
    </div>
  )
}

export default Home

function Hero(){
  return (
    <div className='bg-white px-4 md:px-10 border-y py-6'>
        <div className='w-full grid items-center grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))] md:gap-x-6 gap-y-6'>
            <HeroCard 
              svg={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>
              }
              title="Free & Next Day Delivery"
              text="Lorem ipsum dolor sit amet, cons..."
            />
            <HeroCard 
              svg={
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket3" viewBox="0 0 16 16">
                  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z"/>
                </svg> 
              }
              title="100% Satisfaction Guarantee"
              text="Lorem ipsum dolor sit amet, cons..."
            />
            <HeroCard 
              svg={
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tags" viewBox="0 0 16 16">
                  <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"/>
                  <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"/>
                </svg> 
              }
              title="Great Daily Deals Discount"
              text="Lorem ipsum dolor sit amet, cons..."
            />
            
        </div>
    </div>
  )
}

function HeroCard({svg, title, text}){
  return (
    <div className='flex items-center space-x-4 flex-1'>
        <div className='border rounded-full h-16 w-16 flex items-center justify-center border-teal-700 text-teal-700'>
          <span>
            {svg}
          </span>
        </div>
        <div>
          <h5 className='font-bold text-teal-700'>{title}</h5>
          <p className='text-xs text-gray-500'>{title}</p>
        </div>
    </div>
  )
}

