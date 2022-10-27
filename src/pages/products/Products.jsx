import React, { useContext, useEffect } from 'react'
import ButtonNavBar from '../../components/NavBars/BottomNavBar'
import Footer from '../../components/Footer'
import Header2 from '../../components/Header2'
import NavBar from '../../components/NavBars/NavBar'
import ProductBody from './ProductBody'
import AppContext from '../../context/AppContext'

const Products = () => {
  const {setCurrPage} = useContext(AppContext)
  useEffect(()=>{
    setCurrPage('products')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className='bg-[#eff7fa]'>
        <NavBar />
        <ButtonNavBar />
        <Header2 text="Shop" />
        <ProductBody />
        <Footer />
    </div>
  )
}

export default Products