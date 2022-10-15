import React, { useState } from 'react'
import 'flowbite';
import ProductCard from '../../components/ProductCard'
import img1 from '../../assets/images/png/png1.png'
import img2 from '../../assets/images/png/png2.png'
import img3 from '../../assets/images/png/png3.png'
import img4 from '../../assets/images/png/png4.png'
import img5 from '../../assets/images/png/png5.png'
import img6 from '../../assets/images/png/png6.png'
import img7 from '../../assets/images/png/png7.png'
import img10 from '../../assets/images/png/png10.png'
const items = [
    {
        percentage: "10",
        instock: true,
        quantity: "5",
        image: img1,
        title: "Dinning Table",
        promoPrice: "400",
        price: "500",

    },
    {
        percentage: "20",
        instock: false,
        quantity: "0",
        image: img2,
        title: "Soft Sleeping Couch",
        promoPrice: "450",
        price: "600",

    },
    {
        percentage: "30",
        instock: true,
        quantity: "3",
        image: img3,
        title: "Soft Sleeping Couch",
        promoPrice: "300",
        price: "400",

    },
    {
        percentage: "10",
        instock: true,
        quantity: "3",
        image: img4,
        title: "Soft Chair",
        promoPrice: "300",
        price: "400",

    },
    {
        percentage: "10",
        instock: false,
        quantity: "3",
        image: img5,
        title: "Soft Arm Chair",
        promoPrice: "300",
        price: "400",

    },
    {
        percentage: "10",
        instock: true,
        quantity: "3",
        image: img6,
        title: "Soft Sofa",
        promoPrice: "400",
        price: "500",

    },
    {
        percentage: "10",
        instock: true,
        quantity: "3",
        image: img7,
        title: "Soft Sleeping Couch",
        promoPrice: "300",
        price: "400",

    },
    {
        percentage: "10",
        instock: true,
        quantity: "3",
        image: img10,
        title: "Soft Sleeping Couch",
        promoPrice: "300",
        price: "400",

    },
    
]

