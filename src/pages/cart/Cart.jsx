import React from 'react'
import ButtonNavBar from '../../components/ButtonNavBar'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import NavBar from '../../components/NavBar'
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