import React, { useContext, useState } from 'react'
import Badge from '../../components/Badge'
import AppContext from '../../context/AppContext'
import sofa from '../../assets/images/png/png2.png'
import img1 from '../../assets/images/png/png1.png'
import img2 from '../../assets/images/png/png2.png'
import img3 from '../../assets/images/png/png3.png'
import img4 from '../../assets/images/png/png4.png'
import img5 from '../../assets/images/png/png5.png'
import img6 from '../../assets/images/png/png6.png'
import ProductCard from '../../components/ProductCard'
import ProductSlider from '../products/ProductSlider'

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
        instock: true,
        quantity: "3",
        image: img5,
        title: "Soft Chair",
        promoPrice: "300",
        price: "400",

    },
    {
        percentage: "10",
        instock: true,
        quantity: "3",
        image: img6,
        title: "Soft Chair",
        promoPrice: "300",
        price: "400",

    },
    
]

const Details = () => {
    const {setOpenCartDrawer} = useContext(AppContext)
    const [products] = useState(items)
  return (
    <div className='px-4 md:px-10 py-10'>
        <div>
            <div className='flex md:space-x-6 flex-col md:flex-row space-y-4 md:space-y-0'>
                <section className='flex-1  flex flex-col w-full '>
                    <div className='bg-white rounded-lg border px-5 py-5 h-[80%]'>
                        <img src={sofa} alt="detail" className='w-full h-full object-contain' />
                    </div>
                    <ProductSlider 
                        items={items}
                    />
                </section>

                <section className='flex-1 rounded-lg border bg-white px-5 py-5'>
                    <Badge text="30% OFF" bg="bg-green-50 text-green-700 w-max px-4 " />
                    <h4 className='text-2xl text-gray-700 my-2'>King's Bed</h4>
                    <p className='mb-4'><span className='line-through text-teal-400 text-sm'>400K XAF</span> <span className='text-xl text-green-500'>300K XAF</span></p>
                    <p className='text-xs text-gray-500 mb-4'>In Stock</p>
                    
                    {/* button */}
                    <div className='bg-gradient-to-r from-orange-400 to-orange-500 p-1 flex items-center w-max mb-5'>
                        <input type="number" className="py-1 px-2 focus:outline-none text-gray-600 w-16 border-0"/>
                        <button className='flex items-center space-x-1 text-sm font-light px-4 py-2 rounded-full text-white ' onClick={()=>setOpenCartDrawer(true)}>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                            </span>
                            <p>Add to cart</p>
                        </button>
                    </div>

                    {/* description */}
                    <div className='border px-5 py-6 mb-4 text-sm text-gray-400'>
                        <h5 className='text-gray-700 text-lg mb-2'>Quick Overview</h5>
                        <p className='mb-2'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum.
                        </p>
                        <p>
                            Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hiMenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum.
                        </p>

                    </div>

                    <div className='flex items-center mb-4 space-x-2'>
                        <p className='text-gray-500 text-sm'><span className='text-orange-500'>SKU </span>9S3M4N</p>
                        <p className='text-gray-500 text-sm'><span className='text-orange-500'>Category </span>Beds</p>
                    </div>

                    <div>
                        <h4 className='text-sm text-gray-700 font-bold'>Why shop from Delux?</h4>
                        <div className='flex sm:items-center mt-4 flex-col sm:flex-row space-y-4 sm:space-y-0'>
                            <HeroCard 
                                svg={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-basket3" viewBox="0 0 16 16">
                                    <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z"/>
                                    </svg> 
                                }
                                title="100% Guarantee"
                                text="Lorem ipsum dolor..."
                            />
                            <HeroCard 
                                svg={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-tags" viewBox="0 0 16 16">
                                    <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"/>
                                    <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"/>
                                    </svg> 
                                }
                                title="Great Discount"
                                text="Lorem ipsum dolor..."
                            />
                        </div>
                    </div>
                </section>
            </div>

            {/* Description, Review */}
            <div className='mt-4'>
                <div className='flex items-center space-y-2 md:space-y-0 md:space-x-2 flex-col md:flex-row'>
                    <button className='w-full md:w-max text-sm font-light px-4 py-2 text-white bg-gradient-to-r from-orange-400 to-orange-500' >
                        Description
                    </button>
                    <button className='w-full md:w-max text-sm font-light px-4 py-2 text-white bg-black' >
                        Additional information
                    </button>
                    <button className='w-full md:w-max text-sm font-light px-4 py-2 text-white bg-black' >
                        Reviews (0)
                    </button>
                </div>
                <div className='border p-6 text-sm text-gray-400 bg-white rounded-lg'>
                    <h3 className='text-2xl text-gray-600 mb-4'>Description</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum.

                        Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hiMenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum.
                    </p>
                </div>
            </div>

            {/* Related products */}
            <div className='border p-6 text-sm text-gray-400 bg-white mt-6 rounded-lg'>
                <h3 className='text-2xl text-gray-600 mb-4'>Related products</h3>
                    
                <div className='w-full grid items-center grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))] md:gap-x-6 gap-y-6'>
                      {
                          products.slice(0,4).map((product, index) => (

                              <ProductCard key={index} data={product} />
                          ))
                      }
                 </div>
            </div>

        </div>
    </div>
  )
}

export default Details

function HeroCard({svg, title, text}){
    return (
      <div className='flex items-center space-x-4 flex-1'>
          <div className='h-14 w-14 flex items-center justify-center bg-teal-700 text-white rounded-full'>
            <span>
              {svg}
            </span>
          </div>
          <div>
            <h5 className='font-bold text-sm text-teal-700'>{title}</h5>
            <p className='text-xs text-gray-500'>{title}</p>
          </div>
      </div>
    )
  }