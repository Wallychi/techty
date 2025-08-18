import React from 'react'

const Updates = () => {
  return (
    <section className='flex flex-col items-center w-full mt-30 px-15 py-20 bg-[#F0F8FF] font-space'>
        <h1 className='text-5xl font-bold text-center'>Here's our latest<br /> updates from the <span className='text-green-500'>news</span></h1>
        <div className='grid grid-cols-3 gap-5 mt-10'>
            <div className='flex flex-col gap-3 bg-white rounded-2xl pb-5'>
                <img src='/images/updates 1.png' alt='Image of a laptop' />
                <p className='text-[#4E4E4E] px-4'>May 30</p>
                <p className='font-bold px-4 text-lg'>5 reasons why Techty is the go-to choice for small business.</p>
                <p className='text-[#4E4E4E] px-4'>Let us manage your IT for you so that you can get back to doing what you do best.</p>
            </div>

            <div className='flex flex-col gap-3 bg-white rounded-2xl pb-5'>
                <img src='/images/updates 2.png' alt='Image of a laptop' />
                <p className='text-[#4E4E4E] px-4'>May 30</p>
                <p className='font-bold px-4 text-lg'>The future is now: Explore Techty's AI-Powered tools</p>
                <p className='text-[#4E4E4E] px-4'>Let us manage your IT for you so that you can get back to doing what you do best.</p>
            </div>

            <div className='flex flex-col gap-3 bg-white rounded-2xl pb-5'>
                <img src='/images/updates 3.png' alt='Image of a laptop' />
                <p className='text-[#4E4E4E] px-4'>May 30</p>
                <p className='font-bold px-4 text-lg'>Cybersecurity threats in 2023: How AI can keep you protected</p>
                <p className='text-[#4E4E4E] px-4'>Let us manage your IT for you so that you can get back to doing what you do best.</p>
            </div>
        </div>
    </section>
  )
}

export default Updates