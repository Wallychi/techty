import React from 'react'

const Sub_Main = () => {
  return (
    <section className='flex flex-col font-space w-full'>
        <div className='flex items-center justify-center py-25'>
            <p className='text-center text-5xl font-extrabold'>Empower your business<br /> with cutting-edge <span className='text-green-500'>solutions</span></p>
        </div>
        <div className='flex mx-15 border-b-1 border-b-gray-300 mb-10 gap-2'>
            <div className='flex items-center gap-3 pb-7'>
                <p className='text-6xl font-extrabold'>01</p>
                <div className='flex flex-col gap-2 '>
                    <p className='font-semibold text-lg'>Collect Ideas</p>
                    <p>Creating or improving products to meet our user needs.</p>
                </div>
            </div>
            <div className='flex items-center gap-3 pb-7'>
                <p className='font-extrabold text-6xl'>02</p>
                <div className='flex flex-col gap-2'>
                    <p className='font-semibold text-lg'>Data Analysis</p>
                    <p>Creating or improving products to meet our user needs.</p>
                </div>
            </div>
            <div className='flex items-center gap-3 pb-7'>
                <p className='font-extrabold text-6xl'>03</p>
                <div className='flex flex-col gap-2'>
                    <p className='font-semibold text-lg'>Analyze Products</p>
                    <p>Creating or improving products to meet our user needs.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Sub_Main