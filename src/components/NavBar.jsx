import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'

const NavBar = () => {
    return (

        <div className='flex items-center justify-between w-full px-15 py-5 font-space'>
            <div className='flex items-center gap-2'>
                <img src='/icons/SVG.png' alt='' />
                <div className='font-extrabold text-4xl'>Techty</div>
            </div>
            <div className='flex md:flex-col md:gap-5 lg:flex-row lg:gap-10 items-center gap-15 '>
                <NavLink to={'/'} className={({ isActive}) => isActive ? " text-[#28D08A] font-semibold underline underline-offset-8" : "font-normal text-black"}>Home</NavLink>
                <NavLink to={'/about'} className={({ isActive}) => isActive ? "text-[#28D08A] font-semibold underline underline-offset-8" : "font-normal text-black"}>About</NavLink>
                <NavLink to={'/service'} className={({ isActive}) => isActive ? "text-[#28D08A] font-semibold underline underline-offset-8" : "font-normal text-black"} >Service</NavLink>
                <NavLink to={'/blog'} className={({ isActive}) => isActive ? "text-[#28D08A] font-semibold underline underline-offset-8" : "font-normal text-black"} >Blog</NavLink>
                <NavLink to={'/contact'} className={({ isActive}) => isActive ? "text-[#28D08A] font-semibold underline underline-offset-8" : "font-normal text-black"}>Contact</NavLink>
                <Button name='Request a Free Demo' style={"bg-black text-white rounded-md font-semibold hover:bg-green-500"} />
            </div>
        </div>

    )
}

export default NavBar