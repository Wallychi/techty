import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Button from '../components/Button'

const Contact = () => {
  return (
    <div className='flex flex-col font-space'>
      <NavBar />
      <div className='flex flex-col bg-[#F1F1F1] gap-5 pb-15 pt-10 '>
        <div className='flex flex-col items-center px-15 py-5 gap-5'>
          <h1 className='text-5xl font-semibold'>Contact Us</h1>
          <p className='text-center text-[#6F7681] leading-6'>We're constantly pushing the boundaries of what's<br />
            possible and seeking new ways to improve our<br /> services.</p>

          <div className='flex gap-50'>
            <div className='flex flex-col gap-5'>
              <p className='text-xl font-semibold'>We're happy to discuss your project<br /> and answer any question</p>
              <div className='grid grid-cols-2 gap-10'>

                <div className='flex flex-col'>
                  <div className='flex gap-2 items-center'>
                    <img src='/icons/call.png' alt='Call icon' />
                    <p className='text-lg font-semibold'>Toll Number</p>
                  </div>
                  <p className='text-[#6F7681] text-sm'>+234 808 226 0759</p>
                </div>

                <div className='flex flex-col'>
                  <div className='flex gap-2 items-center'>
                    <img src='/icons/message.png' alt='Email icon' />
                    <p className='text-lg font-semibold'>Mail Address</p>
                  </div>
                  <p className='text-[#6F7681] text-sm'>info@gmail.com</p>
                </div>

                <div className='flex flex-col'>
                  <div className='flex gap-2 items-center'>
                    <img src='/icons/time.png' alt='Clock icon' />
                    <p className='text-lg font-semibold'>Working Hours</p>
                  </div>
                  <p className='text-[#6F7681] text-sm'>Mon - Friday,<br />
                    9a.m - 8p.m</p>
                </div>

                <div className='flex flex-col'>
                  <div className='flex gap-2 items-center'>
                    <img src='/icons/location.png' alt='Location icon' />
                    <p className='text-lg font-semibold'>Office Address</p>
                  </div>
                  <p className='text-[#6F7681] text-sm'>Ikoyi,Lagos.</p>
                </div>

              </div>
            </div>
            <div className='flex flex-col bg-white p-5 rounded-md gap-2'>
              <p className='text-xl font-semibold'>Send Us Message</p>
              <p className='text-[#6F7681] text-sm'>Feel free to fill up the form and our team will get back to you<br /> within 24 hours.</p>
              <form>
                <input type='text' placeholder='Name' className='bg-[#F1F1F1] p-3 mr-3 mb-3 rounded-xl basis-1/2' />
                <input type='email' placeholder='Email' className='bg-[#F1F1F1] p-3 rounded-xl basis-1/2' /><br />
                <textarea className='bg-[#F1F1F1] text-[#6F7681] w-full p-3 h-50 rounded-xl '>Message</textarea>
                <Button name='Send Message' style={"bg-[#28D08A] text-white text-center mt-2"} />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact