import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'

const NavBar = () => {
  return (
    
    <div className='flex flex-row items-center justify-between w-full p-5 font-space'>
        <div className='font-extrabold text-2xl'>TECHTY</div>
        <div className='flex items-center gap-15'>
            <NavLink to={'/'} >Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/service'} >Service</NavLink>
            <NavLink to={'/blog'} >Blog</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>
            <Button name='Request a Free Demo' style={"bg-black text-white rounded-md font-semibold"} />
        </div>
    </div>
    
  )
}

export default NavBar