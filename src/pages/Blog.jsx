import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Blog = () => {
  return (
    <div className='flex flex-col justify-between min-w-full h-screen'>
      <div className='border border-b-2 h-20'>
        <NavBar />
      </div>
      <div className=''>
        <Footer />
      </div>
    </div>
  )
}

export default Blog