import React from 'react'

const ValueCard = ({value, className, title}) => {
  return (

    <div className='w-full h-full border-gray-200 rounded-lg border-2'>
        <h2 className='w-full text-center p-4 bg-gray-100 rounded-md text-2xl'>{title}</h2>
        <div className={`flex items-center justify-center h-45 text-4xl ${className}`}>
            {value}
        </div>
    </div>
    

  )
}

export default ValueCard
