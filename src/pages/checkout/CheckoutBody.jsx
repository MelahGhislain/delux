import React from 'react'

const CheckoutBody = () => {
  return (
    <div className='bg-[#eff7fa] px-4 md:px-10 shadow-md py-10'>
        <div className='bg-white text-sm text-gray-500 py-8 px-4 border rounded-lg'>
            <div className='flex items-center '><p>Have a coupo code?</p> <a href="/" className='ml-2 duration-300 transition-all hover:text-orange-600'>click here to enter code</a></div>
        </div>

        <div className='bg-white my-4 border rounded-lg px-4 py-4'>
            <h3 className='text-2xl font-bold text-gray-800 mb-2'>Billing Details</h3>
            <form>
                <div className='flex md:items-center mb-6 md:space-x-8 flex-col md:flex-row space-y-4 md:space-y-0'>
                    <div className="flex-1">
                        <label for="fName" className="block mb-2 text-sm text-gray-400 ">First name</label>
                        <input type="text" name="fName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-full focus:outline-none" placeholder="" />
                    </div>
                    <div className="flex-1">
                        <label for="lName" className="block mb-2 text-sm text-gray-400 ">Last name</label>
                        <input type="text" name="lName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-full focus:outline-none" placeholder="" />
                    </div>
                </div>
                <div className='flex md:items-center mb-6 md:space-x-8 flex-col md:flex-row space-y-4 md:space-y-0'>
                    <div className="flex-1">
                        <label for="phone" className="block mb-2 text-sm text-gray-400 ">Phone</label>
                        <input type="number" name="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-full focus:outline-none" placeholder="" />
                    </div>
                    <div className="flex-1">
                        <label for="email" className="block mb-2 text-sm text-gray-400 ">Email adress</label>
                        <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-full focus:outline-none" placeholder="" />
                    </div>
                </div>
                <div className='flex md:items-center mb-6 md:space-x-8 flex-col md:flex-row space-y-4 md:space-y-0'>
                    <div className="flex-1">
                        <label for="region" className="block mb-2 text-sm text-gray-400 ">Region</label>
                        <input type="text" name="region" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-full focus:outline-none" placeholder="" />
                    </div>
                    <div className="flex-1">
                        <label for="town" className="block mb-2 text-sm text-gray-400 ">City/Town</label>
                        <input type="text" name="town" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-full focus:outline-none" placeholder="" />
                    </div>
                </div>
                <div>
                    <label for="region" className="block mb-2 text-sm text-gray-400 ">Region</label>
                    <textarea name="note" id="" cols="10" rows="4" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-full focus:outline-none" placeholder='Note about your order'></textarea>
                </div>

                {/* <button className='my-4 bg-gradient-to-r from-orange-400 to-orange-500 py-2 px-3 text-white text-xs flex-none w-full md:w-max'>Place order</button> */}
            </form>

        </div>

        <div className='bg-white text-sm text-gray-500 py-4 px-4 border rounded-lg'>
            <h3 className='text-2xl font-bold text-gray-800 mb-2'>Your Order</h3>
            <div>
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
                            {/* title */}
                            <tr className="bg-white border">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap border-r">
                                    Product
                                </th>
                                <td className="py-4 px-6 font-medium text-gray-900 ">
                                    Subtotal
                                </td>
                            </tr>

                            {/* Products */}
                            <tr className="bg-white border">
                                <th scope="row" className="py-4 px-6 font-light whitespace-nowrap border-r">
                                    King's bed
                                </th>
                                <td className="py-4 px-6">
                                    300,000 XAF
                                </td>
                            </tr>
                            <tr className="bg-white border">
                                <th scope="row" className="py-4 px-6 font-light whitespace-nowrap border-r">
                                    Couch
                                </th>
                                <td className="py-4 px-6">
                                    350,000 XAF
                                </td>
                            </tr>

                            {/* Subtotal and shipping */}
                            <tr className="bg-white border">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap border-r">
                                    Subtotal
                                </th>
                                <td className="py-4 px-6">
                                    650,000 XAF
                                </td>
                            </tr>
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
            </div>
            {/* Payment or on delivery */}
            <div className='mt-4'>
                <form >
                    {/* <div className='flex items-center space-x-2 text-xs text-gray-500 mb-3'>
                        <input type="radio" name='rate' value={true}/>
                        <label htmlFor="rate">Flat rate</label>
                    </div> */}
                    <div className='flex items-center space-x-2 text-sm text-gray-500 mb-3'>
                        <input type="radio" name='rate'/>
                        <label htmlFor="rate">Cach on delivery</label>
                    </div>
                    <p className='text-sm text-gray-500'>Your personal data will be used to process your order, support your experience throughout this website, and for other purpose described in your privacy policy.</p>
                </form>
            </div>

            <a href="/checkout">
                <button className='my-4 bg-gradient-to-r from-orange-400 to-orange-500 py-2 px-3 text-white text-xs flex-none w-full md:w-max'>Place order</button>
            </a>
        </div>

    </div>
  )
}

export default CheckoutBody