import React from 'react'
import ButtonNavBar from '../../components/NavBars/BottomNavBar'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import NavBar from '../../components/NavBars/NavBar'
import AboutBody from './AboutBody'

const About = () => {
  return (
    <div>
        <NavBar />
        <ButtonNavBar />
        <Header text="About Us" title="About Us"/>
        <AboutBody />
        <Footer />
    </div>
  )
}

export default About