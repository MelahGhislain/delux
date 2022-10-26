import React, { useContext, useEffect } from 'react'
import ButtonNavBar from '../../components/NavBars/BottomNavBar'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import NavBar from '../../components/NavBars/NavBar'
import FAQBody from './FAQBody'
import AppContext from '../../context/AppContext'

const FAQ = () => {
  const {setCurrPage} = useContext(AppContext)
  useEffect(()=>{
    setCurrPage('faq')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
        <NavBar />
        <ButtonNavBar />
        <Header text="FAQ" title="FAQ"/>
        <FAQBody />
        <Hero />
        <Footer />

    </div>
  )
}

export default FAQ