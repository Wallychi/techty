import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'
import { Menu } from 'lucide-react'

const NavBar = () => {
    const [menubutton, setMenubutton] = useState(false)
   
    return (
        <div className='flex relative items-center justify-between px-4 py-2 font-space'>
            <div className='flex items-center gap-2'>
                <img src='/icons/SVG.png' alt='' />
                <div className='font-extrabold text-4xl'>Techty</div>
            </div>
            <div className='flex items-center lg:hidden' onClick={()=>{setMenubutton(!menubutton)}}>
                <Menu size={40} color="#333333" />
            </div>
            {menubutton ?
                <div className='absolute bg-white flex flex-col w-1/2 top-19 right-0 ml-5'>
                <NavLink to={'/'} className="text-xl font-semibold border-b-4 border-b-gray-100 p-4 ">Home</NavLink>
                <NavLink to={'/about'} className="text-xl font-semibold border-b-4 border-b-gray-100 p-4 ">About</NavLink>
                <NavLink to={'/service'} className="text-xl font-semibold border-b-4 border-b-gray-100 p-4 " >Service</NavLink>
                <NavLink to={'/blog'} className="text-xl font-semibold border-b-4 border-b-gray-100 p-4 ">Blog</NavLink>
                <NavLink to={'/contact'} className="text-xl font-semibold p-4 ">Contact</NavLink>                
            </div>
            :""}
            <div className='items-center md:gap-10 lg:gap-15 hidden md:flex '>
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