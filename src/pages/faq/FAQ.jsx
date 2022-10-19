import React from 'react'
import ButtonNavBar from '../../components/ButtonNavBar'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import NavBar from '../../components/NavBar'
import FAQBody from './FAQBody'

const FAQ = () => {
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