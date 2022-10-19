import React from 'react'
import ButtonNavBar from '../../components/ButtonNavBar'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import NavBar from '../../components/NavBar'
import ContactBody from './ContactBody'

const Contact = () => {
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