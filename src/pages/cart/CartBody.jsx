import React, { useState } from 'react'
import cart from '../../assets/images/png/png8.png'
import cart1 from '../../assets/images/png/png5.png'
import cart2 from '../../assets/images/png/png6.png'
const items = [
    {
        image: cart,
        title: "Soft Couch",
        price: "200,000",
        quantity: 2,
        subtotal: "400,000"
    },
    {
        image: cart1,
        title: "Soft Couch",
        price: "200,000",
        quantity: 2,
        subtotal: "400,000"
    },
    {
        image: cart2,
        title: "Soft Couch",
        price: "200,000",
        quantity: 2,
        subtotal: "400,000"
    },
]

const CartBody = () => {
    // eslint-disable-next-line no-unused-vars
    const [cartItems, setCartItems] = useState(items)
    const [adress, setAdress] = useState(false)
  return (
    <div className='bg-[#eff7fa] px-4 md:px-10 shadow-md py-10'>
        <div className='bg-white'>

            <div class="overflow-x-auto relative">
                <table class="w-full text-sm text-left text-gray-500 ">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 py-2">
                        <tr className='border-b py-2'>
                            <th scope="col" class="py-3 px-6 text-gray-500">
                                
                            </th>
                            <th scope="col" class="py-3 px-6 text-gray-500">
                                Product
                            </th>
                            <th scope="col" class="py-3 px-6 text-gray-500">
                                Price
                            </th>
                            <th scope="col" class="py-3 px-6 text-gray-500">
                                Quantity
                            </th>
                            <th scope="col" class="py-3 px-6 text-gray-500">
                                Subtotal
                            </th>
                            <th scope="col" class="py-3 px-6 text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            cartItems.map((item, index)=>(
                                <Item key={index} data={item} />
                            ))
                        }
                         
                    </tbody>
                </table>
            </div>

            {/* coupon */}
            <div className='flex items-center justify-between px-4 flex-col md:flex-row space-y-2 md:space-y-0'>
                <form className='flex items-center md:py-4 md:space-x-2 flex-col md:flex-row space-y-2 md:space-y-0 py-2 w-full'>
                    <input type="text" className='border py-1 px-2 w-full md:w-max' placeholder='Coupon code' />
                    <button className='bg-gradient-to-r from-orange-400 to-orange-500 py-2 px-3 text-white text-xs w-full md:w-max'>APPLY COUPON</button>
                </form>
                <button className='bg-gradient-to-r from-orange-400 to-orange-500 py-2 px-3 text-white text-xs flex-none w-full md:w-max'>UPDATE CART</button>
            </div>

            {/* Cart total */}
            <div className='mt-5'>
                <h3 className='px-4 text-2xl text-gray-600'>Cart totals</h3>
                <div class="overflow-x-auto relative px-4">
                <table class="w-full text-sm text-left text-gray-500 ">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 py-2">
                        <tr className='border-b py-2'>
                            <th scope="col" class="py-3 px-6 text-gray-500">
                                
                            </th>
                            <th scope="col" class="py-3 px-6 text-gray-500">
                               
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr className="bg-white border">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap border-r">
                                Subtotal
                            </th>
                            <td className="py-4 px-6">
                                400,000 XAF
                            </td>
                        </tr>

                        {/* Shippig */}
                        <tr className="bg-white border">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap border-r">
                                Shipping
                            </th>
                            <td className="py-4 px-6">
                                <form >
                                    <div className='flex items-center space-x-2 text-xs text-gray-500 mb-3'>
                                        <input type="radio" name='rate' value={true}/>
                                        <label htmlFor="rate">Flat rate</label>
                                    </div>
                                    <div className='flex items-center space-x-2 text-xs text-gray-500 mb-3'>
                                        <input type="radio" name='rate'/>
                                        <label htmlFor="rate">Free Shipping</label>
                                    </div>
                                </form>
                                <p className='text-sm text-gray-500 mb-3'>Shipping to <span className='font-bold'>Cameroon</span></p>

                                {/* Change Adress */}
                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500 transition-all duration-500 hover:text-orange-600 cursor-pointer w-max py-2' onClick={()=>setAdress(!adress)}>Change adress</p>
                                    
                                    
                                    {adress && <form className=''>
                                        <div className='mb-2'>
                                            <input type="text" className='border w-full px-2 py-2 outline-none' value="Cameroon" />
                                        </div>
                                        <div className='mb-2'>
                                            <input type="text" className='border px-2 py-2 outline-none' placeholder='State / Country'/>
                                        </div>
                                        <div className='mb-2'>
                                            <input type="text" className='border px-2 py-2 outline-none' placeholder='Town / City'/>
                                        </div>
                                        <div className='mb-2'>
                                            <input type="text" className='border px-2 py-2 outline-none' placeholder='Postcode / ZIP'/>
                                        </div>
                                        <button className='bg-gradient-to-r from-orange-400 to-orange-500 py-2 px-3 text-white text-xs'>Update</button>
                                    </form>}


                                </div>
                            </td>
                        </tr>
                        {/* total */}
                        <tr className="bg-white border">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap border-r">
                                total
                            </th>
                            <td className="py-4 px-6">
                                500,000 XAF
                            </td>
                        </tr>
                         
                    </tbody>
                </table>
                <a href="/checkout">
                    <button className='my-4 bg-gradient-to-r from-orange-400 to-orange-500 py-2 px-3 text-white text-xs flex-none w-full md:w-max'>PROCEED TO CHECKOUT</button>
                </a>
            </div>

            </div>

        </div>
    </div>
  )
}

export default CartBody

function Item({data}){
    return (
        <tr className="bg-white border-b ">
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                <div className='shadow w-20'>
                    <img src={data.image} alt="cart" className='h-full w-full object-cover' />
                </div>
            </th>
            <td className="py-4 px-6">
                {data.title}
            </td>
            <td className="py-4 px-6">
                {data.price} XAF
            </td>
            <td className="py-4 px-6">
                
                <input type="number" value={data.quantity} className="border py-2 px-1 outline-none" />
                
            </td>
            <td className="py-4 px-6">
                {data.subtotal} XAF
            </td>
            <td className="py-4 px-6">
                <button className='bg-gradient-to-r from-orange-400 to-orange-500 text-white p-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>
            </td>
        </tr>
    )
}
