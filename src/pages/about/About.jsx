import React, { useContext, useEffect } from 'react'
import ButtonNavBar from '../../components/NavBars/BottomNavBar'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import NavBar from '../../components/NavBars/NavBar'
import AboutBody from './AboutBody'
import AppContext from '../../context/AppContext'

const About = () => {
  const {setCurrPage} = useContext(AppContext)
  useEffect(()=>{
    setCurrPage('about')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
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