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
import Hero from '../../components/Hero'

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


