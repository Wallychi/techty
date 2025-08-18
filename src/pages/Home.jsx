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

    <div className='flex flex-col justify-between min-w-full h-screen'>
      <div className='bg-[#F0F8FF]'>
        <NavBar  />
        <Main />
      </div>
      <div>
        <Sub_Main />
        <Potential />
      </div>
        <Solutions />
        <DataFetch />
        <Updates />
        <Footer />
    </div>
  )
}

export default Home