import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'

const BottomNavBar
 = ({setShowCategory, category}) => {

  return (
    <>
        <div className={`bg-white w-full hidden border-b md:flex px-2 md:px-10 ${category? "justify-start": "justify-center"} `}>
            {/* Toggle */}
            {category && <div className='py-3 px-4 flex justify-between w-52 lg:w-72 items-center bg-gradient-to-r from-orange-400 to-orange-500 text-white'>
                <p className='font-normal '>All Categories</p>
                <span className='cursor-pointer' onClick={()=>setShowCategory(curr => !curr)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </span>
            </div>}
          <ul className='text-gray-500 text-gray text-sm flex items-center ml-5'>
              <ItemNav page="Home" />
              <ItemNav page="About" />
              <ItemNav page="Products" />
              <ItemNav page="Contact" />
              <ItemNav page="Blog" />
              <ItemNav page="FAQ" />
          </ul>
        </div>
    </>
  )
}

function ItemNav({page}){
  const {currPage, setCurrPage} = useContext(AppContext)
  const route = page === "Home"? '/' : `/${page.toLowerCase()}`
  return (
    <a href={route} onClick={()=>setCurrPage(page.toLowerCase())}>
      <li className={`px-4 py-4 transition-all duration-500 bg-gradient-to-r cursor-pointer  ${currPage === page.toLowerCase()? "from-orange-400 to-orange-500 text-white" : "hover:from-orange-400 hover:to-orange-500 hover:text-white"}`} >{page}</li>
    </a>
  )
}

export default BottomNavBar
