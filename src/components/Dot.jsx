import React from 'react'

const Dot = ({style}) => {
  return (
    <div className={`border text-5xl ${style} `}>
        
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
        </svg>
    </div>
  )
}

export default Dot