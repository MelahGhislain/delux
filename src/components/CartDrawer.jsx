import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import Badge from './Badge'
import cart from '../assets/images/png/png8.png'


const CartDrawer = () => {
    const {openCartDrawer, setOpenCartDrawer} = useContext(AppContext)
    
    return (
      <>
      {openCartDrawer && <div className='flex h-screen fixed top-0 w-full z-50'>
              <div className='bg-black/70 flex-auto' onClick={()=>setOpenCartDrawer(false)}></div>
              
              <div className='w-[25rem] bg-white flex flex-col h-full'>
                {/* Header */}
                  <div className='flex-none flex justify-center items-center bg-black p-3'>
                      
                      <h2 className='font-bold text-white flex justify-between w-full items-center'>
                        <p>My Cart (1 item)</p>
                        <span className='text-black bg-white h-6 w-6 rounded-full flex justify-center items-center cursor-pointer' onClick={()=>setOpenCartDrawer(false)} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                            </svg>
                        </span>
                      </h2>
                    
                  </div>

                  {/* Body */}
                  <div className='flex-auto overflow-y-auto bg-[#eff7fa] p-4 space-y-4 scrollbar-hide'>
                        <Cart />
                        <Cart />
                        <Cart />
                        <Cart />
                        <Cart />
                        <Cart />
                  </div>

                  {/* footer */}
                  <div className='bg-white flex-none px-4 pb-4'>
                    <div className='flex justify-between items-center py-4'>
                        <p className='text-xs text-gray-500 font-light'>subtotal</p>
                        <p className='text-sm font-bold text-gray-600'>200 XAF</p>
                    </div>
                    <a href="/cart">
                        <button className='bg-gradient-to-r from-orange-400 to-orange-600 text-white p-4 text-sm font-light w-full mb-2'>
                            View cart
                        </button>
                    </a>
                    <a href="/checkout">
                        <button className='bg-gradient-to-r from-orange-400 to-orange-600 text-white p-4 text-sm font-light w-full'>
                            Checkout
                        </button>
                    </a>
                  </div>
              </div>
              
          </div>}
      </>
    )
}

export default CartDrawer

function Cart(){
    return(
        <div className="border shadow-md rounded p-2 flex items-center space-x-2">
            <div className='shadow w-20'>
                <img src={cart} alt="cart" className='h-full w-full object-cover' />
            </div>
            <div className='flex-1'>
                <div className='flex items-center justify-between'>
                    <Badge bg="bg-green-50 text-green-700 px-2" text="20% OFF" />
                    <span className='text-sm px-2 cursor-pointer'>x</span>
                </div>
                <h5 className='text-teal-400 font-bold'>Native Organic Papaya</h5>
                <p className='text-xs text-gray-500 '>- 1 piece</p>
                <p className='text-sm font-bold'>2 x 200k XAF</p>
            </div>
        </div>
    )
}
