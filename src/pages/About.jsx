import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className='flex flex-col justify-between min-w-full h-screen font-space'>
      <div className='bg-[#F0F8FF]'>
        <div className='fixed z-40 bg-white w-full'>
          <NavBar />
        </div>
        <div className='flex flex-col lg:flex-row mx-5 lg:mx-15 mt-25 items-center gap-10 lg:gap-20 pb-10 lg:pb-20'>
          <img src='/images/abouttechty.png' alt='Image of a man and woman' className='basis-1/2 w-80 lg:w-0' />
          <div className='flex flex-col gap-3 lg:gap-5 basis-1/2'>
            <h1 className='text-4xl lg:text-5xl font-extrabold'><span className='text-green-500'>About</span> Techty</h1>
            <p className='text-[#4E4E4E] text-base lg:text-lg text-justify lg:w-5/6'>We're constantly pushing the boundaries of what's possible and seeking new ways to improve our services and help our clients achieve their goals.</p>
            <h1 className='text-3xl font-bold'>Vision</h1>
            <p className='text-[#4E4E4E] text-base lg:text-lg text-justify lg:w-5/6'>Our vision is to create a better financial future for everyone. We believe that everyone deserves access to financial services and resources that empower them to achieve their goals.</p>
            <h1 className='text-3xl font-bold'>Mission</h1>
            <p className='text-[#4E4E4E] text-base lg:text-lg text-justify lg:w-5/6'>We're on a mission to empower people to take control of their finances and achieve their goals. We believe that everyone should have access to the tools and resources they have and make smart financial decisions.</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col-reverse lg:flex-row mx-5 lg:mx-15 mt-10 lg:mt-25 items-center gap-7 lg:gap-20 mb-10'>
        <div className='flex flex-col gap-5 lg:gap-7'>
          <h1 className='text-3xl font-bold'>Message from <span className='text-green-500'>Founder</span></h1>
          <div>
            <p className='text-[#4E4E4E] text-base lg:text-xl text-justify lg:w-11/12 lg:leading-6'>
              I would like to take a moment to express my sincere gratitude for choosing our IT services. As the founder of this company, I am proud to say that we are committed to providing the best possible solutions for your business needs.<br /><br />
              We understand the challenges that come with managing an enterprise in the digital age, and we are dedicated to delivering innovative and reliable IT services to help you navigate these challenges with ease.<br /><br />
              Our team of experts is constantly working to improve our services and stay up-to-date with the latest technological advancements. We strive to provide personalized solutions that cater to your specific requirements, ensuring that your business operations run smoothly and efficiently.
            </p>
          </div>
          <div>
            <p className='font-semibold text-xl lg:text-2xl'>John Willams</p>
            <p className='text-[#4E4E4E] text-lg lg:text-xl'>Founder, Ceo</p>
          </div>
        </div>
        <img src='/images/foundermessage.png' alt="'Image of the Techty's founder" className='w-80 lg:min-w-fit'/>
      </div>

      <div className='flex flex-col items-center mt-10 lg:mt-30 pb-15 lg:pb-30 mx-5 lg:mx-15'>
        <h1 className='text-center text-4xl lg:text-5xl font-bold lg:w-2/4'>Our <span className='text-green-500'>team</span> behind all the success we have</h1>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mt-15'>
          <div className='flex flex-col gap-5 lg:gap-7'>
            <img src='/images/techty_team 1.png' alt='Image of a Techty Team Member' className='rounded-xl' />
            <div className='flex flex-col gap-1 lg:gap-2'>
              <p className='font-bold text-2xl'>Hyeon Vivek</p>
              <p className='text-[#4E4E4E] text-lg lg:text-xl'>Financial Consultant</p>
            </div>
          </div>

          <div className='flex flex-col gap-5 lg:gap-7'>
            <img src='/images/techty_team 2.png' alt='Image of a Techty Team Member' className='rounded-xl' />
            <div className='flex flex-col gap-1 lg:gap-2'>
              <p className='font-bold text-2xl'>Hyeon Vivek</p>
              <p className='text-[#4E4E4E] text-lg lg:text-xl'>Financial Consultant</p>
            </div>
          </div>

          <div className='flex flex-col gap-5 lg:gap-7'>
            <img src='/images/techty_team 1.png' alt='Image of a Techty Team Member' className='rounded-xl' />
            <div className='flex flex-col gap-1 lg:gap-2'>
              <p className='font-bold text-2xl'>Hyeon Vivek</p>
              <p className='text-[#4E4E4E] text-lg lg:text-xl'>Financial Consultant</p>
            </div>
          </div>

          <div className='flex flex-col gap-5 lg:gap-7'>
            <img src='/images/techty_team 2.png' alt='Image of a Techty Team Member' className='rounded-xl' />
            <div className='flex flex-col gap-1 lg:gap-2'>
              <p className='font-bold text-2xl'>Hyeon Vivek</p>
              <p className='text-[#4E4E4E] text-lg lg:text-xl'>Financial Consultant</p>
            </div>
          </div>
        </div>
      </div>
      <div className='z-50'>
        <Footer />

      </div>
    </div>
  )
}

export default About