import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

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
        
      </div>

    </section>
  )
}

export default Service