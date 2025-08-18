import React from 'react'
import Button from './Button'

const Solutions = () => {
    return (
        <section className='flex flex-col w-full font-space'>
            <div className='flex px-15 items-center gap-3  mb-30'>
                <div className='flex flex-col gap-7'>
                    <h1 className='text-5xl font-bold text-justify'>Our most priority is to<br /> provide the effective<br /> <span className='text-green-500'>solutions.</span></h1>
                    <p className='text-[15px]'>With a library full of thousands of templates to choose from, go idea to<br /> launch in a matter of minutes. Try uploading your own sale.</p>
                    <div className='flex'>
                        <Button name='Request a Free Demo' style={"bg-black text-white px-10"} />
                    </div>
                </div>
                <img src='/images/Frame 45.png' alt='Image of a man sipping tea' />
            </div>

            <div className='bg-[#171A1F] flex  text-white items-center gap-5'>
                <img src='/images/Rectangle.png' />
                <div className='flex flex-col gap-10'>
                    <h1 className='text-5xl font-bold'>Personalize your business<br /> <span className='text-green-500'>strategy</span> to reach out.</h1>
                    <p className='text-xl text-[#FFFFFF]'>Our advisors approach each client individually, so each time we<br /> select the appropriate insurance for your needs. Thanks to<br /> conversation, we will adjust the appropriate cover.</p>

                    <div className='flex items-center gap-30'>
                        <div className='flex flex-col gap-3'>
                            <p className='text-6xl font-bold'>99.7%</p>
                            <p className='text-xl'>Customer Satisfaction</p>
                            <div className='flex items-center'>
                                <img src='/icons/Frame.png' alt='rating star' />
                                <img src='/icons/Frame.png' alt='rating star' />
                                <img src='/icons/Frame.png' alt='rating star' />
                                <img src='/icons/Frame.png' alt='rating star' />
                                <img src='/icons/Frame.png' alt='rating star' />
                            </div>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <p className='text-6xl font-bold'>4X</p>
                            <p className='text-xl'>New Visitors</p>
                            <div className='flex items-center'>
                                <img src='/icons/Frame.png' alt='rating star' />
                                <img src='/icons/Frame.png' alt='rating star' />
                                <img src='/icons/Frame.png' alt='rating star' />
                                <img src='/icons/Frame.png' alt='rating star' />
                                <img src='/icons/Frame.png' alt='rating star' />
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </section>
    )
}

export default Solutions