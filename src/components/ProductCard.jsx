import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import Badge from './Badge'
import Dot from './Dot'


const ProductCard = ({data}) => {
  const {setOpenCartDrawer} = useContext(AppContext)
  return (
    
      <div className='w-full bg-white shadow-md p-6 h-[25rem]'>
        <div>

          <div className='flex justify-between items-center'>
            <Badge text={`${data.percentage}%`} bg={data.instock? "bg-green-50 text-green-700 px-2" : "bg-red-50 text-red-700 px-2"} />
            <Dot style={data.instock? "border-green-600 text-green-600" : "border-red-600 text-red-600"} />
          </div>
          <a href='/product-detail'>
            <div className='w-full h-[10rem] my-2 cursor-pointer'>
              <img src={data.image} alt="sofa" className='w-full h-full object-contain transition-all duration-500 hover:scale-110' />
            </div>
          </a>

          <div className='flex flex-col items-center'>
            <h4 className='font-bold  text-teal-400'>{data.title}</h4>
            <div className='flex items-center text-xs space-x-2 text-gray-500'>
              <span className={data.instock? 'text-green-600' : 'text-red-600'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
              </span>
              <p>In Stock - {data.quantity} pecies</p>
            </div>
            <div className='flex justify-center items-center space-x-2 py-4'>
              <span className='text-xs text-gray-500 line-through'>{data.price} XAF</span>
              <span className='font-bold text-sm'>{data.promoPrice} XAF</span>
            </div>
            <div>
              <button className='flex items-center space-x-1 text-xs font-extralight px-4 py-2 rounded-full text-white bg-gradient-to-r from-orange-400 to-orange-500' onClick={()=>setOpenCartDrawer(true)}>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                  </svg>
                </span>
                <p>Add to cart</p>
              </button>
            </div>
          </div>
        </div>
      </div>

  )
}

export default ProductCard