import React from 'react'

const Badge = ({text, bg}) => {
  return (
    <div className={`p-1 ${bg} font-light text-xs`}>
        <p>{text}</p>
    </div>
  )
}

export default Badge