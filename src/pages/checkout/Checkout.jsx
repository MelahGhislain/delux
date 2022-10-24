import React from 'react'
import ButtonNavBar from '../../components/NavBars/BottomNavBar'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import NavBar from '../../components/NavBars/NavBar'
import CheckoutBody from './CheckoutBody'

const Checkout = () => {
  return (
    <div>
        <NavBar />
        <ButtonNavBar />
        <Header text="Checkout" title="Checkout"/>
        <CheckoutBody />
        <Footer />
    </div>
  )
}

export default Checkout