import React from 'react'
import ButtonNavBar from '../../components/NavBars/BottomNavBar'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import NavBar from '../../components/NavBars/NavBar'
import AccountBody from './AccountBody'

const Account = () => {
  return (
    <div>
        <NavBar />
        <ButtonNavBar />
        <Header text="account" title="My Account"/>
        <AccountBody />
        <Footer />

    </div>
  )
}

export default Account