import React, { useContext, useEffect } from 'react'
import ButtonNavBar from '../../components/NavBars/BottomNavBar'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import NavBar from '../../components/NavBars/NavBar'
import ContactBody from './ContactBody'
import AppContext from '../../context/AppContext'

const Contact = () => {
  const {setCurrPage} = useContext(AppContext)
  useEffect(()=>{
    setCurrPage('contact')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
        <NavBar />
        <ButtonNavBar />
        <Header text="Contact" title="Contact"/>
        <ContactBody />
        <Hero />
        <Footer />

    </div>
  )
}

export default Contact