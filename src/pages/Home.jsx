import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Home = () => {
  return (

    <div className='flex flex-col justify-between min-w-full h-screen'>
      <div className='bg-green-100 h-20'>
        <NavBar  />
      </div>
      <div className=''>
        <Footer />
      </div>
    </div>
  )
}

export default Home