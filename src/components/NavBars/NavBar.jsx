import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'

const NavBar = () => {
  const {setOpenDrawer, setOpenCartDrawer, setMobileNavBar} = useContext(AppContext)
  return (
    <div>
      {/* TOP LOGO */}
      <div className='bg-black px-4 md:px-10 text-white flex items-center justify-between py-3 text-xs flex-col md:flex-row'>
        <p>20% cashback for all users | Code: OGOFERS13 </p>
        <div className='flex items-center space-x-4'>
          <a href="/login">
            <div className='flex items-center space-x-2 cursor-pointer'>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-key" viewBox="0 0 16 16">
                  <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
                  <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
              </span>
              <p>Sign In</p>
            </div>
          </a>
          
          
            <div className='flex items-center space-x-2 cursor-pointer'>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                  <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                </svg>
              </span>
              <p>Sign Up</p>
            </div>
          

          {/* Language */}
          <div className='flex items-center space-x-2'>
                <p className='text-sm'>EN</p>
                <div className='cursor-pointer'>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                      </svg>
                    </span>
                </div>
              </div>

        </div>
      </div>

      {/* Next Logo */}
      <div className='px-2 sm:px-5 md:px-10 py-4 bg-gradient-to-r from-teal-400 to-teal-500 text-white text-sm'>
          
          {/* medium and desktop nav view */}
          <div className='hidden md:flex justify-between items-center'>
            <div className='text-2xl font-bold  text-orange-400'>Delux</div>

            {/* Search */}
            <div className='w-[45%] shadow-md'>
              <form className='flex items-center'>
                <input type="text" name='search' placeholder='Enter key product title' className='flex-auto px-3 py-3 placeholder:italic placeholder:text-sm outline-none' />
                <button type='submit' className='bg-gradient-to-r from-orange-400 to-orange-600 px-4 flex-none text-sm shadow font-bold py-3.5'>SEARCH</button>
              </form>
            </div>

            <div className='flex items-center space-x-3'>

               {/* Account */}
                <div className='flex items-center space-x-2 cursor-pointer' onClick={()=>setOpenDrawer(true)}>
                  <div className='cursor-pointer'>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        </svg>
                      </span>
                  </div>
                  <p className='text-sm'>Account</p>
                </div>

              {/* whish list */}
              <div className='flex items-center space-x-2 cursor-pointer' onClick={()=>setOpenCartDrawer(true)}>
                <div className='relative'>
                  <span >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                    </svg>
                  </span>
                  <p className='absolute text-xs flex items-center justify-center bg-red-500 h-4 w-4 rounded -top-2 -right-2'>0</p>
                </div>
                <p className='text-sm'>Wishlist</p>
              </div>

              {/* shoppng cart */}
              <div className='flex items-center space-x-2 cursor-pointer' onClick={()=>setOpenCartDrawer(true)}>
                <div className='relative'>
                  <span >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                    </svg>
                  </span>
                  <p className='absolute text-xs flex items-center justify-center bg-red-500 h-4 w-4 rounded -top-2 -right-2'>0</p>
                </div>
                <p className='font-bold'>cart</p>
              </div>

              {/* Toggler */}
              {/* <div className='cursor-pointer' >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
              </div> */}

            </div>
          </div>

            {/* mobile nav view */}
          <div className='flex flex-col md:hidden'>
            <div className='flex justify-between py-2'>
              {/* logo */}
              <div className='text-2xl font-bold  text-orange-400'>Delux</div>

              <div className='flex items-center space-x-6'>
                {/* Account */}
                <div className='flex items-center space-x-2 cursor-pointer' onClick={()=>setOpenDrawer(true)}>
                  <div className='cursor-pointer'>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        </svg>
                      </span>
                  </div>
                  <p className='text-sm hidden sm:block'>Account</p>
                </div>

              {/* whish list */}
              <div className='flex items-center space-x-2 cursor-pointer' onClick={()=>setOpenCartDrawer(true)}>
                <div className='relative'>
                  <span >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                    </svg>
                  </span>
                  <p className='absolute text-xs flex items-center justify-center bg-red-500 h-4 w-4 rounded -top-2 -right-2'>0</p>
                </div>
                <p className='text-sm hidden sm:block'>Wishlist</p>
              </div>

                {/* shoppng cart */}
                <div className='flex items-center space-x-2 cursor-pointer ' onClick={()=>setOpenCartDrawer(true)} >
                  <div className='relative'>
                    <span >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                      </svg>
                    </span>
                    <p className='absolute text-xs flex items-center justify-center bg-red-500 h-4 w-4 rounded -top-2 -right-2'>0</p>
                  </div>
                  <p className='font-bold hidden sm:block'>cart</p>
                </div>
                  {/* Toggler */}
                  <div className='cursor-pointer bg-white rounded text-black px-1' onClick={()=>setMobileNavBar(current=> !current)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                  </div>
                </div>
              </div>

            {/* Search */}
            <div className='w-full shadow-md'>
              <form className='flex items-center'>
                <input type="text" name='search' placeholder='Enter key word...' className='flex-auto px-3 py-2 placeholder:italic placeholder:text-sm outline-none' />
                <button type='submit' className='bg-gradient-to-r from-orange-400 to-orange-600 px-3 flex-none text-sm shadow font-normal sm:font-bold py-2.5'>SEARCH</button>
              </form>
            </div>

            <div className='flex items-center space-x-3'>
              
            </div>
          </div>


      </div>
    </div>
  )
}

export default NavBar