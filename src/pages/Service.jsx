import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Sub_Main from '../components/Sub_Main'
import Button from '../components/Button'

const Service = () => {
  return (
    <section className='flex flex-col justify-between min-w-full h-screen font-space'>
      <div className='bg-[#F0F8FF]'>
        <div className='fixed z-40 w-full bg-white '>
          <NavBar />
        </div>

        <div className='flex flex-col items-center gap-4 lg:gap-2 mt-25 mx-5 lg:mx-0'>
          <h1 className='text-4xl text-center lg:text-5xl font-bold'>We provide the best <span className='text-[#28D08A]'>service</span> solutions.</h1>
          <p className='text-center lg:w-1/2 text-[#4E4E4E]'>
            We're constantly pushing the boundaries of what's possible and seeking new ways to
            improve our services and help our clients achieve their goals.
          </p>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mx-5 lg:mx-15 mt-5 lg:mt-10 mb-10 lg:mb-20 '>
          <div className='flex flex-col bg-white rounded-xl p-3 lg:p-5 gap-4'>
            <div className='flex justify-center w-[80px] rounded-full bg-[#28D08A]'>
              <img src='/icons/speaker.png' alt='Speaker icon' className='p-2 my-2' />
            </div>
            <h1 className='text-xl lg:text-3xl font-bold lg:font-semibold'>Online Marketing</h1>
            <p className='lg:w-11/12 text-[#4E4E4E]'>In the new era of technology we look in the future with certainty and pride.</p>
            <img src='/icons/arrowleft.png' alt='Arrow left' className='w-7' />
          </div>

          <div className='flex flex-col bg-white rounded-xl p-3 lg:p-5 gap-4'>
            <div className='flex justify-center w-[80px] rounded-full bg-[#28D08A]'>
              <img src='/icons/case.png' alt='Speaker icon' className='p-2 my-2' />
            </div>
            <h1 className='text-xl lg:text-3xl font-bold lg:font-semibold'>Online Marketing</h1>
            <p className='lg:w-11/12 text-[#4E4E4E]'>In the new era of technology we look in the future with certainty and pride.</p>
            <img src='/icons/arrowleft.png' alt='Arrow left' className='w-7' />
          </div>

          <div className='flex flex-col bg-white rounded-xl p-3 lg:p-5 gap-4'>
            <div className='flex justify-center w-[80px] rounded-full bg-[#28D08A]'>
              <img src='/icons/graph.png' alt='Speaker icon' className='p-2 my-2' />
            </div>
            <h1 className='text-xl lg:text-3xl font-bold lg:font-semibold'>Online Marketing</h1>
            <p className='lg:w-11/12 text-[#4E4E4E]'>In the new era of technology we look in the future with certainty and pride.</p>
            <img src='/icons/arrowleft.png' alt='Arrow left' className='w-7' />
          </div>

          <div className='flex flex-col bg-white rounded-xl p-3 lg:p-5 gap-4'>
            <div className='flex justify-center w-[80px] rounded-full bg-[#28D08A]'>
              <img src='/icons/screen.png' alt='Speaker icon' className='p-2 my-2' />
            </div>
            <h1 className='text-xl lg:text-3xl font-bold lg:font-semibold'>Online Marketing</h1>
            <p className='text-[#4E4E4E]'>In the new era of technology we look in the future with certainty and pride.</p>
            <img src='/icons/arrowleft.png' alt='Arrow left' className='w-7' />
          </div>
        </div>
      </div>
      <Sub_Main />

      <div className='flex flex-col bg-[#F0F8FF] items-center px-5 lg:px-15 mt-10 lg:mt-20 py-10 lg:py-15'>
        <h1 className='text-3xl lg:text-4xl font-bold text-center'>We have the best <span className='text-[#28D08A]'>pricing</span> package for you</h1>
        
        <div className='flex flex-col lg:flex-row bg-white rounded-xl p-3 gap-10 lg:gap-0 lg:p-7 items-center w-full lg:w-11/12 mt-10'>
          <div className='flex flex-col gap-5 lg:gap-7 lg:w-3/4'>
            <div className='flex flex-col gap-2 '>
              <p className='text-2xl lg:text-3xl font-semibold'>On Demand</p>
              <p className='text-[#495460]'>Get all these features when you are using as starter.</p>
            </div>
            <div className='flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-40 text-[#4E4E4E]'>
              <div className='flex flex-col gap-1'>
                <div className='flex gap-3'>
                  <img src='/icons/correct.png' />
                  <p>Unlimited projects</p>
                </div>

                <div className='flex gap-3'>
                  <img src='/icons/correct.png' />
                  <p>Analytics dashboard</p>
                </div>

                <div className='flex gap-3'>
                  <img src='/icons/correct.png' />
                  <p>Unlimited projects</p>
                </div>


              </div>
              <div className='flex flex-col gap-1'>
                <div className='flex gap-3'>
                  <img src='/icons/incorrect.png' />
                  <p>Insights panel</p>
                </div>

                <div className='flex gap-3'>
                  <img src='/icons/incorrect.png' />
                  <p>Email notifications</p>
                </div>

                <div className='flex gap-3'>
                  <img src='/icons/incorrect.png' />
                  <p>Share features</p>
                </div>


              </div>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center bg-[#F0F8FF] lg:w-1/4 p-5 gap-5'>
            <p className='text-2xl font-extrabold'>Quick Solutions</p>
            <p className='text-5xl font-extrabold'>$20<span className='text-lg font-semibold'>/hour</span></p>
            <Button name='Hire an Expert' style={"bg-black px-8 lg:hover:bg-[#28D08A] text-white"} />
          </div>
        </div>
        
        <div className='flex flex-col lg:flex-row bg-white rounded-xl p-5 lg:p-7 gap-10 lg:gap-0 items-center w-full lg:w-11/12 mt-10'>
          <div className='flex flex-col gap-5 lg:gap-7 lg:w-3/4'>
            <div className='flex flex-col gap-2'>
              <p className='text-2xl lg:text-3xl font-semibold'>Maintenance</p>
              <p className='text-[#495460]'>Get all these features when you are using as starter.</p>
            </div>
            <div className='flex items-center justify-between lg:justify-normal lg:gap-40 text-[#4E4E4E]'>
              <div className='flex flex-col gap-2'>
                <div className='flex gap-3'>
                  <img src='/icons/correct.png' />
                  <p>Unlimited projects</p>
                </div>

                <div className='flex gap-3'>
                  <img src='/icons/correct.png' />
                  <p>Analytics dashboard</p>
                </div>

                <div className='flex gap-3'>
                  <img src='/icons/correct.png' />
                  <p>Unlimited projects</p>
                </div>


              </div>
              <div className='flex flex-col gap-2'>
                <div className='flex gap-3'>
                  <img src='/icons/incorrect.png' />
                  <p>Insights panel</p>
                </div>

                <div className='flex gap-3'>
                  <img src='/icons/incorrect.png' />
                  <p>Email notifications</p>
                </div>

                <div className='flex gap-3'>
                  <img src='/icons/incorrect.png' />
                  <p>Share features</p>
                </div>


              </div>
            </div>
          </div>
          <div className='flex flex-col items-center justify-centerlg:w-1/4 bg-[#F0F8FF] p-6 gap-5'>
            <p className='text-2xl font-extrabold'>Monthly Solutions</p>
            <p className='text-5xl font-extrabold'>$99<span className='text-lg font-semibold'>/hour</span></p>
            <Button name='Hire an Expert' style={"bg-black px-8 lg:hover:bg-[#28D08A] text-white"} />
          </div>
        </div>

        
      </div>
      <div className='z-50'>
      <Footer />
      </div>

    </section>
  )
}

export default Service