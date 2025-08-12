import React from 'react'
import Button from './Button'
import Marquee from 'react-fast-marquee'
import LogoOne from './LogoOne'
import LogoTwo from './LogoTwo'
import LogoThree from './LogoThree'
import LogoFour from './LogoFour'

const Main = () => {
    return (
        <section className='flex flex-col font-space px-15 mt-5 gap-20'>
            <div className='flex items-center gap-2'>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-6xl font-bold'>Secure <span className='text-green-500'>business</span><br /> with Techty security</h1>
                    <p className='text-[#4E4E4E] text-xl'>We have considered our solutions to support every stage of your<br /> growth. We are the fastest and easiest way to launch an<br /> attractive and feature-complete SaaS showcase.</p>
                    <div className='flex gap-5 mt-5'>
                        <Button name='Request a Free Demo' style={"bg-black text-white hover:bg-green-500"} />
                        <Button name='Hire an expert' style={"bg-black text-white hover:bg-green-500 px-7"} />
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='bg-white p-0.5 rounded-full'>
                        <img src='/public/images/Frame 14.png' alt='Man smiling' className='w-[600px]' />
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src='/public/icons/Star.png' alt='Green star' />
                        <p className='font-bold text-2xl'>Trustpilot</p>
                        <div className='flex'>
                            <img src='/public/icons/Frame.png' alt='Rating star' />
                            <img src='/public/icons/Frame.png' alt='Rating star' />
                            <img src='/public/icons/Frame.png' alt='Rating star' />
                            <img src='/public/icons/Frame.png' alt='Rating star' />
                            <img src='/public/icons/Frame.png' alt='Rating star' />
                        </div>
                        <p>4900 + 5 stars</p>
                    </div>
                </div>
            </div>
            <hr className='text-gray-300' />
            <div className='flex items-center'>
                <p className='font-semibold w-[300px] text-xl'>
                    Thousands of<br /> businesses use Techty
                </p>
                <Marquee >
                    <LogoOne />
                    <LogoTwo />
                    <LogoThree />
                    <LogoFour />
                </Marquee>
            </div>
        </section>
    )
}

export default Main