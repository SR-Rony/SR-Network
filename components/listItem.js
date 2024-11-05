import React from 'react'

const ListItem = ({className,text,onClick}) => {
  return (
    <li onClick={onClick} className={className}>{text}</li>
  )
}

export default ListItem