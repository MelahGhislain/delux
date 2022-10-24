import React from 'react'
import ButtonNavBar from '../../components/NavBars/BottomNavBar'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import NavBar from '../../components/NavBars/NavBar'
import CartBody from './CartBody'

const Cart = () => {
  return (
    <div>
        <NavBar />
        <ButtonNavBar />
        <Header text="cart" title="Cart"/>
        <CartBody />
        <Footer />

    </div>
  )
}

export default Cart