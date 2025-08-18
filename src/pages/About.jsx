import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className='flex flex-col justify-between min-w-full h-screen'>
      <div className='bg-[#F0F8FF]'>
        <NavBar />
        <div className='flex mx-15 items-center'>
          <img src='/images/abouttechty.png' alt='Image of a man and woman'/>
          <div className='flex flex-col gap-5'>
            <h1 className='text-4xl font-bold'>About <span className='text-green-500'>Techty</span></h1>
            <p>We're constantly pushing the boundaries of what's<br /> possible and seeking new ways to improve our services<br /> and help our clients achieve their goals.</p>
            <h1 className='text-2xl font-semibold'>Vision</h1>
            <p>Our vision is to create a better financial future for<br /> everyone. We believe that everyone deserves access to<br /> financial services and resources that empower them to<br /> achieve their goals.</p>
            <h1 className='text-2xl font-semibold'>Mission</h1>
            <p>We're on a mission to empower people to take control of<br /> their finances and achieve their goals. We believe that<br /> everyone should have access to the tools and resources<br /> they have and make smart financial decisions.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About