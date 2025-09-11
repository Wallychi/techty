import React from 'react'

const Button = ({name,style}) => {
  return (
    <>
    <div className={`p-3 rounded-md font-semibold lg:cursor-pointer ${style}`}>{name}</div>
    </>
  )
}

export default Button