import React from 'react'
import ButtonNavBar from '../../components/ButtonNavBar'
import Footer from '../../components/Footer'
import Header2 from '../../components/Header2'
import NavBar from '../../components/NavBar'
import Details from './Details'

const ProductDetail = () => {
  return (
    <div className='bg-[#eff7fa]'>
        <NavBar />
        <ButtonNavBar />
        <Header2 text={
            <div className='flex items-center space-x-2'>
                <a href="/shop">Shop / </a>
                <p> King's bed</p>
            </div>
        } />
        <Details />
        <Footer />
    </div>
  )
}

export default ProductDetail