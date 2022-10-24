import React from 'react'

const Header = ({title, text}) => {
  return (
    <div className='bg-gradient-to-r from-teal-400 to-green-500 flex flex-col justify-center items-center py-4 md:py-8 px-8'>
        <h2 className='text-3xl text-white font-bold'>{title}</h2>
        <p className='text-sm text-white mt-2'><a href="/">Home </a>/ {text}</p>
    </div>
  )
}

export default Header