import React from 'react'

const BaseCard = ({children, className, title}) => {
  return (

    <div className='w-full'>
        <h2 className='pl-2 underline'>{title}</h2>
        <div className={`border-gray-200 rounded-lg border-2 ${className}`}>
            {children}
        </div>
    </div>
    

  )
}

export default BaseCard
