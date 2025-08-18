import React from 'react'
import Button from './Button'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <section className='flex flex-col bg-[#495460] gap-20 font-space text-white px-15 py-20'>
            <div className='flex justify-between'>
                <h1 className='text-6xl font-bold'>Ready to take your business<br /> to the next level?</h1>

                <div className='flex flex-col'>
                    <Button name='Request a Free Demo' style={"bg-black text-white px-10 hover:bg-green-500"} />
                </div>
            </div>
            <hr className='text-[#F0F8FF63]' />

            <div className='flex gap-35'>
                <div className='flex flex-col gap-20'>
                    <div className='flex items-center gap-2'>
                        <img src='/icons/SVG.png' alt='' />
                        <div className='font-extrabold text-2xl'>Techty</div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-1'>
                            <img src='/icons/twitter-x-line.png' alt='twitter-logo' />
                            <img src='/icons/facebook-fill.png' alt='facebook-logo' />
                            <img src='/icons/instagram-line.png' alt='instagram-logo' />
                            <img src='/icons/github-fill.png' alt='github-logo' />
                        </div>
                        <div className='text-sm'>
                            Copyright 2023 Techty.<br />
                            All Rights Reserved
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-7'>
                    <h1 className='text-3xl font-semibold'>
                        Quick Links
                    </h1>
                    <div className='flex flex-col gap-4 text-xl'>
                        <NavLink to={'/about'}>About</NavLink>
                        <NavLink to={'/service'} >Service</NavLink>
                        <NavLink to={'/blog'} >Blog</NavLink>
                        <NavLink to={'/contact'}>Contact</NavLink>
                    </div>
                </div>
                <div className='flex flex-col gap-7'>
                    <h1 className='text-3xl font-semibold'>
                        Socials
                    </h1>
                    <div className='flex flex-col gap-4 text-xl'>
                        <div>Twitter</div>
                        <div>Linkedin</div>
                        <div>Facebook</div>
                    </div>
                </div>
                <div className='flex flex-col gap-7'>
                    <h1 className='text-3xl font-semibold'>
                        Our Newsletter
                    </h1>
                    <p className='text-lg'>Subscribe to our newletter to<br /> get our news delivered to you.</p>

                    <form className='relative'>
                        <input type='email' placeholder='Email address' className='p-3 border-1 rounded-xl w-[350px]'  />
                        <Button name='Join' style={'bg-black absolute top-[1px] py-[12px] right-[1px] rounded-xl text-white hover:bg-green-500'} />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Footer