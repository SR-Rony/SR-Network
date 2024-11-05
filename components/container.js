import React from 'react'

const Container = ({className,children}) => {
  return (
    <div className={`container mx-auto px-2 ${className}`}>{children}</div>
  )
}

export default Container