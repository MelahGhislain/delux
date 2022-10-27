import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'

const MobileNavBar = () => {
    const {mobileNavBar, setMobileNavBar} = useContext(AppContext)
  return (
    <>
        {mobileNavBar && <div className='z-50 top-0 bottom-0 absolute w-full min-h-screen flex md:hidden'>
            <div className='w-[20rem] bg-white'>
                <div className='flex justify-start items-center bg-teal-500 p-3 py-3.5'>
                    <a href="/">
                        <h2 className='text-2xl font-bold text-white'>Delux</h2>
                    </a>
                </div>
                <div>
                    <ul>
                        <Item page="Home" />
                        <Item page="About" />
                        <Item page="Products" />
                        <Item page="Contact" />
                        <Item page="Blog" />
                        <Item page="FAQ" />
                    </ul>
                </div>
            </div>
            <div className='bg-black/50 flex-auto' onClick={()=>setMobileNavBar(false)}></div>
            
        </div>}
    </>
    
  )
}

function Item({page}){
    const {currPage, setCurrPage} = useContext(AppContext)
    const route = page === "Home"? '/' : `/${page.toLowerCase()}`
    return (
        <a href={route} onClick={()=>setCurrPage(page.toLowerCase())}>
            <li className={`py-4 px-3 border-b flex font-light items-center space-x-3 text-sm cursor-pointer transition-all duration-500 ${currPage === page.toLowerCase()? "bg-orange-600 text-white" : "text-gray-500 hover:bg-orange-600 hover:text-white"} `}>
                {/* <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                    </svg>
                </span> */}
                <p>{page}</p>
            </li>
        </a>
    )
}

export default MobileNavBar

