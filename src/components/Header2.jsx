import React from 'react'

const Header2 = ({title, text}) => {
  return ( 
    <div className='bg-white flex justify-start items-center px-4 md:px-10 py-4 shadow-md'>
        <div className='text-sm mt-2 text-gray-600 font-bold flex items-center'>
            <a href="/" className='mr-2 flex items-center space-x-1'>
                <span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                        <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                    </svg>
                </span>
                <p>Home</p>
             </a>
             <p>/</p> 
             <span className='font-normal ml-2'>{text}</span>
        </div>
    </div>
  )
}

export default Header2