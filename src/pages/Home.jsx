import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Sub_Main from '../components/Sub_Main'
import Potential from '../components/Potential'
import Solutions from '../components/Solutions'
import DataFetch from '../components/DataFetch'
import Updates from '../components/Updates'

const Home = () => {
  return (

    <div className='flex flex-col'>
      <div className='bg-[#F0F8FF] flex flex-col'>
        <div className='fixed bg-[#F0F8FF] w-full z-40'>
          <NavBar />
        </div>
        <div className='mt-15'>
          <Main />
        </div>
      </div>
      <div>
        <Sub_Main />
        <Potential />
      </div>
      <Solutions />
      <DataFetch />
      <Updates />
      <div className='z-50'>
      <Footer />
      </div>
    </div>
  )
}

export default Home