const ProductBody = () => {
  const [products] = useState(items)
  return (
    <div className='px-4 md:px-10 py-10'>
        <div className='flex md:space-x-8 flex-col md:flex-row'>
            <section className='w-full md:w-[24rem] order-2 md:order-1'>
                {/* filter */}
                <div className='border bg-white mb-8'>
                    <h4 className='border-b px-4 py-3 text-orange-500 text-sm font-bold'>Filter By Price</h4>
                    <p className='px-4'>
                        <form className='py-4'>
                          <input id="minmax-range" type="range" min="0" max="10"  class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer " />
                          <div className='mt-4 flex items-center justify-between'>
                            <button className='bg-gradient-to-r from-orange-400 to-orange-500 py-2 px-3 text-white text-xs w-full md:w-max'>FILTER</button>
                              <p className='text-gray-400 text-sm'>0 XAF - 200k XAF</p>
                          </div>
                        </form>

                    </p>
                </div>

                {/* Product categories */}
                <div className='bg-white border mb-8 '>
                    <h4 className='border-b px-4 py-3 text-sm font-bold text-orange-500'>Product Categories</h4>
                    <div className='px-4 py-4 text-xs text-gray-500'>
                        <div className='flex items-center space-x-2 mb-3'>
                          <input type="checkbox" name="category"  className='outline-none border-gray-200'/>
                          <label htmlFor="">Quality Sofas</label>
                        </div>
                        <div className='flex items-center space-x-2 mb-3'>
                          <input type="checkbox" name="category"  className='outline-none border-gray-200'/>
                          <label htmlFor="">Confortable Couchs</label>
                        </div>
                        <div className='flex items-center space-x-2 mb-3'>
                          <input type="checkbox" name="category"  className='outline-none border-gray-200'/>
                          <label htmlFor="">Tables & chairs</label>
                        </div>
                        <div className='flex items-center space-x-2 mb-3'>
                          <input type="checkbox" name="category"  className='outline-none border-gray-200'/>
                          <label htmlFor="">Side Stools</label>
                        </div>
                        <div className='flex items-center space-x-2 mb-3'>
                          <input type="checkbox" name="category"  className='outline-none border-gray-200'/>
                          <label htmlFor="">King Beds</label>
                        </div>
                        <div className='flex items-center space-x-2 mb-3'>
                          <input type="checkbox" name="category"  className='outline-none border-gray-200'/>
                          <label htmlFor="">Queen Beds</label>
                        </div>
                        <div className='flex items-center space-x-2 mb-3'>
                          <input type="checkbox" name="category"  className='outline-none border-gray-200'/>
                          <label htmlFor="">Lighting</label>
                        </div>
                        <div className='flex items-center space-x-2 mb-3'>
                          <input type="checkbox" name="category"  className='outline-none border-gray-200'/>
                          <label htmlFor="">Dinning Tables </label>
                        </div>
                        <div className='flex items-center space-x-2 mb-3'>
                          <input type="checkbox" name="category"  className='outline-none border-gray-200'/>
                          <label htmlFor="">Dinning Chairs </label>
                        </div>
                    </div>
                </div>


                {/* Product status */}
                <div className='bg-white border mb-8 '>
                    <h4 className='border-b px-4 py-3 text-sm font-bold text-orange-500'>Product Status</h4>
                    <div className='px-4 py-4 text-xs text-gray-500'>
                        <div className='flex items-center space-x-2 mb-3'>
                          <input type="checkbox" name="category"  className='outline-none border-gray-200'/>
                          <label htmlFor="">In Stock</label>
                        </div>
                        <div className='flex items-center space-x-2 mb-3'>
                          <input type="checkbox" name="category"  className='outline-none border-gray-200'/>
                          <label htmlFor="">On Sale</label>
                        </div>
                    </div>
                </div>

                {/* Products */}
                <div className='bg-white border mb-8 '>
                    <h4 className='border-b px-4 py-3 text-sm font-bold text-orange-500'>Related Products</h4>
                    <div className='px-4 py-4 text-sm text-gray-500'>
                        <div className='flex items-center space-x-2 mb-3 cursor-pointer transiton-all duration-300 hover:scale-105'>
                          <div className='h-16 w-16 '>
                            <img src={img4} alt="product" className='h-full w-full object-contain' />
                          </div>
                          <div>
                            <p>Queen's Bed</p>
                            <p className='text-xs'><span className='line-through text-gray-400'>300K XAF</span> <span className='text-orange-400'>200K XAF</span></p>
                          </div>
                        </div>
                        <div className='flex items-center space-x-2 mb-3 cursor-pointer transiton-all duration-300 hover:scale-105'>
                          <div className='h-16 w-16 '>
                            <img src={img1} alt="product" className='h-full w-full object-contain' />
                          </div>
                          <div>
                            <p>Queen's Bed</p>
                            <p className='text-xs'><span className='line-through text-gray-400'>300K XAF</span> <span className='text-orange-400'>200K XAF</span></p>
                          </div>
                        </div>
                        <div className='flex items-center space-x-2 mb-3 cursor-pointer transiton-all duration-300 hover:scale-105'>
                          <div className='h-16 w-16 '>
                            <img src={img6} alt="product" className='h-full w-full object-contain' />
                          </div>
                          <div>
                            <p>Queen's Bed</p>
                            <p className='text-xs'><span className='line-through text-gray-400'>300K XAF</span> <span className='text-orange-400'>200K XAF</span></p>
                          </div>
                        </div>
                        <div className='flex items-center space-x-2 mb-3 cursor-pointer transiton-all duration-300 hover:scale-105'>
                          <div className='h-16 w-16 '>
                            <img src={img5} alt="product" className='h-full w-full object-contain' />
                          </div>
                          <div>
                            <p>Queen's Bed</p>
                            <p className='text-xs'><span className='line-through text-gray-400'>300K XAF</span> <span className='text-orange-400'>200K XAF</span></p>
                          </div>
                        </div>
                        <div className='flex items-center space-x-2 mb-3 cursor-pointer transiton-all duration-300 hover:scale-105'>
                          <div className='h-16 w-16 '>
                            <img src={img7} alt="product" className='h-full w-full object-contain' />
                          </div>
                          <div>
                            <p>Queen's Bed</p>
                            <p className='text-xs'><span className='line-through text-gray-400'>300K XAF</span> <span className='text-orange-400'>200K XAF</span></p>
                          </div>
                        </div>
                    </div>
                </div>

            </section>


            <section className='flex-auto w-full order-1 md:order-2 mb-8 md:mb-0'>
                  {/* Header */}
                <header className='flex justify-between items-center px-3 py-4 bg-slate-800 flex-col md:flex-row'>
                  <p className='font-bold text-2xl text-orange-500'>Delux</p>
                  <p className='text-white md:text-lg lg:text-xl font-bold text-center'>Quality & Comfortable Furnitures </p>
                </header>


                {/* selector */}
                <div className='flex items-center justify-between my-4'>
                  <div className='flex items-center space-x-2 py-4'>
                      <span className='border p-2 cursor-pointer text-orange-600 border-orange-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid" viewBox="0 0 16 16">
                          <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
                        </svg>
                      </span>
                      <span className='border p-2 cursor-pointer'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-task" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"/>
                            <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z"/>
                            <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"/>
                          </svg>
                      </span>
                  </div>

                  <div>
                        <button id="dropdownSearchButton" data-dropdown-toggle="dropdownSearch" data-dropdown-placement="bottom" className="border w-48 md:w-60 text-gray-500 font-medium text-sm px-4 py-2.5 text-center inline-flex items-center justify-between " type="button">Dropdown search <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                        <div id="dropdownSearch" className="hidden z-10 w-48 md:w-60 bg-white rounded shadow dark:bg-gray-700" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom" style={{position: 'absolute', inset: '0px auto auto 0px;', margin: '0px', transform: 'translate(0px, 320px)'}}>
                            <div class="p-3">
                              <label for="input-group-search" class="sr-only">Search</label>
                              <div class="relative">
                                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                  <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                </div>
                                <input type="text" id="input-group-search" class="block p-2 pl-10 w-full text-sm text-gray-500 bg-gray-50 rounded-lg border border-gray-300 " placeholder="Search user" />
                              </div>
                            </div>

                            <ul class="overflow-y-auto px-3 pb-3 h-48 text-xs text-gray-400 " aria-labelledby="dropdownSearchButton">
                              
                              <li>
                                <div class="flex items-center pl-2 rounded hover:bg-gray-100 ">
                                    <input id="checkbox-item-12" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 outline-none border-gray-300" />
                                    <label for="checkbox-item-12" class="py-2 ml-2 w-full text-sm rounded ">Jese Leos</label>
                                  </div>
                              </li>
                            </ul>

                            <a href="/" class="flex items-center p-3 text-sm font-medium text-red-600 bg-gray-50 border-t border-gray-200 hover:bg-gray-100 hover:underline">
                              <svg class="mr-1 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a3 3 0 11-6 0 3 3 0 016 0zM14 17a6 6 0 00-12 0h12zM13 8a1 1 0 100 2h4a1 1 0 100-2h-4z"></path></svg>
                              Delete user
                          </a>
                        </div>

                  </div>
                </div>




                <div>
                    <div className='w-full grid items-center grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))] md:gap-x-6 gap-y-6'>
                      {
                          products.map((product, index) => (

                              <ProductCard key={index} data={product} />
                          ))
                      }
                    </div>
                </div>

                {/* Arrows */}
                <div className='flex justify-start items-center mt-8'>
                  <div className='flex justify-center items-center'>
                    <span className='border h-9 w-9 bg-white text-green-600 cursor-pointer duration-300 transition-all hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white flex justify-center items-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                      </svg>
                    </span>
                      <p className='border h-9 w-9 bg-white text-green-600 cursor-pointer duration-300 transition-all hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white flex justify-center items-center'>
                        1
                      </p>
                      <p className='border h-9 w-9 bg-white text-green-600 cursor-pointer duration-300 transition-all hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white flex justify-center items-center'>
                        2
                      </p>
                      <p className='border h-9 w-9 bg-white text-green-600 cursor-pointer duration-300 transition-all hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white flex justify-center items-center'>
                        3
                      </p>
                    <span className='border h-9 w-9 bg-white text-green-600 cursor-pointer duration-300 transition-all hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg>
                    </span>
                  </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default ProductBody