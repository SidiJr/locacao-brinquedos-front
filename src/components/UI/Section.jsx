import React from 'react'

const Section = ({children, className}) => {
  return (

      <section className={`border-gray-200 border-b-2 ${className}`}>
          {children}
      </section>
    
  )
}

export default Section
