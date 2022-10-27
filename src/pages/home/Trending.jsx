import React, { useState } from 'react'
import Badge from '../../components/Badge'
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

const Trending = () => {
    // eslint-disable-next-line no-unused-vars
    const [products, setProducts] = useState(items)
  return (
    <div className='my-10 md:my-16 px-4 md:px-10'>
        <div className='flex justify-between'>
            <h2 className='text-lg font-bold flex items-center space-x-2'><p>TRENDING ITEMS</p> <Badge text="20% OFF" bg="bg-blue-700 text-white" /> </h2>
            <p className='text-sm text-green-500 font-normal'>View All</p>
        </div>
        <div className='py-2'>
            <div className='w-full grid items-center grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))] md:gap-x-6 gap-y-6'>
                {
                    products.map((product, index) => (

                        <ProductCard key={index} data={product} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Trending