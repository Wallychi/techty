import React from 'react'
import Button from './Button'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <section className='flex flex-col bg-[#495460] gap-10 lg:gap-20 font-space text-white px-5 lg:px-15 py-10 lg:py-20'>
            <div className='flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-0 lg:justify-between'>
                <h1 className='text-4xl lg:text-6xl lg:w-3/4 font-bold'>Ready to take your business to the next level?</h1>

                <div className='flex lg:flex-col'>
                    <Button name='Request a Free Demo' style={"bg-black text-white px-4 lg:px-10 lg:hover:bg-green-500"} />
                </div>
            </div>
            <hr className='text-[#F0F8FF63]' />

            <div className='flex flex-col-reverse lg:flex-row gap-13 lg:gap-0'>
                <div className='flex flex-row lg:flex-col lg:w-1/4 lg:gap-20 '>
                    <div className='flex items-center  gap-2 basis-1/2 lg:basis-0'>
                        <img src='/icons/SVG.png' alt='Techty image' />
                        <div className='font-extrabold text-3xl lg:text-2xl'>Techty</div>
                    </div>
                    <div className='flex flex-col gap-4 basis-1/2 lg:basis-0'>
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
                <div className='flex flex-col gap-4 lg:gap-7 lg:w-1/4'>
                    <h1 className='text-4xl lg:text-3xl font-semibold'>
                        Quick Links
                    </h1>
                    <div className='flex flex-row lg:flex-col gap-10 lg:gap-4 text-xl'>
                        <NavLink to={'/about'}>About</NavLink>
                        <NavLink to={'/service'} >Service</NavLink>
                        <NavLink to={'/blog'} >Blog</NavLink>
                        <NavLink to={'/contact'}>Contact</NavLink>
                    </div>
                </div>
                <div className='flex flex-col gap-4 lg:gap-7 lg:w-1/4'>
                    <h1 className='text-4xl lg:text-3xl font-semibold'>
                        Socials
                    </h1>
                    <div className='flex flex-row lg:flex-col gap-10 lg:gap-4 text-xl'>
                        <div>Twitter</div>
                        <div>Linkedin</div>
                        <div>Facebook</div>
                    </div>
                </div>
                <div className='flex flex-col gap-5 lg:gap-7 lg:w-1/4'>
                    <h1 className='text-4xl lg:text-3xl font-semibold'>
                        Our Newsletter
                    </h1>
                    <p className='text-lg lg:w-full'>Subscribe to our newletter to get our news delivered to you.</p>

                    <form className='relative'>
                        <input type='email' placeholder='Email address' className='p-3 border-1 rounded-xl w-[350px]'  />
                        <Button name='Join' style={'bg-black absolute top-[1px] py-[12px] right-24 lg:-right-10 rounded-xl text-white lg:hover:bg-green-500'} />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Footer