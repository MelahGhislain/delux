import React, { useContext, useState } from 'react'
import Banner from '../../components/Banner'
import ButtonNavBar from '../../components/NavBars/BottomNavBar'
import NavBar from '../../components/NavBars/NavBar'
import Carousel from './Carousel'
import FurnitureRangeCarousel from './FurnitureRangeCarousel'
import bed from '../../assets/images/bed/bed7.jpeg'
import chair from '../../assets/images/chair/chair3.webp'
import sofa from '../../assets/images/sofa/sofa.jpeg'
import BestOffers from './BestOffers'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import AppContext from '../../context/AppContext'
import Trending from './Trending'
import InteriorDesignGrid from './InteriorDesignGrid'

const Home = () => {
  const {mobileNavBar} = useContext(AppContext)
  const [showCategory, setShowCategory] = useState(true)
  return (
    <div className='relative bg-[#eff7fa] scrollbar-hide'>
        <NavBar />
        <ButtonNavBar toggle={mobileNavBar} setShowCategory={setShowCategory} category={true} />
        <Carousel showCategory={showCategory} setShowCategory={setShowCategory} />
        <FurnitureRangeCarousel />
        <Trending />
        <InteriorDesignGrid />
        <BestOffers />
        <Banner img={[bed, chair, sofa]} />
        <Hero />
        <Footer />
    </div>
  )
}

export default Home


