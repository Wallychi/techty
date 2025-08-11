import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div className='flex flex-col justify-between min-w-full h-screen'>
      <div className='border border-l-red-500 h-20'>
        <NavBar />
      </div>
      <div className=''>
        <Footer />
      </div>
    </div>
  )
}

export default Contact