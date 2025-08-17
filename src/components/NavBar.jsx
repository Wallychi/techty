import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'

const NavBar = () => {
    return (

        <div className='flex items-center justify-between w-full px-15 py-10 font-space'>
            <div className='flex items-center gap-2'>
                <img src='/icons/SVG.png' alt='' />
                <div className='font-extrabold text-4xl'>Techty</div>
            </div>
            <div className='flex items-center gap-15 '>
                <NavLink to={'/'} >Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/service'} >Service</NavLink>
                <NavLink to={'/blog'} >Blog</NavLink>
                <NavLink to={'/contact'}>Contact</NavLink>
                <Button name='Request a Free Demo' style={"bg-black text-white rounded-md font-semibold hover:bg-green-500"} />
            </div>
        </div>

    )
}

export default NavBar