import React from 'react'
import Button from './Button'

const Solutions = () => {
    return (
        <section className='flex flex-col w-full font-space'>
            <div className='flex px-5 lg:px-15 items-center gap-3 mb-30'>
                <div className='flex flex-col gap-7'>
                    <h1 className='text-center lg:text-justify text-3xl lg:text-5xl lg:w-117 font-bold'>Our most priority is to provide the effective <span className='text-green-500'>solutions.</span></h1>
                    <p className='text-base lg:text-[15px]'>With a library full of thousands of templates to choose from, go idea to launch in a matter of minutes. Try uploading your own sale.</p>
                    <div className='flex items-center justify-center lg:justify-normal'>
                        <Button name='Request a Free Demo' style={"bg-black text-white px-10 lg:hover:bg-green-500"} />
                    </div>
                </div>
                <img src='/images/Frame 45.png' alt='Image of a man sipping tea' className='hidden lg:flex' />
            </div>

            <div className='lg:bg-[#171A1F] flex flex-col lg:flex-row text-white lg:items-center gap-10 lg:gap-5'>
                <img src='/images/Rectangle.png' />
                <div className='flex flex-col gap-10 px-5 py-5 bg-[#171A1F]'>
                    <h1 className='text-5xl font-bold lg:w-151'>Personalize your business <span className='text-green-500'>strategy</span> to reach out.</h1>
                    <p className='text-xl w-90 lg:w-140 text-[#FFFFFF]'>Our advisors approach each client individually, so each time we select the appropriate insurance for your needs. Thanks to conversation, we will adjust the appropriate cover.</p>

                    <div className='flex items-center gap-10 lg:gap-30'>
                        <div className='flex flex-col gap-3'>
                            <p className='text-4xl lg:text-6xl font-bold'>99.7%</p>
                            <p className='w-50 lg:w-full text-lg lg:text-xl'>Customer Satisfaction</p>
                            <div className='flex items-center'>
                                <img src='/icons/Frame.png' alt='rating star' />
                                <img src='/icons/Frame.png' alt='rating star' />
                                <img src='/icons/Frame.png' alt='rating star' />
                                <img src='/icons/Frame.png' alt='rating star' />
                                <img src='/icons/Frame.png' alt='rating star' />
                            </div>
                        </div>

                        <div className='flex flex-col items-center gap-3'>
                            <p className='text-4xl lg:text-6xl font-bold'>4X</p>
                            <p className='w-27 lg:w-full text-lg lg:text-xl'>New Visitors</p>
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