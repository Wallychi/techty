import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Sub_Main from '../components/Sub_Main'

const Service = () => {
  return (
    <section className='flex flex-col justify-between min-w-full h-screen font-space'>
      <div className='bg-[#F0F8FF]'>
        <NavBar />

        <div className='flex flex-col items-center gap-2'>
          <h1 className='text-5xl font-bold'>We provide the best service solutions.</h1>
          <p className='text-center text-[#4E4E4E]'>
            We're constantly pushing the boundaries of what's possible and seeking new ways to<br />
            improve our services and help our clients achieve their goals.
          </p>
        </div>

        <div className='grid grid-cols-4 gap-5 mx-15 mt-10 mb-20 '>
          <div className='flex flex-col bg-white rounded-xl p-5 gap-4'>
            <div className='flex justify-center w-[80px] rounded-full bg-[#28D08A]'>
              <img src='/icons/speaker.png' alt='Speaker icon' className='p-2 my-2' />
            </div>
            <h1 className='text-3xl font-semibold'>Online Marketing</h1>
            <p className='text-[#4E4E4E]'>In the new era of technology<br /> we look in the future with<br /> certainty and pride.</p>
            <img src='/icons/arrowleft.png' alt='Arrow left' className='w-7' />
          </div>

          <div className='flex flex-col bg-white rounded-xl p-5 gap-4'>
            <div className='flex justify-center w-[80px] rounded-full bg-[#28D08A]'>
              <img src='/icons/speaker.png' alt='Speaker icon' className='p-2 my-2' />
            </div>
            <h1 className='text-3xl font-semibold'>Online Marketing</h1>
            <p className='text-[#4E4E4E]'>In the new era of technology<br /> we look in the future with<br /> certainty and pride.</p>
            <img src='/icons/arrowleft.png' alt='Arrow left' className='w-7' />
          </div>

          <div className='flex flex-col bg-white rounded-xl p-5 gap-4'>
            <div className='flex justify-center w-[80px] rounded-full bg-[#28D08A]'>
              <img src='/icons/speaker.png' alt='Speaker icon' className='p-2 my-2' />
            </div>
            <h1 className='text-3xl font-semibold'>Online Marketing</h1>
            <p className='text-[#4E4E4E]'>In the new era of technology<br /> we look in the future with<br /> certainty and pride.</p>
            <img src='/icons/arrowleft.png' alt='Arrow left' className='w-7' />
          </div>

          <div className='flex flex-col bg-white rounded-xl p-5 gap-4'>
            <div className='flex justify-center w-[80px] rounded-full bg-[#28D08A]'>
              <img src='/icons/speaker.png' alt='Speaker icon' className='p-2 my-2' />
            </div>
            <h1 className='text-3xl font-semibold'>Online Marketing</h1>
            <p className='text-[#4E4E4E]'>In the new era of technology<br /> we look in the future with<br /> certainty and pride.</p>
            <img src='/icons/arrowleft.png' alt='Arrow left' className='w-7' />
          </div>
        </div>
      </div>
      <Sub_Main />

    </section>
  )
}

export default Service