import React from 'react'

const ButtonNavBar = ({toggle, setShowCategory, category}) => {

  return (
    <>
        {toggle && <div className='bg-white w-full border-b lg:hidden '>
          <ul className='text-gray-500 text-gray text-sm'>
            <a href="/">
              <li className='px-10 py-3 transition-all duration-500 bg-gradient-to-r cursor-pointer hover:from-orange-400 hover:to-orange-500 hover:text-white'>Home</li>
            </a>
            <a href="/about">
                <li className='px-10 py-3 transition-all duration-500 bg-gradient-to-r cursor-pointer hover:from-orange-400 hover:to-orange-500 hover:text-white'>About</li>
            </a>
            <a href="/products">
              <li className='px-10 py-3 transition-all duration-500 bg-gradient-to-r cursor-pointer hover:from-orange-400 hover:to-orange-500 hover:text-white'>Products</li>
            </a>
            <a href="/contact">
              <li className='px-10 py-3 transition-all duration-500 bg-gradient-to-r cursor-pointer hover:from-orange-400 hover:to-orange-500 hover:text-white'>Contact</li>
            </a>
            <a href="/faq">
              <li className='px-10 py-3 transition-all duration-500 bg-gradient-to-r cursor-pointer hover:from-orange-400 hover:to-orange-500 hover:text-white'>FAQ</li>
            </a>
          </ul>
        </div>}

        <div className={`bg-white w-full hidden border-b lg:flex px-2 md:px-10 ${category? "justify-start": "justify-center"} `}>
            {/* Toggle */}
            {category && <div className='py-3 px-4 flex justify-between w-48 lg:w-72 items-center bg-gradient-to-r from-orange-400 to-orange-500 text-white'>
                <p className='font-normal '>All Categories</p>
                <span className='cursor-pointer' onClick={()=>setShowCategory(curr => !curr)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </span>
            </div>}
          <ul className='text-gray-500 text-gray text-sm flex items-center ml-5'>
              <a href="/">
                <li className='px-4 py-4 transition-all duration-500 bg-gradient-to-r cursor-pointer hover:from-orange-400 hover:to-orange-500 hover:text-white'>Home</li>
              </a>
              <a href="/about">
                <li className='px-4 py-4 transition-all duration-500 bg-gradient-to-r cursor-pointer hover:from-orange-400 hover:to-orange-500 hover:text-white'>About</li>
            </a>
            <a href="/products">
              <li className='px-4 py-4 transition-all duration-500 bg-gradient-to-r cursor-pointer hover:from-orange-400 hover:to-orange-500 hover:text-white'>Products</li>
            </a>
            <a href="/contact">
              <li className='px-4 py-4 transition-all duration-500 bg-gradient-to-r cursor-pointer hover:from-orange-400 hover:to-orange-500 hover:text-white'>Contact</li>
            </a>
            <a href="/faq">
              <li className='px-4 py-4 transition-all duration-500 bg-gradient-to-r cursor-pointer hover:from-orange-400 hover:to-orange-500 hover:text-white'>FAQ</li>
            </a>
          </ul>
        </div>
    </>
  )
}

export default ButtonNavBar